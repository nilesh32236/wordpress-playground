#!/usr/bin/env bash
set -euo pipefail

script="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")"
package="$(dirname "$(dirname "$script")")"

cd "$package/../../../kandelo"

if [ -n "${KANDELO_DEV_SHELL_TOOL_PATH:-}" ]; then
	host="$(rustc -vV | sed -n 's/^host: //p')"
	for target in kernel host nginx php platform-rootfs; do
		cargo run -p xtask --target "$host" -- bootstrap "$target"
	done
	exit
fi

scripts/dev-shell.sh bash "$script"

mkdir -p "$package/host/dist"
for entry in index node-kernel-worker-entry node-lazy-asset-resolver-entry worker-entry worker-main; do
	grep -v '^//# sourceMappingURL=' "host/dist/$entry.js" > "$package/host/dist/$entry.js"
done

rsync -a --delete --exclude=kandelo_image_module32.wasm --exclude='*.kandelo-lock' \
	local-binaries/source-only-v1/ "$package/local-binaries/source-only-v1/"
