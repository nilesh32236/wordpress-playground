/* kandelo-host-build-inputs-sha256:13337d182912ab643ec360a5486162a572b30515556b4796542987e466a317bc */

// src/node-lazy-asset-resolver-entry.ts
import { parentPort, workerData } from "worker_threads";

// src/binary-resolver.ts
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readSync,
  readdirSync,
  readFileSync,
  realpathSync,
  statSync
} from "fs";
import { createHash } from "crypto";
import { spawnSync } from "child_process";
import {
  basename,
  dirname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep
} from "path";
import { fileURLToPath } from "url";

// src/generated/abi.ts
var ABI_VERSION = 49;
var WPK_FORK_LINKED_FRAME_FORMAT_SECTION = "kandelo.wpk_fork.linked_frames";
var WPK_FORK_LINKED_FRAME_FORMAT_VERSION = 1;
var WPK_FORK_LINKED_FRAME_FORMAT_MAGIC = [75, 76, 67, 70];
var WPK_FORK_LINKED_FRAME_DESCRIPTOR_SIZE = 24;
var WPK_FORK_LINKED_FRAME_RECORD_ALIGNMENT = 8;
var WPK_FORK_LINKED_FRAME_REQUIRED_FLAGS = 3;
var WPK_FORK_LINKED_FRAME_POINTER_WIDTHS = [
  { bytes: 4, chunkHeaderSize: 32, nodeHeaderSize: 24 },
  { bytes: 8, chunkHeaderSize: 56, nodeHeaderSize: 32 }
];
var WPK_FORK_MODULE_STATE_FORMAT_SECTION = "kandelo.wpk_fork.module_state";
var WPK_FORK_MODULE_STATE_FORMAT_VERSION = 1;
var WPK_FORK_MODULE_STATE_FORMAT_MAGIC = [75, 70, 77, 68];
var WPK_FORK_MODULE_STATE_DESCRIPTOR_SIZE = 24;
var WPK_FORK_MODULE_STATE_RECORD_ALIGNMENT = 8;
var WPK_FORK_MODULE_STATE_REQUIRED_FLAGS = 7;
var WPK_FORK_MODULE_STATE_ARENA_VERSION = 1;
var WPK_FORK_MODULE_STATE_RECORD_VERSION = 1;
var WPK_FORK_MODULE_STATE_ROOT_POINTER_WORD_OFFSET = 1;
var WPK_FORK_MODULE_STATE_POINTER_WIDTHS = [
  { bytes: 4, chunkHeaderSize: 40 },
  { bytes: 8, chunkHeaderSize: 56 }
];
var WPK_FORK_GLOBAL_CATALOG_EXPORT_PREFIX = "__wpk_fork_global_";
var WPK_FORK_TABLE_CATALOG_EXPORT_PREFIX = "__wpk_fork_table_";
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I32 = 1;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I64 = 2;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F32 = 3;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F64 = 4;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_V128 = 5;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF = 6;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXTERNREF = 7;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXNREF = 8;
var WPK_FORK_MODULE_STATE_GLOBAL_TYPE_ANYREF = 9;
var WPK_FORK_CAPABILITIES_SECTION = "kandelo.wpk_fork.capabilities";
var WPK_FORK_CAPABILITIES_VERSION = 1;
var WPK_FORK_CAP_KNOWN_MASK = 7;
var WPK_FORK_CAP_REQUIRED_FLAGS = 4;
var WPK_FORK_EXCEPTION_CODEC_SECTION = "kandelo.wpk_fork.exception_codec";
var WPK_FORK_EXCEPTION_CODEC_VERSION = 1;
var WPK_FORK_EXCEPTION_CODEC_HEADER_SIZE = 8;
var WPK_FORK_EXCEPTION_CODEC_TAG_RECORD_SIZE = 16;
var WPK_FORK_UNWIND_TAG_IMPORT_MODULE = "env";
var WPK_FORK_UNWIND_TAG_IMPORT_NAME = "__wpk_fork_unwind";
var WPK_FORK_UNWIND_TRANSPORT_SECTION = "kandelo.wpk_fork.unwind_transport";
var WPK_FORK_STATIC_ROOT_CATALOG_EXPORT = "__wpk_fork_static_root_catalog";
var WPK_FORK_STATIC_ROOT_CATALOG_SECTION = "kandelo.wpk_fork.static_root_catalog";
var WPK_FORK_UNWIND_TRANSPORT_VERSION = 1;
var WPK_FORK_UNWIND_TRANSPORT_PAYLOAD_ARITY = 0;
var WPK_FORK_STATIC_ROOT_CATALOG_VERSION = 1;
var WPK_FORK_STATIC_ROOT_CATALOG_HEADER_SIZE = 12;
var WPK_FORK_STATIC_ROOT_CATALOG_MAGIC = [75, 70, 83, 82];
var WPK_FORK_IMPORTED_GLOBALS_SECTION = "kandelo.wpk_fork.imported_globals";
var WPK_FORK_FRAME_IMPORT_COMMIT = "__wpk_fork_frame_commit";
var WPK_FORK_FRAME_IMPORT_NEXT = "__wpk_fork_frame_next";
var WPK_FORK_FRAME_IMPORT_RESERVE = "__wpk_fork_frame_reserve";
var WPK_FORK_IMPORTED_GLOBALS_MAGIC = [75, 70, 73, 71];
var WPK_FORK_IMPORTED_GLOBALS_VERSION = 2;
var WPK_FORK_IMPORTED_GLOBALS_HEADER_SIZE = 16;
var WPK_FORK_IMPORTED_GLOBALS_RECORD_HEADER_SIZE = 24;
var WPK_FORK_IMPORTED_GLOBALS_FLAG_MUTABLE = 1;
var WPK_FORK_IMPORTED_GLOBALS_FLAG_SHARED = 2;
var WPK_FORK_IMPORTED_GLOBALS_KNOWN_FLAGS = 3;
var WPK_FORK_IMPORTED_TABLES_SECTION = "kandelo.wpk_fork.imported_tables";
var WPK_FORK_IMPORTED_TABLES_MAGIC = [75, 70, 73, 84];
var WPK_FORK_IMPORTED_TABLES_VERSION = 2;
var WPK_FORK_IMPORTED_TABLES_HEADER_SIZE = 16;
var WPK_FORK_IMPORTED_TABLES_RECORD_HEADER_SIZE = 24;
var WPK_FORK_IMPORTED_TABLES_FLAG_TABLE64 = 1;
var WPK_FORK_IMPORTED_TABLES_KNOWN_FLAGS = 1;
var WPK_FORK_EXCEPTION_CODEC_IMPORT_MODULE = "env";
var WPK_FORK_EXCEPTION_IMPORT_ACTIVATION = "__wpk_fork_module_activation";
var WPK_FORK_PROCESS_IMPORT = { module: "kernel", name: "kernel_fork", params: ["i32"], results: ["i32"] };
var WPK_FORK_REQUIRED_IMPORTS = [
  { module: "env", name: "__wpk_fork_frame_commit", params: ["ptr"], results: [] },
  { module: "env", name: "__wpk_fork_frame_next", params: ["ptr"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_frame_peek", params: ["ptr"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_frame_reserve", params: ["ptr"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_module_state_record_commit", params: ["ptr"], results: [] },
  { module: "env", name: "__wpk_fork_module_state_record_find", params: ["i32", "i32", "i32", "i32"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_module_state_record_reserve", params: ["i32", "i32", "i32", "ptr"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_module_state_table_dirty_count", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_module_state_table_dirty_mark", params: ["i32", "i64", "i64"], results: [] },
  { module: "env", name: "__wpk_fork_module_state_table_dirty_page", params: ["i32", "i32"], results: ["i64"] },
  { module: "env", name: "__wpk_fork_module_state_table_mutation_abort", params: [], results: [] },
  { module: "env", name: "__wpk_fork_module_state_table_mutation_begin", params: [], results: ["i64"] },
  { module: "env", name: "__wpk_fork_module_state_table_mutation_commit", params: ["i32", "i64", "i64"], results: [] },
  { module: "env", name: "__wpk_fork_module_state_table_reconcile", params: [], results: ["i64"] },
  { module: "env", name: "__wpk_fork_module_state_table_state_owned", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_decode_funcref", params: ["i32"], results: ["funcref"] },
  { module: "env", name: "__wpk_fork_ref_encode_funcref", params: ["funcref"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_broker_encode", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_broker_throw_recipe", params: ["i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_exn_cache_index", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_claim", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_define", params: ["i32", "i32", "i32", "i32", "ptr", "i32", "ptr", "i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_exn_ingress_throw", params: ["i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_exn_load", params: ["i32", "i32", "i32", "i32", "ptr", "i32", "ptr", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_lookup", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_exn_route", params: ["i32", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_broker_encode", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_capture_layout", params: ["i32", "i32", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_claim", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_define", params: ["i32", "i32", "i32", "i32", "i32", "ptr", "i32", "i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_gc_i31", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_load", params: ["i32", "i32", "i32", "i32", "i32", "ptr", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_lookup", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_payload_len", params: ["i32", "i32", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_provenance_begin", params: ["i32", "i32", "i32", "i32", "i64", "i64", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_gc_provenance_end", params: ["i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_gc_provenance_ref", params: ["i32", "i32", "i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_gc_route", params: ["i32", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_scratch_release", params: ["ptr", "ptr"], results: [] },
  { module: "env", name: "__wpk_fork_ref_scratch_reserve", params: ["ptr"], results: ["ptr"] },
  { module: "env", name: "__wpk_fork_ref_vector_append", params: ["i32", "i32"], results: [] },
  { module: "env", name: "__wpk_fork_ref_vector_begin", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_vector_finish", params: ["i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_ref_vector_get", params: ["i32", "i32"], results: ["i32"] },
  { module: "env", name: "__wpk_fork_resume_peek", params: ["i32"], results: ["i32"] }
];
var WPK_FORK_REQUIRED_TABLE_IMPORTS = [
  { module: "env", name: "__wpk_fork_ref_gc_transit", table64: false, element: "anyref", minimum: 1, maximum: null },
  { module: "env", name: "__wpk_fork_resume_table", table64: false, element: "funcref", minimum: 1, maximum: null }
];
var WPK_FORK_REQUIRED_EXPORTS = [
  { name: "__wpk_fork_exception_materialize", params: ["i32"], results: [] },
  { name: "__wpk_fork_ref_decode_exnref", params: ["i32"], results: ["exnref"] },
  { name: "__wpk_fork_ref_encode_exnref", params: ["exnref"], results: ["i32"] },
  { name: "__wpk_fork_ref_exn_abort", params: [], results: [] },
  { name: "__wpk_fork_ref_exn_clear", params: [], results: [] },
  { name: "__wpk_fork_ref_exn_encode_ingress", params: ["i32"], results: ["i32"] },
  { name: "__wpk_fork_ref_exn_throw_recipe", params: ["i32"], results: [] },
  { name: "__wpk_fork_ref_exn_throw_slot", params: ["i32"], results: [] },
  { name: "__wpk_fork_ref_gc_allocate", params: ["i32"], results: [] },
  { name: "__wpk_fork_ref_gc_encode_slot", params: ["i32"], results: ["i32"] },
  { name: "__wpk_fork_ref_gc_fill", params: ["i32"], results: [] },
  { name: "__wpk_fork_ref_gc_probe", params: ["i32"], results: ["i64"] },
  { name: "__wpk_fork_ref_gc_publish_externref", params: ["i32", "externref"], results: [] },
  { name: "__wpk_fork_static_root_harvest", params: [], results: [] },
  { name: "wpk_fork_abort_begin", params: ["ptr"], results: [] },
  { name: "wpk_fork_abort_end", params: [], results: [] },
  { name: "wpk_fork_module_bootstrap", params: [], results: [] },
  { name: "wpk_fork_module_state_finish_restore", params: ["i32"], results: [] },
  { name: "wpk_fork_module_state_restore", params: ["i32"], results: [] },
  { name: "wpk_fork_module_state_save", params: ["i32"], results: [] },
  { name: "wpk_fork_module_table_state_restore", params: ["i32"], results: [] },
  { name: "wpk_fork_module_table_state_save", params: ["i32"], results: [] },
  { name: "wpk_fork_module_thread_bootstrap", params: [], results: [] },
  { name: "wpk_fork_rewind_begin", params: ["ptr"], results: [] },
  { name: "wpk_fork_rewind_end", params: [], results: [] },
  { name: "wpk_fork_state", params: [], results: ["i32"] },
  { name: "wpk_fork_unwind_begin", params: ["ptr"], results: [] },
  { name: "wpk_fork_unwind_end", params: [], results: [] }
];
var HOST_ADAPTER_REQUIRED_KERNEL_EXPORTS = [
  "__abi_version",
  "kernel_alloc_scratch",
  "kernel_blocking_retry_release",
  "kernel_blocking_retry_token",
  "kernel_commit_process_exit",
  "kernel_create_process",
  "kernel_create_process_with_stdio",
  "kernel_dequeue_signal",
  "kernel_exec_commit",
  "kernel_exec_target_cancel",
  "kernel_exec_target_prepare",
  "kernel_exec_target_read",
  "kernel_exec_target_size",
  "kernel_fork_process",
  "kernel_get_cwd",
  "kernel_get_dirfd_path",
  "kernel_get_fd_path",
  "kernel_get_parent_pid",
  "kernel_get_process_exit_signal",
  "kernel_get_process_state",
  "kernel_get_socket_timeout_ms",
  "kernel_handle_channel",
  "kernel_handle_channel_record",
  "kernel_has_sa_nocldstop",
  "kernel_host_adapter_manifest_len",
  "kernel_host_adapter_manifest_ptr",
  "kernel_install_host_stdin_pipe",
  "kernel_ipc_shm_lookup_mapping_for_task",
  "kernel_ipc_shm_record_mapping_for_process",
  "kernel_ipc_shm_record_mapping_for_task",
  "kernel_ipc_shmat_for_process",
  "kernel_ipc_shmat_for_task",
  "kernel_ipc_shmdt_addr_for_process",
  "kernel_ipc_shmdt_addr_for_task",
  "kernel_ipc_shmdt_for_process",
  "kernel_ipc_shmdt_for_task",
  "kernel_is_fd_nonblock",
  "kernel_mark_process_signaled",
  "kernel_pcm_claim_transport",
  "kernel_pcm_clock_update",
  "kernel_pcm_reconcile",
  "kernel_pcm_transport_len",
  "kernel_pcm_transport_ptr",
  "kernel_pick_signal_target_tid",
  "kernel_pick_tcp_listener_target",
  "kernel_pipe_has_readers",
  "kernel_posix_timer_fire",
  "kernel_process_metadata_begin",
  "kernel_process_metadata_cancel",
  "kernel_process_metadata_commit",
  "kernel_process_metadata_stage",
  "kernel_process_secure_exec",
  "kernel_publish_spawn_child",
  "kernel_reap_exited_child",
  "kernel_remove_process",
  "kernel_set_current_tid",
  "kernel_set_cwd",
  "kernel_spawn_exec_commit",
  "kernel_spawn_exec_target_prepare",
  "kernel_spawn_process",
  "kernel_spawn_reserved_process",
  "kernel_spawn_scratch_begin",
  "kernel_spawn_scratch_cancel",
  "kernel_spawn_scratch_capacity",
  "kernel_spawn_scratch_pointer",
  "kernel_spawn_scratch_retained_capacity",
  "kernel_take_process_timer_cleanup",
  "kernel_thread_exit",
  "kernel_thread_has_deliverable",
  "kernel_transfer_channel_execute",
  "kernel_transfer_io_execute",
  "kernel_transfer_scratch_begin",
  "kernel_transfer_scratch_cancel",
  "kernel_transfer_scratch_capacity",
  "kernel_transfer_scratch_pointer",
  "kernel_validate_task",
  "kernel_wait_child_poll"
];

// src/constants.ts
var WPK_FORK_CORE_FRAME_IMPORT_NAMES = [
  WPK_FORK_FRAME_IMPORT_RESERVE,
  WPK_FORK_FRAME_IMPORT_COMMIT,
  WPK_FORK_FRAME_IMPORT_NEXT
];
var WPK_FORK_FRAME_IMPORT_MODULE = WPK_FORK_REQUIRED_IMPORTS.find(
  ({ name }) => name === WPK_FORK_FRAME_IMPORT_RESERVE
).module;
var FORK_STATIC_ROOT_CATALOG_MAGIC = Uint8Array.from(WPK_FORK_STATIC_ROOT_CATALOG_MAGIC);
function readULEB128(buf, off) {
  let result = 0, shift = 0, pos = off;
  for (; ; ) {
    const byte = buf[pos++];
    result |= (byte & 127) << shift;
    if ((byte & 128) === 0) break;
    shift += 7;
  }
  return [result, pos - off];
}
function readSLEB128_i32(buf, off) {
  let result = 0, shift = 0, pos = off;
  let byte = 0;
  for (; ; ) {
    byte = buf[pos++];
    result |= (byte & 127) << shift;
    shift += 7;
    if ((byte & 128) === 0) break;
  }
  if (shift < 32 && (byte & 64) !== 0) {
    result |= ~0 << shift;
  }
  return [result, pos - off];
}
function readSLEB128_i64(buf, off) {
  let result = 0n, shift = 0n, pos = off;
  let byte = 0;
  for (; ; ) {
    byte = buf[pos++];
    result |= BigInt(byte & 127) << shift;
    shift += 7n;
    if ((byte & 128) === 0) break;
  }
  if (shift < 64n && (byte & 64) !== 0) {
    result |= ~0n << shift;
  }
  return [result, pos - off];
}
function skipSignedLeb128(buf, off, maxBytes, context) {
  for (let count = 0; count < maxBytes; count++) {
    if (off >= buf.length) throw new Error(`${context} is truncated`);
    if ((buf[off++] & 128) === 0) return off;
  }
  throw new Error(`${context} has an overlong LEB128 encoding`);
}
function readWasmValueType(buf, off, context) {
  if (off >= buf.length) throw new Error(`${context} is truncated`);
  const code = buf[off++];
  switch (code) {
    case 127:
    // i32
    case 126:
    // i64
    case 125:
    // f32
    case 124:
    // f64
    case 123:
    // v128
    case 117:
    // nocontref
    case 116:
    // noexnref
    case 115:
    // nofuncref
    case 114:
    // noexternref
    case 113:
    // nullref
    case 112:
    // funcref
    case 111:
    // externref
    case 110:
    // anyref
    case 109:
    // eqref
    case 108:
    // i31ref
    case 107:
    // structref
    case 106:
    // arrayref
    case 105:
    // exnref
    case 104:
      return { code, shared: false, next: off };
    case 98:
    // exact heaptype
    case 99:
    // ref null heaptype
    case 100: {
      const shared = buf[off] === 101;
      if (shared) off++;
      const next = skipSignedLeb128(buf, off, 5, `${context} heap type`);
      const [heapType] = readSLEB128_i64(buf, off);
      return {
        code,
        heapType: Number(heapType),
        shared,
        next
      };
    }
    default:
      throw new Error(
        `${context} has unknown value type 0x${code.toString(16)}`
      );
  }
}
function readWasmStorageType(buf, off, context) {
  if (buf[off] === 120 || buf[off] === 119) {
    return { code: buf[off], shared: false, next: off + 1 };
  }
  return readWasmValueType(buf, off, context);
}
function skipWasmBlockType(buf, off) {
  const first = buf[off];
  if (first === 64 || // empty
  first === 127 || // i32
  first === 126 || // i64
  first === 125 || // f32
  first === 124 || // f64
  first === 123 || // v128
  first === 112 || // funcref
  first === 111) {
    return off + 1;
  }
  const [, bytes] = readSLEB128_i32(buf, off);
  return off + bytes;
}
function readWasmFunctionType(src, pos, context) {
  const [paramCount, paramCountBytes] = readULEB128(src, pos);
  pos += paramCountBytes;
  const params = [];
  const paramTypes = [];
  for (let index = 0; index < paramCount; index++) {
    const value = readWasmValueType(
      src,
      pos,
      `${context} parameter ${index}`
    );
    params.push(value.code);
    paramTypes.push({
      code: value.code,
      heapType: value.heapType,
      shared: value.shared
    });
    pos = value.next;
  }
  const [resultCount, resultCountBytes] = readULEB128(src, pos);
  pos += resultCountBytes;
  const results = [];
  const resultTypes = [];
  for (let index = 0; index < resultCount; index++) {
    const value = readWasmValueType(
      src,
      pos,
      `${context} result ${index}`
    );
    results.push(value.code);
    resultTypes.push({
      code: value.code,
      heapType: value.heapType,
      shared: value.shared
    });
    pos = value.next;
  }
  return {
    signature: { params, results, paramTypes, resultTypes },
    next: pos
  };
}
function readWasmFieldType(src, pos, context) {
  const storage = readWasmStorageType(src, pos, context);
  pos = storage.next;
  if (pos >= src.length) throw new Error(`${context} mutability is truncated`);
  const mutability = src[pos++];
  if (mutability !== 0 && mutability !== 1) {
    throw new Error(`${context} has invalid mutability ${mutability}`);
  }
  return pos;
}
function readWasmCompositeType(src, opcode, pos, context) {
  if (opcode === 101) {
    if (pos >= src.length) throw new Error(`${context} shared type is truncated`);
    opcode = src[pos++];
  }
  for (const prefix of [76, 77]) {
    if (opcode !== prefix) continue;
    const [, indexBytes] = readULEB128(src, pos);
    pos += indexBytes;
    if (pos >= src.length) throw new Error(`${context} descriptor is truncated`);
    opcode = src[pos++];
  }
  if (opcode === 96) {
    return readWasmFunctionType(src, pos, context);
  }
  if (opcode === 95) {
    const [fieldCount, fieldCountBytes] = readULEB128(src, pos);
    pos += fieldCountBytes;
    for (let index = 0; index < fieldCount; index++) {
      pos = readWasmFieldType(src, pos, `${context} field ${index}`);
    }
    return { next: pos };
  }
  if (opcode === 94) {
    return {
      next: readWasmFieldType(src, pos, `${context} array field`)
    };
  }
  if (opcode === 93) {
    return {
      next: skipSignedLeb128(src, pos, 5, `${context} continuation type`)
    };
  }
  throw new Error(
    `${context} has unknown composite type 0x${opcode.toString(16)}`
  );
}
function readWasmSubtype(src, pos, context) {
  if (pos >= src.length) throw new Error(`${context} is truncated`);
  let opcode = src[pos++];
  if (opcode === 79 || opcode === 80) {
    const [supertypeCount, countBytes] = readULEB128(src, pos);
    pos += countBytes;
    for (let index = 0; index < supertypeCount; index++) {
      const [, indexBytes] = readULEB128(src, pos);
      pos += indexBytes;
    }
    if (pos >= src.length) throw new Error(`${context} body is truncated`);
    opcode = src[pos++];
  }
  return readWasmCompositeType(src, opcode, pos, context);
}
function readWasmTypeSection(src, pos) {
  const [groupCount, groupCountBytes] = readULEB128(src, pos);
  pos += groupCountBytes;
  const types = [];
  for (let groupIndex = 0; groupIndex < groupCount; groupIndex++) {
    if (src[pos] === 78) {
      pos++;
      const [typeCount, typeCountBytes] = readULEB128(src, pos);
      pos += typeCountBytes;
      for (let typeIndex = 0; typeIndex < typeCount; typeIndex++) {
        const parsed = readWasmSubtype(
          src,
          pos,
          `recursive type ${groupIndex}:${typeIndex}`
        );
        types.push(parsed.signature);
        pos = parsed.next;
      }
    } else {
      const parsed = readWasmSubtype(src, pos, `type ${groupIndex}`);
      types.push(parsed.signature);
      pos = parsed.next;
    }
  }
  return { types, next: pos };
}
function skipVectorMemarg(buf, off) {
  const [, alignBytes] = readULEB128(buf, off);
  off += alignBytes;
  const [, offsetBytes] = readULEB128(buf, off);
  return off + offsetBytes;
}
function skipPrefixedInstructionImmediate(prefix, buf, off) {
  const [subop, subopBytes] = readULEB128(buf, off);
  off += subopBytes;
  if (prefix === 252) {
    switch (subop) {
      // saturating conversions
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return off;
      case 8: {
        const [, dataBytes] = readULEB128(buf, off);
        off += dataBytes;
        const [, memBytes] = readULEB128(buf, off);
        return off + memBytes;
      }
      case 9: {
        const [, dataBytes] = readULEB128(buf, off);
        return off + dataBytes;
      }
      case 10: {
        const [, dstBytes] = readULEB128(buf, off);
        off += dstBytes;
        const [, srcBytes] = readULEB128(buf, off);
        return off + srcBytes;
      }
      case 11: {
        const [, memBytes] = readULEB128(buf, off);
        return off + memBytes;
      }
      case 12: {
        const [, elemBytes] = readULEB128(buf, off);
        off += elemBytes;
        const [, tableBytes] = readULEB128(buf, off);
        return off + tableBytes;
      }
      case 13: {
        const [, elemBytes] = readULEB128(buf, off);
        return off + elemBytes;
      }
      case 14: {
        const [, dstBytes] = readULEB128(buf, off);
        off += dstBytes;
        const [, srcBytes] = readULEB128(buf, off);
        return off + srcBytes;
      }
      case 15:
      case 16:
      case 17: {
        const [, tableBytes] = readULEB128(buf, off);
        return off + tableBytes;
      }
      default:
        return null;
    }
  }
  if (prefix === 253) {
    if (subop === 12 || subop === 13) return off + 16;
    if (subop >= 21 && subop <= 34) return skipVectorMemarg(buf, off);
    if (subop === 84) return off + 1;
    if (subop >= 92 && subop <= 99) return off + 1;
    if (subop >= 112 && subop <= 123) return off + 1;
    if (subop >= 124 && subop <= 131) return off + 1;
    if (subop >= 156 && subop <= 159) return off + 1;
    return off;
  }
  if (prefix === 254) {
    if (subop === 0 || subop === 1) return skipVectorMemarg(buf, off);
    if (subop === 2) return skipVectorMemarg(buf, off);
    if (subop === 3) return off;
    if (subop >= 16 && subop <= 79) return skipVectorMemarg(buf, off);
    return null;
  }
  return null;
}
function skipImportEntry(src, pos, counts) {
  const [modLen, modLenBytes] = readULEB128(src, pos);
  pos += modLenBytes + modLen;
  const [fieldLen, fieldLenBytes] = readULEB128(src, pos);
  pos += fieldLenBytes + fieldLen;
  const kind = src[pos++];
  if (kind === 0) {
    counts.funcImports++;
    const [, n] = readULEB128(src, pos);
    pos += n;
  } else if (kind === 1) {
    pos = readWasmValueType(src, pos, "table import type").next;
    pos = readLimits(src, pos).next;
  } else if (kind === 2) {
    pos = readLimits(src, pos).next;
  } else if (kind === 3) {
    counts.globalImports++;
    pos = readWasmValueType(src, pos, "global import type").next;
    pos++;
  } else if (kind === 4) {
    pos++;
    const [, n] = readULEB128(src, pos);
    pos += n;
  }
  return pos;
}
function hasWasmMagic(src) {
  return src.length >= 8 && src[0] === 0 && src[1] === 97 && src[2] === 115 && src[3] === 109;
}
function readName(src, pos) {
  const [len, lenBytes] = readULEB128(src, pos);
  pos += lenBytes;
  const name = new TextDecoder().decode(src.subarray(pos, pos + len));
  return [name, pos + len];
}
function containsAscii(src, needle) {
  if (needle.length === 0) return true;
  const bytes = new TextEncoder().encode(needle);
  outer:
    for (let i = 0; i <= src.length - bytes.length; i++) {
      for (let j = 0; j < bytes.length; j++) {
        if (src[i + j] !== bytes[j]) continue outer;
      }
      return true;
    }
  return false;
}
var WPK_FORK_EXPORTS = WPK_FORK_REQUIRED_EXPORTS.map(({ name }) => name);
function forkGlobalRecipeTypeCode(valueType, functionTypes) {
  switch (valueType.code) {
    case 127:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I32;
    case 126:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I64;
    case 125:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F32;
    case 124:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F64;
    case 123:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_V128;
    case 112:
    // funcref
    case 115:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF;
    case 111:
    // externref
    case 114:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXTERNREF;
    case 105:
    // exnref
    case 116:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXNREF;
    case 104:
    // contref
    case 106:
    // arrayref
    case 107:
    // structref
    case 108:
    // i31ref
    case 109:
    // eqref
    case 110:
    // anyref
    case 113:
    // nullref
    case 117:
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_ANYREF;
    case 98:
    // exact heaptype
    case 99:
    // ref null heaptype
    case 100: {
      const heapType = valueType.heapType;
      if (heapType === void 0) return null;
      if (heapType === -16 || heapType === -13) {
        return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF;
      }
      if (heapType === -17 || heapType === -14) {
        return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXTERNREF;
      }
      if (heapType === -23 || heapType === -12) {
        return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXNREF;
      }
      if (heapType >= 0 && functionTypes[heapType] !== void 0) {
        return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF;
      }
      return WPK_FORK_MODULE_STATE_GLOBAL_TYPE_ANYREF;
    }
    default:
      return null;
  }
}
function appendSignature(signatures, identity, signature) {
  if (!signature) {
    throw new Error(`function ${identity} refers to an unknown type`);
  }
  const values = signatures.get(identity) ?? [];
  values.push(signature);
  signatures.set(identity, values);
}
function appendImportType(imports, identity, value) {
  const values = imports.get(identity) ?? [];
  values.push(value);
  imports.set(identity, values);
}
function readLimits(src, pos) {
  const [flags, flagBytes] = readULEB128(src, pos);
  pos += flagBytes;
  const [minimum, minBytes] = readULEB128(src, pos);
  pos += minBytes;
  let maximum = null;
  if ((flags & 1) !== 0) {
    const [value, maxBytes] = readULEB128(src, pos);
    pos += maxBytes;
    maximum = value;
  }
  return { flags, minimum, maximum, next: pos };
}
function readWasmForkArtifactFacts(programBytes) {
  const src = new Uint8Array(programBytes);
  if (!hasWasmMagic(src)) throw new Error("not a wasm binary");
  const functionTypes = [];
  const functionTypeIndices = [];
  const pendingFunctionExports = [];
  const facts = {
    functionTypes,
    functionTypeIndices,
    functionImports: /* @__PURE__ */ new Map(),
    functionImportEntries: [],
    globalImports: /* @__PURE__ */ new Map(),
    tableImports: /* @__PURE__ */ new Map(),
    tables: [],
    tagImports: /* @__PURE__ */ new Map(),
    functionExports: /* @__PURE__ */ new Map(),
    globalExports: /* @__PURE__ */ new Map(),
    tableExports: /* @__PURE__ */ new Map(),
    exports: /* @__PURE__ */ new Map(),
    memoryPointerWidths: [],
    forkCapabilities: [],
    linkedFrameDescriptors: [],
    exceptionCodecDescriptors: [],
    importedGlobalsDescriptors: [],
    importedTablesDescriptors: [],
    moduleStateDescriptors: [],
    staticRootDescriptors: [],
    unwindTransportDescriptors: [],
    nativeStartCount: 0,
    importsKernelFork: false
  };
  let globalImportCount = 0;
  let tableImportCount = 0;
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    const sectionEnd = contentOffset + sectionSize;
    if (sectionEnd > src.length) throw new Error("wasm section exceeds file size");
    let pos = contentOffset;
    let requireFullyConsumed = false;
    if (sectionId === 0) {
      const [name, afterName] = readName(src, pos);
      if (name === WPK_FORK_LINKED_FRAME_FORMAT_SECTION) {
        facts.linkedFrameDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_CAPABILITIES_SECTION) {
        facts.forkCapabilities.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_EXCEPTION_CODEC_SECTION) {
        facts.exceptionCodecDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_IMPORTED_GLOBALS_SECTION) {
        facts.importedGlobalsDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_IMPORTED_TABLES_SECTION) {
        facts.importedTablesDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_MODULE_STATE_FORMAT_SECTION) {
        facts.moduleStateDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_STATIC_ROOT_CATALOG_SECTION) {
        facts.staticRootDescriptors.push(src.slice(afterName, sectionEnd));
      } else if (name === WPK_FORK_UNWIND_TRANSPORT_SECTION) {
        facts.unwindTransportDescriptors.push(src.slice(afterName, sectionEnd));
      }
    } else if (sectionId === 1) {
      requireFullyConsumed = true;
      const parsed = readWasmTypeSection(src, pos);
      functionTypes.push(...parsed.types);
      pos = parsed.next;
    } else if (sectionId === 2) {
      requireFullyConsumed = true;
      const [count, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < count; i++) {
        const [moduleName, afterModule] = readName(src, pos);
        const [fieldName, afterField] = readName(src, afterModule);
        pos = afterField;
        const kind = src[pos++];
        if (kind === 0) {
          const [typeIndex, typeBytes] = readULEB128(src, pos);
          pos += typeBytes;
          const functionIndex = functionTypeIndices.length;
          functionTypeIndices.push(typeIndex);
          const identity = `${moduleName}.${fieldName}`;
          const signature = functionTypes[typeIndex];
          appendSignature(facts.functionImports, identity, signature);
          facts.functionImportEntries.push({
            module: moduleName,
            name: fieldName,
            importOrdinal: i,
            functionIndex,
            signature
          });
          if (identity === "kernel.kernel_fork") facts.importsKernelFork = true;
        } else if (kind === 1) {
          const element = readWasmValueType(
            src,
            pos,
            `table import ${moduleName}.${fieldName}`
          );
          pos = element.next;
          const limits = readLimits(src, pos);
          pos = limits.next;
          appendImportType(
            facts.tableImports,
            `${moduleName}.${fieldName}`,
            {
              module: moduleName,
              name: fieldName,
              importOrdinal: i,
              index: tableImportCount++,
              elementType: element.code,
              recipeTypeCode: forkGlobalRecipeTypeCode(
                element,
                functionTypes
              ),
              table64: (limits.flags & 4) !== 0,
              minimum: limits.minimum,
              maximum: limits.maximum
            }
          );
          facts.tables.push({
            elementType: element.code,
            table64: (limits.flags & 4) !== 0,
            minimum: limits.minimum,
            maximum: limits.maximum
          });
        } else if (kind === 2) {
          const limits = readLimits(src, pos);
          pos = limits.next;
          facts.memoryPointerWidths.push((limits.flags & 4) !== 0 ? 8 : 4);
        } else if (kind === 3) {
          const valueType = readWasmValueType(
            src,
            pos,
            `global import ${moduleName}.${fieldName}`
          );
          pos = valueType.next;
          if (pos >= src.length) {
            throw new Error(`global import ${moduleName}.${fieldName} is truncated`);
          }
          const flags = src[pos++];
          if ((flags & ~3) !== 0) {
            throw new Error(
              `global import ${moduleName}.${fieldName} has invalid flags ${flags}`
            );
          }
          appendImportType(
            facts.globalImports,
            `${moduleName}.${fieldName}`,
            {
              module: moduleName,
              name: fieldName,
              importOrdinal: i,
              index: globalImportCount++,
              valueType: valueType.code,
              recipeTypeCode: forkGlobalRecipeTypeCode(
                valueType,
                functionTypes
              ),
              mutable: (flags & 1) !== 0,
              shared: (flags & 2) !== 0
            }
          );
        } else if (kind === 4) {
          const attribute = src[pos++];
          if (attribute !== 0) {
            throw new Error(`unsupported wasm tag attribute ${attribute}`);
          }
          const [typeIndex, typeBytes] = readULEB128(src, pos);
          pos += typeBytes;
          appendSignature(
            facts.tagImports,
            `${moduleName}.${fieldName}`,
            functionTypes[typeIndex]
          );
        } else {
          throw new Error(`unsupported wasm import kind ${kind}`);
        }
      }
    } else if (sectionId === 3) {
      requireFullyConsumed = true;
      const [count, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < count; i++) {
        const [typeIndex, typeBytes] = readULEB128(src, pos);
        pos += typeBytes;
        functionTypeIndices.push(typeIndex);
      }
    } else if (sectionId === 4) {
      requireFullyConsumed = true;
      const [count, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let index = 0; index < count; index++) {
        const element = readWasmValueType(
          src,
          pos,
          `defined table ${index}`
        );
        pos = element.next;
        const limits = readLimits(src, pos);
        pos = limits.next;
        facts.tables.push({
          elementType: element.code,
          table64: (limits.flags & 4) !== 0,
          minimum: limits.minimum,
          maximum: limits.maximum
        });
      }
    } else if (sectionId === 5) {
      requireFullyConsumed = true;
      const [count, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < count; i++) {
        const limits = readLimits(src, pos);
        pos = limits.next;
        facts.memoryPointerWidths.push((limits.flags & 4) !== 0 ? 8 : 4);
      }
    } else if (sectionId === 7) {
      requireFullyConsumed = true;
      const [count, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < count; i++) {
        const [name, afterName] = readName(src, pos);
        pos = afterName;
        const kind = src[pos++];
        const [index, indexBytes] = readULEB128(src, pos);
        pos += indexBytes;
        appendImportType(facts.exports, name, { kind, index });
        if (kind === 0) {
          pendingFunctionExports.push({ name, index });
        } else if (kind === 3) {
          appendImportType(facts.globalExports, name, index);
        } else if (kind === 1) {
          appendImportType(facts.tableExports, name, index);
        }
      }
    } else if (sectionId === 8) {
      requireFullyConsumed = true;
      facts.nativeStartCount++;
      const [, functionIndexBytes] = readULEB128(src, pos);
      pos += functionIndexBytes;
    }
    if (requireFullyConsumed && pos !== sectionEnd) {
      throw new Error(`malformed wasm section ${sectionId}`);
    }
    offset = sectionEnd;
  }
  for (const { name, index } of pendingFunctionExports) {
    const typeIndex = functionTypeIndices[index];
    appendSignature(facts.functionExports, name, functionTypes[typeIndex]);
  }
  return facts;
}
function validateLinkedFrameDescriptor(descriptor) {
  if (descriptor.byteLength !== WPK_FORK_LINKED_FRAME_DESCRIPTOR_SIZE) {
    throw new Error(
      `linked-frame descriptor has ${descriptor.byteLength} bytes, expected ${WPK_FORK_LINKED_FRAME_DESCRIPTOR_SIZE}`
    );
  }
  if (!WPK_FORK_LINKED_FRAME_FORMAT_MAGIC.every((byte, index) => descriptor[index] === byte)) {
    throw new Error("linked-frame descriptor has invalid magic");
  }
  const view = new DataView(
    descriptor.buffer,
    descriptor.byteOffset,
    descriptor.byteLength
  );
  const version = view.getUint16(4, true);
  if (version !== WPK_FORK_LINKED_FRAME_FORMAT_VERSION) {
    throw new Error(`linked-frame descriptor version ${version} is unsupported`);
  }
  const declaredSize = view.getUint16(6, true);
  if (declaredSize !== WPK_FORK_LINKED_FRAME_DESCRIPTOR_SIZE) {
    throw new Error(
      `linked-frame descriptor declares size ${declaredSize}, expected ${WPK_FORK_LINKED_FRAME_DESCRIPTOR_SIZE}`
    );
  }
  const pointerWidth = view.getUint8(8);
  const pointerFormat = WPK_FORK_LINKED_FRAME_POINTER_WIDTHS.find(
    ({ bytes }) => bytes === pointerWidth
  );
  if (!pointerFormat) {
    throw new Error(`linked-frame descriptor pointer width ${pointerWidth} is unsupported`);
  }
  if (view.getUint8(9) !== WPK_FORK_LINKED_FRAME_RECORD_ALIGNMENT) {
    throw new Error(
      `linked-frame descriptor alignment ${view.getUint8(9)} is unsupported`
    );
  }
  const flags = view.getUint16(10, true);
  if (flags !== WPK_FORK_LINKED_FRAME_REQUIRED_FLAGS) {
    throw new Error(
      `linked-frame descriptor flags 0x${flags.toString(16)} do not equal required flags 0x${WPK_FORK_LINKED_FRAME_REQUIRED_FLAGS.toString(16)}`
    );
  }
  if (view.getUint32(12, true) !== pointerFormat.chunkHeaderSize || view.getUint32(16, true) !== pointerFormat.nodeHeaderSize) {
    throw new Error(
      `linked-frame descriptor header sizes do not match its ${pointerWidth}-byte pointer width`
    );
  }
  return pointerFormat.bytes;
}
function validateForkCapabilities(sections) {
  if (sections.length === 0) {
    return [`missing required ${WPK_FORK_CAPABILITIES_SECTION} capability`];
  }
  if (sections.length !== 1) {
    return [
      `has ${sections.length} ${WPK_FORK_CAPABILITIES_SECTION} sections, expected exactly one`
    ];
  }
  const capability = sections[0];
  if (capability.byteLength !== 2) {
    return [
      `${WPK_FORK_CAPABILITIES_SECTION} has ${capability.byteLength} bytes, expected 2`
    ];
  }
  if (capability[0] !== WPK_FORK_CAPABILITIES_VERSION) {
    return [
      `${WPK_FORK_CAPABILITIES_SECTION} version ${capability[0]} is unsupported`
    ];
  }
  const flags = capability[1];
  if ((flags & ~WPK_FORK_CAP_KNOWN_MASK) !== 0) {
    return [
      `${WPK_FORK_CAPABILITIES_SECTION} has unknown flags 0x${flags.toString(16)}`
    ];
  }
  if ((flags & WPK_FORK_CAP_REQUIRED_FLAGS) !== WPK_FORK_CAP_REQUIRED_FLAGS) {
    return [
      `${WPK_FORK_CAPABILITIES_SECTION} flags 0x${flags.toString(16)} omit required activation-state safety flags 0x${WPK_FORK_CAP_REQUIRED_FLAGS.toString(16)}`
    ];
  }
  return [];
}
function validateForkUnwindTransport(facts, hasFrames) {
  const failures = [];
  const identity = `${WPK_FORK_UNWIND_TAG_IMPORT_MODULE}.${WPK_FORK_UNWIND_TAG_IMPORT_NAME}`;
  const tags = facts.tagImports.get(identity);
  if (!tags) {
    if (hasFrames) {
      failures.push(`missing required private fork-unwind tag import ${identity}`);
    }
  } else if (tags.length !== 1) {
    failures.push(`duplicate private fork-unwind tag import ${identity}`);
  } else if (tags[0].params.length !== 0 || tags[0].results.length !== 0) {
    failures.push(`private fork-unwind tag ${identity} must have an empty payload`);
  }
  if (facts.unwindTransportDescriptors.length === 0) {
    failures.push(`missing required ${WPK_FORK_UNWIND_TRANSPORT_SECTION} descriptor`);
  } else if (facts.unwindTransportDescriptors.length !== 1) {
    failures.push(
      `has ${facts.unwindTransportDescriptors.length} ${WPK_FORK_UNWIND_TRANSPORT_SECTION} descriptors, expected exactly one`
    );
  } else {
    const descriptor = facts.unwindTransportDescriptors[0];
    if (descriptor.length !== 2 || descriptor[0] !== WPK_FORK_UNWIND_TRANSPORT_VERSION || descriptor[1] !== WPK_FORK_UNWIND_TRANSPORT_PAYLOAD_ARITY) {
      failures.push(
        `${WPK_FORK_UNWIND_TRANSPORT_SECTION} must be [${WPK_FORK_UNWIND_TRANSPORT_VERSION}, ${WPK_FORK_UNWIND_TRANSPORT_PAYLOAD_ARITY}]`
      );
    }
  }
  return failures;
}
function validateForkModuleStateDescriptor(descriptors, expectedPointerWidth) {
  if (descriptors.length === 0) {
    return [`missing required ${WPK_FORK_MODULE_STATE_FORMAT_SECTION} descriptor`];
  }
  if (descriptors.length !== 1) {
    return [
      `has ${descriptors.length} ${WPK_FORK_MODULE_STATE_FORMAT_SECTION} descriptors, expected exactly one`
    ];
  }
  const bytes = descriptors[0];
  if (bytes.byteLength !== WPK_FORK_MODULE_STATE_DESCRIPTOR_SIZE) {
    return [
      `${WPK_FORK_MODULE_STATE_FORMAT_SECTION} has ${bytes.byteLength} bytes, expected ${WPK_FORK_MODULE_STATE_DESCRIPTOR_SIZE}`
    ];
  }
  if (!WPK_FORK_MODULE_STATE_FORMAT_MAGIC.every((byte, index) => bytes[index] === byte)) {
    return [`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} has invalid magic`];
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const version = view.getUint16(4, true);
  const declaredSize = view.getUint16(6, true);
  const pointerWidth = view.getUint8(8);
  const pointerFormat = WPK_FORK_MODULE_STATE_POINTER_WIDTHS.find(
    ({ bytes: bytes2 }) => bytes2 === pointerWidth
  );
  const alignment = view.getUint8(9);
  const flags = view.getUint16(10, true);
  const arenaVersion = view.getUint16(12, true);
  const recordVersion = view.getUint16(14, true);
  const rootWord = view.getUint32(16, true);
  const reserved = view.getUint32(20, true);
  const failures = [];
  if (version !== WPK_FORK_MODULE_STATE_FORMAT_VERSION) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} version ${version} is unsupported`);
  }
  if (declaredSize !== WPK_FORK_MODULE_STATE_DESCRIPTOR_SIZE) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} declares size ${declaredSize}`);
  }
  if (!pointerFormat) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} pointer width ${pointerWidth} is unsupported`);
  } else if (expectedPointerWidth !== null && pointerWidth !== expectedPointerWidth) {
    failures.push(
      `${WPK_FORK_MODULE_STATE_FORMAT_SECTION} pointer width ${pointerWidth} does not match linked frames ${expectedPointerWidth}`
    );
  }
  if (alignment !== WPK_FORK_MODULE_STATE_RECORD_ALIGNMENT) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} alignment ${alignment} is unsupported`);
  }
  if (flags !== WPK_FORK_MODULE_STATE_REQUIRED_FLAGS) {
    failures.push(
      `${WPK_FORK_MODULE_STATE_FORMAT_SECTION} flags 0x${flags.toString(16)} do not equal required flags 0x${WPK_FORK_MODULE_STATE_REQUIRED_FLAGS.toString(16)}`
    );
  }
  if (arenaVersion !== WPK_FORK_MODULE_STATE_ARENA_VERSION) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} arena version ${arenaVersion} is unsupported`);
  }
  if (recordVersion !== WPK_FORK_MODULE_STATE_RECORD_VERSION) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} record version ${recordVersion} is unsupported`);
  }
  if (rootWord !== WPK_FORK_MODULE_STATE_ROOT_POINTER_WORD_OFFSET) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} root word ${rootWord} is unsupported`);
  }
  if (reserved !== 0) {
    failures.push(`${WPK_FORK_MODULE_STATE_FORMAT_SECTION} reserved field is nonzero`);
  }
  return failures;
}
function validateForkExceptionCodecDescriptor(descriptors) {
  if (descriptors.length === 0) {
    return [`missing required ${WPK_FORK_EXCEPTION_CODEC_SECTION} descriptor`];
  }
  if (descriptors.length !== 1) {
    return [
      `has ${descriptors.length} ${WPK_FORK_EXCEPTION_CODEC_SECTION} descriptors, expected exactly one`
    ];
  }
  const bytes = descriptors[0];
  if (bytes.byteLength < WPK_FORK_EXCEPTION_CODEC_HEADER_SIZE) {
    return [`${WPK_FORK_EXCEPTION_CODEC_SECTION} descriptor is truncated`];
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const failures = [];
  if (view.getUint8(0) !== WPK_FORK_EXCEPTION_CODEC_VERSION) {
    failures.push(
      `${WPK_FORK_EXCEPTION_CODEC_SECTION} version ${view.getUint8(0)} is unsupported`
    );
  }
  if (view.getUint8(1) !== 0 || view.getUint16(2, true) !== 0) {
    failures.push(`${WPK_FORK_EXCEPTION_CODEC_SECTION} reserved fields are nonzero`);
  }
  const count = view.getUint32(4, true);
  const expectedSize = WPK_FORK_EXCEPTION_CODEC_HEADER_SIZE + count * WPK_FORK_EXCEPTION_CODEC_TAG_RECORD_SIZE;
  if (!Number.isSafeInteger(expectedSize) || bytes.byteLength !== expectedSize) {
    failures.push(
      `${WPK_FORK_EXCEPTION_CODEC_SECTION} has ${bytes.byteLength} bytes, expected ${expectedSize}`
    );
    return failures;
  }
  const layouts = /* @__PURE__ */ new Set();
  for (let index = 0; index < count; index++) {
    const offset = WPK_FORK_EXCEPTION_CODEC_HEADER_SIZE + index * WPK_FORK_EXCEPTION_CODEC_TAG_RECORD_SIZE;
    const ordinal = view.getUint32(offset, true);
    const layoutId = view.getUint32(offset + 4, true);
    if (ordinal !== index) {
      failures.push(
        `${WPK_FORK_EXCEPTION_CODEC_SECTION} tag ordinal ${ordinal} is noncanonical at ${index}`
      );
    }
    if (layoutId > 2147483647 || layouts.has(layoutId)) {
      failures.push(
        `${WPK_FORK_EXCEPTION_CODEC_SECTION} layout id ${layoutId} is invalid or duplicated`
      );
    }
    layouts.add(layoutId);
  }
  return failures;
}
var FORK_IMPORTED_GLOBAL_TYPE_CODES = /* @__PURE__ */ new Set([
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I32,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_I64,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F32,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_F64,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_V128,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXTERNREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXNREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_ANYREF
]);
function importedGlobalNeedsRecipe(global) {
  return !(global.module === WPK_FORK_EXCEPTION_CODEC_IMPORT_MODULE && (global.name === WPK_FORK_EXCEPTION_IMPORT_ACTIVATION || global.name === "__channel_base" || global.name === "__wpk_fork_module_state_table_generation_addr"));
}
function validateForkImportedGlobalsDescriptor(facts) {
  const descriptors = facts.importedGlobalsDescriptors;
  if (descriptors.length === 0) {
    return [`missing required ${WPK_FORK_IMPORTED_GLOBALS_SECTION} descriptor`];
  }
  if (descriptors.length !== 1) {
    return [
      `has ${descriptors.length} ${WPK_FORK_IMPORTED_GLOBALS_SECTION} descriptors, expected exactly one`
    ];
  }
  const bytes = descriptors[0];
  if (bytes.byteLength < WPK_FORK_IMPORTED_GLOBALS_HEADER_SIZE) {
    return [`${WPK_FORK_IMPORTED_GLOBALS_SECTION} descriptor is truncated`];
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const failures = [];
  if (!WPK_FORK_IMPORTED_GLOBALS_MAGIC.every((byte, index) => bytes[index] === byte)) {
    failures.push(`${WPK_FORK_IMPORTED_GLOBALS_SECTION} has invalid magic`);
  }
  if (view.getUint16(4, true) !== WPK_FORK_IMPORTED_GLOBALS_VERSION) {
    failures.push(
      `${WPK_FORK_IMPORTED_GLOBALS_SECTION} version ${view.getUint16(4, true)} is unsupported`
    );
  }
  if (view.getUint16(6, true) !== WPK_FORK_IMPORTED_GLOBALS_HEADER_SIZE) {
    failures.push(`${WPK_FORK_IMPORTED_GLOBALS_SECTION} declares an invalid header size`);
  }
  const count = view.getUint32(8, true);
  if (view.getUint32(12, true) !== 0) {
    failures.push(`${WPK_FORK_IMPORTED_GLOBALS_SECTION} reserved field is nonzero`);
  }
  const owners = /* @__PURE__ */ new Set();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  const records = [];
  let offset = WPK_FORK_IMPORTED_GLOBALS_HEADER_SIZE;
  for (let index = 0; index < count; index++) {
    if (offset + WPK_FORK_IMPORTED_GLOBALS_RECORD_HEADER_SIZE > bytes.byteLength) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} header is truncated`
      );
      return failures;
    }
    const recordSize = view.getUint32(offset, true);
    const ownerId = view.getUint32(offset + 4, true);
    const typeCode = view.getUint8(offset + 8);
    const flags = view.getUint8(offset + 9);
    const moduleLength = view.getUint32(offset + 12, true);
    const nameLength = view.getUint32(offset + 16, true);
    const reservedZero = view.getUint32(offset + 20, true);
    const expectedSize = WPK_FORK_IMPORTED_GLOBALS_RECORD_HEADER_SIZE + moduleLength + nameLength;
    if (!Number.isSafeInteger(expectedSize) || recordSize !== expectedSize || recordSize < WPK_FORK_IMPORTED_GLOBALS_RECORD_HEADER_SIZE || offset + recordSize > bytes.byteLength) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} has invalid bounds`
      );
      return failures;
    }
    if (ownerId === 0 || owners.has(ownerId)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} has invalid or duplicated owner ${ownerId}`
      );
    }
    owners.add(ownerId);
    if (!FORK_IMPORTED_GLOBAL_TYPE_CODES.has(typeCode)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} has unknown value type ${typeCode}`
      );
    }
    if ((flags & ~WPK_FORK_IMPORTED_GLOBALS_KNOWN_FLAGS) !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} has unknown flags 0x${flags.toString(16)}`
      );
    }
    if (view.getUint16(offset + 10, true) !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} reserved fields are nonzero`
      );
    }
    if (reservedZero !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} reserved import word is nonzero`
      );
    }
    const namesOffset = offset + WPK_FORK_IMPORTED_GLOBALS_RECORD_HEADER_SIZE;
    try {
      const module = decoder.decode(
        bytes.subarray(namesOffset, namesOffset + moduleLength)
      );
      const name = decoder.decode(
        bytes.subarray(
          namesOffset + moduleLength,
          namesOffset + moduleLength + nameLength
        )
      );
      records.push({
        ownerId,
        typeCode,
        flags,
        module,
        name
      });
    } catch {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} record ${index} contains invalid UTF-8`
      );
    }
    offset += recordSize;
  }
  if (offset !== bytes.byteLength) {
    failures.push(`${WPK_FORK_IMPORTED_GLOBALS_SECTION} has trailing bytes`);
  }
  const globalImports = [...facts.globalImports.values()].flat();
  const globalImportsByIndex = new Map(
    globalImports.map((global) => [global.index, global])
  );
  const matchedImportIndices = /* @__PURE__ */ new Set();
  for (const record of records) {
    const catalogName = `${WPK_FORK_GLOBAL_CATALOG_EXPORT_PREFIX}${record.ownerId}`;
    const catalog = facts.exports.get(catalogName);
    if (!catalog || catalog.length !== 1 || catalog[0].kind !== 3) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} owner ${record.ownerId} lacks exactly one global catalog export ${catalogName}`
      );
      continue;
    }
    const imported = globalImportsByIndex.get(catalog[0].index);
    if (!imported || !importedGlobalNeedsRecipe(imported)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} owner ${record.ownerId} does not identify a reconstructible imported global`
      );
      continue;
    }
    if (imported.module !== record.module || imported.name !== record.name || imported.recipeTypeCode !== record.typeCode || imported.mutable !== ((record.flags & WPK_FORK_IMPORTED_GLOBALS_FLAG_MUTABLE) !== 0) || imported.shared !== ((record.flags & WPK_FORK_IMPORTED_GLOBALS_FLAG_SHARED) !== 0)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} owner ${record.ownerId} does not match its imported global declaration`
      );
      continue;
    }
    if (matchedImportIndices.has(imported.index)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} repeats imported global index ${imported.index}`
      );
      continue;
    }
    matchedImportIndices.add(imported.index);
  }
  for (const imported of globalImports) {
    if (importedGlobalNeedsRecipe(imported) && !matchedImportIndices.has(imported.index)) {
      failures.push(
        `${WPK_FORK_IMPORTED_GLOBALS_SECTION} omits imported global ${imported.module}.${imported.name} at index ${imported.index}`
      );
    }
  }
  for (const [name, exports] of facts.exports) {
    if (!name.startsWith(WPK_FORK_GLOBAL_CATALOG_EXPORT_PREFIX)) continue;
    const suffix = name.slice(WPK_FORK_GLOBAL_CATALOG_EXPORT_PREFIX.length);
    const owner = Number(suffix);
    if (!/^[1-9][0-9]*$/.test(suffix) || !Number.isSafeInteger(owner) || owner > 4294967295 || exports.length !== 1 || exports[0].kind !== 3) {
      failures.push(`malformed reserved fork global catalog export ${name}`);
    }
  }
  return failures;
}
var FORK_IMPORTED_TABLE_TYPE_CODES = /* @__PURE__ */ new Set([
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_FUNCREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXTERNREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_EXNREF,
  WPK_FORK_MODULE_STATE_GLOBAL_TYPE_ANYREF
]);
function importedTableNeedsRecipe(table) {
  return !WPK_FORK_REQUIRED_TABLE_IMPORTS.some(
    ({ module, name }) => table.module === module && table.name === name
  );
}
function validateForkImportedTablesDescriptor(facts) {
  const descriptors = facts.importedTablesDescriptors;
  if (descriptors.length === 0) {
    return [`missing required ${WPK_FORK_IMPORTED_TABLES_SECTION} descriptor`];
  }
  if (descriptors.length !== 1) {
    return [
      `has ${descriptors.length} ${WPK_FORK_IMPORTED_TABLES_SECTION} descriptors, expected exactly one`
    ];
  }
  const bytes = descriptors[0];
  if (bytes.byteLength < WPK_FORK_IMPORTED_TABLES_HEADER_SIZE) {
    return [`${WPK_FORK_IMPORTED_TABLES_SECTION} descriptor is truncated`];
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const failures = [];
  if (!WPK_FORK_IMPORTED_TABLES_MAGIC.every((byte, index) => bytes[index] === byte)) {
    failures.push(`${WPK_FORK_IMPORTED_TABLES_SECTION} has invalid magic`);
  }
  if (view.getUint16(4, true) !== WPK_FORK_IMPORTED_TABLES_VERSION) {
    failures.push(
      `${WPK_FORK_IMPORTED_TABLES_SECTION} version ${view.getUint16(4, true)} is unsupported`
    );
  }
  if (view.getUint16(6, true) !== WPK_FORK_IMPORTED_TABLES_HEADER_SIZE) {
    failures.push(`${WPK_FORK_IMPORTED_TABLES_SECTION} declares an invalid header size`);
  }
  const count = view.getUint32(8, true);
  if (view.getUint32(12, true) !== 0) {
    failures.push(`${WPK_FORK_IMPORTED_TABLES_SECTION} reserved field is nonzero`);
  }
  const owners = /* @__PURE__ */ new Set();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  const records = [];
  let offset = WPK_FORK_IMPORTED_TABLES_HEADER_SIZE;
  for (let index = 0; index < count; index++) {
    if (offset + WPK_FORK_IMPORTED_TABLES_RECORD_HEADER_SIZE > bytes.byteLength) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} header is truncated`
      );
      return failures;
    }
    const recordSize = view.getUint32(offset, true);
    const ownerId = view.getUint32(offset + 4, true);
    const typeCode = view.getUint8(offset + 8);
    const flags = view.getUint8(offset + 9);
    const moduleLength = view.getUint32(offset + 12, true);
    const nameLength = view.getUint32(offset + 16, true);
    const reservedZero = view.getUint32(offset + 20, true);
    const expectedSize = WPK_FORK_IMPORTED_TABLES_RECORD_HEADER_SIZE + moduleLength + nameLength;
    if (!Number.isSafeInteger(expectedSize) || recordSize !== expectedSize || recordSize < WPK_FORK_IMPORTED_TABLES_RECORD_HEADER_SIZE || offset + recordSize > bytes.byteLength) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} has invalid bounds`
      );
      return failures;
    }
    if (ownerId === 0 || owners.has(ownerId)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} has invalid or duplicated owner ${ownerId}`
      );
    }
    owners.add(ownerId);
    if (!FORK_IMPORTED_TABLE_TYPE_CODES.has(typeCode)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} has unknown element type ${typeCode}`
      );
    }
    if ((flags & ~WPK_FORK_IMPORTED_TABLES_KNOWN_FLAGS) !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} has unknown flags 0x${flags.toString(16)}`
      );
    }
    if (view.getUint16(offset + 10, true) !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} reserved fields are nonzero`
      );
    }
    if (reservedZero !== 0) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} reserved import word is nonzero`
      );
    }
    const namesOffset = offset + WPK_FORK_IMPORTED_TABLES_RECORD_HEADER_SIZE;
    try {
      const module = decoder.decode(
        bytes.subarray(namesOffset, namesOffset + moduleLength)
      );
      const name = decoder.decode(
        bytes.subarray(
          namesOffset + moduleLength,
          namesOffset + moduleLength + nameLength
        )
      );
      records.push({
        ownerId,
        typeCode,
        flags,
        module,
        name
      });
    } catch {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} record ${index} contains invalid UTF-8`
      );
    }
    offset += recordSize;
  }
  if (offset !== bytes.byteLength) {
    failures.push(`${WPK_FORK_IMPORTED_TABLES_SECTION} has trailing bytes`);
  }
  const tableImports = [...facts.tableImports.values()].flat();
  const tableImportsByIndex = new Map(
    tableImports.map((table) => [table.index, table])
  );
  const matchedImportIndices = /* @__PURE__ */ new Set();
  for (const record of records) {
    const catalogName = `${WPK_FORK_TABLE_CATALOG_EXPORT_PREFIX}${record.ownerId}`;
    const catalog = facts.exports.get(catalogName);
    if (!catalog || catalog.length !== 1 || catalog[0].kind !== 1) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} owner ${record.ownerId} lacks exactly one table catalog export ${catalogName}`
      );
      continue;
    }
    const imported = tableImportsByIndex.get(catalog[0].index);
    if (!imported || !importedTableNeedsRecipe(imported)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} owner ${record.ownerId} does not identify a reconstructible imported table`
      );
      continue;
    }
    if (imported.module !== record.module || imported.name !== record.name || imported.recipeTypeCode !== record.typeCode || imported.table64 !== ((record.flags & WPK_FORK_IMPORTED_TABLES_FLAG_TABLE64) !== 0)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} owner ${record.ownerId} does not match its imported table declaration`
      );
      continue;
    }
    if (matchedImportIndices.has(imported.index)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} repeats imported table index ${imported.index}`
      );
      continue;
    }
    matchedImportIndices.add(imported.index);
  }
  for (const imported of tableImports) {
    if (importedTableNeedsRecipe(imported) && !matchedImportIndices.has(imported.index)) {
      failures.push(
        `${WPK_FORK_IMPORTED_TABLES_SECTION} omits imported table ${imported.module}.${imported.name} at index ${imported.index}`
      );
    }
  }
  for (const [name, exports] of facts.exports) {
    if (!name.startsWith(WPK_FORK_TABLE_CATALOG_EXPORT_PREFIX)) continue;
    const suffix = name.slice(WPK_FORK_TABLE_CATALOG_EXPORT_PREFIX.length);
    const owner = Number(suffix);
    if (!/^[1-9][0-9]*$/.test(suffix) || !Number.isSafeInteger(owner) || owner > 4294967295 || exports.length !== 1 || exports[0].kind !== 1) {
      failures.push(`malformed reserved fork table catalog export ${name}`);
    }
  }
  return failures;
}
function expectedWasmValueType(value, pointerWidth) {
  switch (value) {
    case "ptr":
      return pointerWidth === 8 ? 126 : 127;
    case "i32":
      return 127;
    case "i64":
      return 126;
    case "anyref":
      return 110;
    case "exnref":
      return 105;
    case "externref":
      return 111;
    case "funcref":
      return 112;
  }
}
function signatureMatches(actual, params, results, pointerWidth) {
  return actual.params.length === params.length && actual.results.length === results.length && actual.params.every(
    (value, index) => value === expectedWasmValueType(params[index], pointerWidth)
  ) && actual.results.every(
    (value, index) => value === expectedWasmValueType(results[index], pointerWidth)
  );
}
function signatureText(params, results, pointerWidth) {
  const render = (value) => value === "ptr" ? pointerWidth === 8 ? "i64" : "i32" : value;
  return `(${params.map(render).join(", ")}) -> (${results.map(render).join(", ")})`;
}
function validateForkActivationImport(facts) {
  const identity = `${WPK_FORK_EXCEPTION_CODEC_IMPORT_MODULE}.${WPK_FORK_EXCEPTION_IMPORT_ACTIVATION}`;
  const imports = facts.globalImports.get(identity);
  if (!imports) {
    return [];
  }
  if (imports.length !== 1) {
    return [`duplicate exception-codec activation import ${identity}`];
  }
  if (imports[0].valueType !== 127 || imports[0].mutable) {
    return [`exception-codec activation import ${identity} must be immutable i32`];
  }
  return [];
}
function validateForkTableImports(facts) {
  const failures = [];
  for (const requirement of WPK_FORK_REQUIRED_TABLE_IMPORTS) {
    const identity = `${requirement.module}.${requirement.name}`;
    const imports = facts.tableImports.get(identity);
    if (!imports) {
      continue;
    }
    if (imports.length !== 1) {
      failures.push(`duplicate ABI 43 fork-runtime table import ${identity}`);
      continue;
    }
    const actual = imports[0];
    const expectedElement = expectedWasmValueType(requirement.element, 4);
    if (actual.elementType !== expectedElement || actual.table64 !== requirement.table64 || actual.minimum !== requirement.minimum || actual.maximum !== requirement.maximum) {
      failures.push(
        `ABI 43 fork-runtime table import ${identity} has the wrong type or limits`
      );
    }
  }
  return failures;
}
function validateForkStaticRootCatalog(facts) {
  if (facts.staticRootDescriptors.length === 0) {
    return [`missing required ${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} descriptor`];
  }
  if (facts.staticRootDescriptors.length !== 1) {
    return [
      `has ${facts.staticRootDescriptors.length} ${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} descriptors, expected exactly one`
    ];
  }
  const descriptor = facts.staticRootDescriptors[0];
  if (descriptor.byteLength !== WPK_FORK_STATIC_ROOT_CATALOG_HEADER_SIZE) {
    return [
      `${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} has ${descriptor.byteLength} bytes, expected ${WPK_FORK_STATIC_ROOT_CATALOG_HEADER_SIZE}`
    ];
  }
  const failures = [];
  if (FORK_STATIC_ROOT_CATALOG_MAGIC.some(
    (byte, index) => descriptor[index] !== byte
  )) {
    failures.push(`${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} has invalid magic`);
  }
  const view = new DataView(
    descriptor.buffer,
    descriptor.byteOffset,
    descriptor.byteLength
  );
  if (view.getUint16(4, true) !== WPK_FORK_STATIC_ROOT_CATALOG_VERSION) {
    failures.push(
      `${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} version ${view.getUint16(4, true)} is unsupported`
    );
  }
  if (view.getUint16(6, true) !== WPK_FORK_STATIC_ROOT_CATALOG_HEADER_SIZE) {
    failures.push(
      `${WPK_FORK_STATIC_ROOT_CATALOG_SECTION} declares an invalid header size`
    );
  }
  const count = view.getUint32(8, true);
  const exports = facts.tableExports.get(WPK_FORK_STATIC_ROOT_CATALOG_EXPORT);
  if (!exports || exports.length !== 1) {
    failures.push(
      `missing exactly one table export ${WPK_FORK_STATIC_ROOT_CATALOG_EXPORT}`
    );
    return failures;
  }
  const importedTableCount = [...facts.tableImports.values()].reduce((total, entries) => total + entries.length, 0);
  const tableIndex = exports[0];
  const table = facts.tables[tableIndex];
  if (tableIndex < importedTableCount || !table) {
    failures.push(
      `${WPK_FORK_STATIC_ROOT_CATALOG_EXPORT} must export a module-local table`
    );
    return failures;
  }
  if (table.elementType !== 110 || table.table64 || table.minimum !== count || table.maximum !== count) {
    failures.push(
      `${WPK_FORK_STATIC_ROOT_CATALOG_EXPORT} must be a fixed table32 anyref catalog of length ${count}`
    );
  }
  return failures;
}
function describeForkArtifactContractFailures(facts) {
  const failures = [];
  if (facts.nativeStartCount !== 0) {
    failures.push(
      `ABI 43 fork artifact retains ${facts.nativeStartCount} native Wasm start section${facts.nativeStartCount === 1 ? "" : "s"}; rebuild and reinstrument it so initialization is owned by wpk_fork_module_bootstrap`
    );
  }
  if (facts.functionImports.has("env.__wasm_dlopen")) {
    failures.push(
      "ABI 43 fork artifact retains reentrant env.__wasm_dlopen; rebuild and reinstrument it with the staged loader lowering"
    );
  }
  failures.push(...validateForkCapabilities(facts.forkCapabilities));
  failures.push(
    ...validateForkExceptionCodecDescriptor(facts.exceptionCodecDescriptors),
    ...validateForkImportedGlobalsDescriptor(facts),
    ...validateForkImportedTablesDescriptor(facts),
    ...validateForkActivationImport(facts),
    ...validateForkTableImports(facts),
    ...validateForkStaticRootCatalog(facts)
  );
  for (const requirement of WPK_FORK_REQUIRED_EXPORTS) {
    const signatures = facts.functionExports.get(requirement.name);
    if (!signatures) continue;
    if (signatures.length !== 1) {
      failures.push(`duplicate ABI 43 wasm-fork-instrument export ${requirement.name}`);
    }
  }
  const missingExports = WPK_FORK_REQUIRED_EXPORTS.filter(({ name }) => !facts.functionExports.has(name)).map(({ name }) => name);
  if (missingExports.length > 0) {
    failures.push(
      `incomplete wasm-fork-instrument exports; missing ${missingExports.join(", ")}`
    );
  }
  if (facts.importsKernelFork) {
    const identity = `${WPK_FORK_PROCESS_IMPORT.module}.${WPK_FORK_PROCESS_IMPORT.name}`;
    const signatures = facts.functionImports.get(identity);
    if (signatures?.length !== 1) {
      failures.push(`duplicate ABI 43 process-fork import ${identity}`);
    } else if (!signatureMatches(
      signatures[0],
      WPK_FORK_PROCESS_IMPORT.params,
      WPK_FORK_PROCESS_IMPORT.results,
      4
    )) {
      failures.push(
        `ABI 43 process-fork import ${identity} has the wrong signature; expected ${signatureText(
          WPK_FORK_PROCESS_IMPORT.params,
          WPK_FORK_PROCESS_IMPORT.results,
          4
        )}`
      );
    }
  }
  let pointerWidth = null;
  if (facts.linkedFrameDescriptors.length === 0) {
    failures.push(`missing required ${WPK_FORK_LINKED_FRAME_FORMAT_SECTION} descriptor`);
  } else if (facts.linkedFrameDescriptors.length !== 1) {
    failures.push(
      `has ${facts.linkedFrameDescriptors.length} ${WPK_FORK_LINKED_FRAME_FORMAT_SECTION} descriptors, expected exactly one`
    );
  } else {
    try {
      pointerWidth = validateLinkedFrameDescriptor(facts.linkedFrameDescriptors[0]);
    } catch (error) {
      failures.push(error instanceof Error ? error.message : String(error));
    }
  }
  failures.push(
    ...validateForkModuleStateDescriptor(
      facts.moduleStateDescriptors,
      pointerWidth
    )
  );
  const presentFrameImports = WPK_FORK_REQUIRED_IMPORTS.filter(
    ({ module, name }) => facts.functionImports.has(`${module}.${name}`)
  );
  const unwindTagIdentity = `${WPK_FORK_UNWIND_TAG_IMPORT_MODULE}.${WPK_FORK_UNWIND_TAG_IMPORT_NAME}`;
  const requiresFrameImports = facts.importsKernelFork || presentFrameImports.length > 0;
  const requiresUnwindTransport = requiresFrameImports || facts.tagImports.has(unwindTagIdentity) || facts.unwindTransportDescriptors.length > 0;
  if (requiresUnwindTransport) {
    const hasFrames = WPK_FORK_CORE_FRAME_IMPORT_NAMES.some(
      (name) => facts.functionImports.has(`${WPK_FORK_FRAME_IMPORT_MODULE}.${name}`)
    );
    failures.push(...validateForkUnwindTransport(facts, hasFrames));
  }
  if (requiresFrameImports) {
    const missingImports = WPK_FORK_CORE_FRAME_IMPORT_NAMES.filter((name) => !facts.functionImports.has(`${WPK_FORK_FRAME_IMPORT_MODULE}.${name}`)).map((name) => `${WPK_FORK_FRAME_IMPORT_MODULE}.${name}`);
    if (missingImports.length > 0 && missingImports.length < WPK_FORK_CORE_FRAME_IMPORT_NAMES.length) {
      failures.push(
        `incomplete fork linked-frame imports; missing ${missingImports.join(", ")}`
      );
    }
    for (const requirement of WPK_FORK_REQUIRED_IMPORTS) {
      const identity = `${requirement.module}.${requirement.name}`;
      const signatures = facts.functionImports.get(identity);
      if (signatures && signatures.length !== 1) {
        failures.push(`duplicate ABI 43 fork-runtime import ${identity}`);
      }
    }
  }
  if (pointerWidth !== null) {
    if (facts.memoryPointerWidths.length !== 1) {
      failures.push(
        `ABI 43 fork instrumentation requires exactly one module memory, found ${facts.memoryPointerWidths.length}`
      );
    } else if (facts.memoryPointerWidths[0] !== pointerWidth) {
      const article = pointerWidth === 8 ? "an" : "a";
      failures.push(
        `ABI 43 linked-frame descriptor declares ${article} ${pointerWidth}-byte pointer but the module memory uses ${facts.memoryPointerWidths[0]}-byte addresses`
      );
    }
    for (const requirement of WPK_FORK_REQUIRED_EXPORTS) {
      const signatures = facts.functionExports.get(requirement.name);
      if (signatures?.length === 1 && !signatureMatches(
        signatures[0],
        requirement.params,
        requirement.results,
        pointerWidth
      )) {
        failures.push(
          `ABI 43 wasm-fork-instrument export ${requirement.name} has the wrong signature; expected ${signatureText(requirement.params, requirement.results, pointerWidth)}`
        );
      }
    }
    if (requiresFrameImports) {
      for (const requirement of WPK_FORK_REQUIRED_IMPORTS) {
        const identity = `${requirement.module}.${requirement.name}`;
        const signatures = facts.functionImports.get(identity);
        if (signatures?.length === 1 && !signatureMatches(
          signatures[0],
          requirement.params,
          requirement.results,
          pointerWidth
        )) {
          failures.push(
            `ABI 43 fork-runtime import ${identity} has the wrong signature; expected ${signatureText(requirement.params, requirement.results, pointerWidth)}`
          );
        }
      }
    }
  }
  return failures;
}
function decodedExternalKind(kind, context) {
  switch (kind) {
    case 0:
      return "function";
    case 1:
      return "table";
    case 2:
      return "memory";
    case 3:
      return "global";
    case 4:
      return "tag";
    default:
      throw new Error(`${context} has unsupported external kind ${kind}`);
  }
}
function readWasmImportDescriptors(programBytes) {
  const src = new Uint8Array(programBytes);
  if (!hasWasmMagic(src)) return [];
  const imports = [];
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    if (sectionId === 2) {
      let pos = contentOffset;
      const [importCount, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < importCount; i++) {
        const [moduleName, afterModule] = readName(src, pos);
        const [fieldName, afterField] = readName(src, afterModule);
        pos = afterField;
        const kind = src[pos++];
        imports.push({
          module: moduleName,
          name: fieldName,
          kind: decodedExternalKind(kind, `import ${moduleName}.${fieldName}`)
        });
        if (kind === 0) {
          const [, n] = readULEB128(src, pos);
          pos += n;
        } else if (kind === 1) {
          pos = readWasmValueType(src, pos, "table import type").next;
          pos = readLimits(src, pos).next;
        } else if (kind === 2) {
          pos = readLimits(src, pos).next;
        } else if (kind === 3) {
          pos = readWasmValueType(src, pos, "global import type").next;
          pos++;
        } else if (kind === 4) {
          pos++;
          const [, typeBytes] = readULEB128(src, pos);
          pos += typeBytes;
        }
      }
      break;
    }
    offset = contentOffset + sectionSize;
  }
  return imports;
}
function readWasmImportNames(programBytes) {
  return readWasmImportDescriptors(programBytes).map(
    ({ module, name }) => `${module}.${name}`
  );
}
function readWasmExportDescriptors(programBytes) {
  const src = new Uint8Array(programBytes);
  if (!hasWasmMagic(src)) return [];
  const exports = [];
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    if (sectionId === 7) {
      let pos = contentOffset;
      const [exportCount, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < exportCount; i++) {
        const [name, afterName] = readName(src, pos);
        pos = afterName;
        const kind = src[pos++];
        exports.push({
          name,
          kind: decodedExternalKind(kind, `export ${name}`)
        });
        const [, indexBytes] = readULEB128(src, pos);
        pos += indexBytes;
      }
      break;
    }
    offset = contentOffset + sectionSize;
  }
  return exports;
}
function readWasmExportNames(programBytes) {
  return readWasmExportDescriptors(programBytes).map(({ name }) => name);
}
function readWasmCustomSectionNames(programBytes) {
  const src = new Uint8Array(programBytes);
  if (!hasWasmMagic(src)) return [];
  const names = [];
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    if (sectionId === 0) {
      const [name] = readName(src, contentOffset);
      names.push(name);
    }
    offset = contentOffset + sectionSize;
  }
  return names;
}
var ABI_CONTRACT_SECTION = "kandelo.abi.contract";
function readWasmCustomSectionPayload(programBytes, name) {
  const src = new Uint8Array(programBytes);
  if (!hasWasmMagic(src)) return null;
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    const sectionEnd = contentOffset + sectionSize;
    if (sectionId === 0) {
      const [sectionName, afterName] = readName(src, contentOffset);
      if (sectionName === name) {
        return src.subarray(afterName, sectionEnd);
      }
    }
    offset = sectionEnd;
  }
  return null;
}
function abiContractDigestsEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function wasmContainsLegacyAsyncify(programBytes) {
  return containsAscii(new Uint8Array(programBytes), "asyncify_");
}
function wasmIsRelocatableObject(programBytes) {
  const customSections = readWasmCustomSectionNames(programBytes);
  return customSections.includes("linking") || customSections.some((name) => name.startsWith("reloc."));
}
var abiContractMissingWarned = false;
function describeWasmArtifactPolicyFailures(programBytes, options = {}) {
  const failures = [];
  let declaredAbi = null;
  if (wasmContainsLegacyAsyncify(programBytes)) {
    failures.push("contains asyncify_");
  }
  if (options.expectedAbi !== void 0 && options.expectedAbi !== null) {
    declaredAbi = extractAbiVersion(programBytes);
    if (declaredAbi !== null && declaredAbi !== options.expectedAbi) {
      failures.push(`ABI ${declaredAbi}, expected ${options.expectedAbi}`);
    }
  }
  if (options.expectedAbiContractDigest !== void 0 && options.expectedAbiContractDigest !== null) {
    const guestDigest = readWasmCustomSectionPayload(programBytes, ABI_CONTRACT_SECTION);
    if (guestDigest === null) {
      if (!abiContractMissingWarned) {
        abiContractMissingWarned = true;
        console.warn(
          "[worker] user program lacks a kandelo.abi.contract stamp \u2014 legacy binary predates the ABI-contract-digest rollout. Rebuild it through the local-build engine to pick up the check. See docs/abi-versioning.md."
        );
      }
    } else if (!abiContractDigestsEqual(guestDigest, options.expectedAbiContractDigest)) {
      failures.push(
        "ABI contract digest mismatch \u2014 guest built against a different ABI snapshot than the running kernel; rebuild the guest"
      );
    }
  }
  const exports = new Set(readWasmExportNames(programBytes));
  if (options.requiredExports) {
    const missing = options.requiredExports.filter((name) => !exports.has(name));
    if (missing.length > 0) {
      failures.push(`missing required exports: ${missing.join(", ")}`);
    }
  }
  if (options.forbiddenExports) {
    const forbidden = options.forbiddenExports.filter((name) => exports.has(name));
    if (forbidden.length > 0) {
      failures.push(`forbidden exports present: ${forbidden.join(", ")}`);
    }
  }
  const presentWpkExports = WPK_FORK_EXPORTS.filter((name) => exports.has(name));
  const importNames = readWasmImportNames(programBytes);
  const customSections = readWasmCustomSectionNames(programBytes);
  const presentWpkImports = WPK_FORK_REQUIRED_IMPORTS.filter(
    ({ module, name }) => importNames.includes(`${module}.${name}`)
  );
  const descriptorCount = customSections.filter(
    (name) => name === WPK_FORK_LINKED_FRAME_FORMAT_SECTION
  ).length;
  const capabilityCount = customSections.filter(
    (name) => name === WPK_FORK_CAPABILITIES_SECTION
  ).length;
  const moduleStateDescriptorCount = customSections.filter(
    (name) => name === WPK_FORK_MODULE_STATE_FORMAT_SECTION
  ).length;
  const exceptionCodecDescriptorCount = customSections.filter(
    (name) => name === WPK_FORK_EXCEPTION_CODEC_SECTION
  ).length;
  const importedGlobalsDescriptorCount = customSections.filter(
    (name) => name === WPK_FORK_IMPORTED_GLOBALS_SECTION
  ).length;
  const importedTablesDescriptorCount = customSections.filter(
    (name) => name === WPK_FORK_IMPORTED_TABLES_SECTION
  ).length;
  const unwindTransportCount = customSections.filter(
    (name) => name === WPK_FORK_UNWIND_TRANSPORT_SECTION
  ).length;
  const hasUnwindTagImport = importNames.includes(
    `${WPK_FORK_UNWIND_TAG_IMPORT_MODULE}.${WPK_FORK_UNWIND_TAG_IMPORT_NAME}`
  );
  const hasForkArtifactSurface = presentWpkExports.length > 0 || presentWpkImports.length > 0 || descriptorCount > 0 || capabilityCount > 0 || moduleStateDescriptorCount > 0 || exceptionCodecDescriptorCount > 0 || importedGlobalsDescriptorCount > 0 || importedTablesDescriptorCount > 0 || unwindTransportCount > 0 || hasUnwindTagImport;
  if (options.expectedAbi !== void 0 && options.expectedAbi !== null && hasForkArtifactSurface && declaredAbi === null) {
    failures.push(
      `ABI ${options.expectedAbi} fork artifact is missing __abi_version; the activation-state capability epoch cannot be verified`
    );
  }
  if (options.forbidForkInstrumentation && hasForkArtifactSurface) {
    failures.push(
      `contains ABI ${ABI_VERSION} wasm-fork-instrument metadata, imports, or exports`
    );
  }
  const requireForkInstrumentation = options.requireForkInstrumentation ?? !wasmIsRelocatableObject(programBytes);
  if (requireForkInstrumentation && (hasForkArtifactSurface || importNames.includes("kernel.kernel_fork"))) {
    try {
      failures.push(
        ...describeForkArtifactContractFailures(readWasmForkArtifactFacts(programBytes))
      );
    } catch (error) {
      failures.push(
        `cannot validate ABI 43 fork-artifact contract: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  return failures;
}
function extractI32ConstFunctionExport(programBytes, exportName) {
  const src = new Uint8Array(programBytes);
  if (src.length < 8) return null;
  let funcImports = 0;
  let abiFuncIndex = null;
  let codeSectionContent = null;
  let offset = 8;
  while (offset < src.length) {
    const sectionId = src[offset];
    const [sectionSize, sizeBytes] = readULEB128(src, offset + 1);
    const contentOffset = offset + 1 + sizeBytes;
    if (sectionId === 2) {
      const counts = { funcImports, globalImports: 0 };
      let pos = contentOffset;
      const [importCount, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < importCount; i++) {
        pos = skipImportEntry(src, pos, counts);
      }
      funcImports = counts.funcImports;
    } else if (sectionId === 7) {
      let pos = contentOffset;
      const [exportCount, countBytes] = readULEB128(src, pos);
      pos += countBytes;
      for (let i = 0; i < exportCount; i++) {
        const [nameLen, nameLenBytes] = readULEB128(src, pos);
        pos += nameLenBytes;
        const name = new TextDecoder().decode(src.subarray(pos, pos + nameLen));
        pos += nameLen;
        const kind = src[pos++];
        const [idx, idxBytes] = readULEB128(src, pos);
        pos += idxBytes;
        if (kind === 0 && name === exportName) {
          abiFuncIndex = idx;
          break;
        }
      }
    } else if (sectionId === 10) {
      codeSectionContent = { offset: contentOffset, size: sectionSize };
    }
    offset = contentOffset + sectionSize;
  }
  if (abiFuncIndex === null || codeSectionContent === null) return null;
  let funcCountPos = codeSectionContent.offset;
  const [funcCount, funcCountBytes] = readULEB128(src, funcCountPos);
  funcCountPos += funcCountBytes;
  function bodyRangeForFunc(funcIndex) {
    const definedIndex = funcIndex - funcImports;
    if (definedIndex < 0 || definedIndex >= funcCount) return null;
    let pos = funcCountPos;
    for (let i = 0; i < definedIndex; i++) {
      const [bodySize2, bodySizeBytes2] = readULEB128(src, pos);
      pos += bodySizeBytes2 + bodySize2;
    }
    const [bodySize, bodySizeBytes] = readULEB128(src, pos);
    pos += bodySizeBytes;
    return { start: pos, end: pos + bodySize };
  }
  function skipLocals(pos, bodyEnd) {
    if (pos >= bodyEnd) return null;
    const [localGroups, localGroupsBytes] = readULEB128(src, pos);
    pos += localGroupsBytes;
    for (let i = 0; i < localGroups; i++) {
      const [, n] = readULEB128(src, pos);
      pos += n;
      try {
        pos = readWasmValueType(src, pos, `function local group ${i}`).next;
      } catch {
        return null;
      }
      if (pos > bodyEnd) return null;
    }
    return pos;
  }
  function extractFromFunc(funcIndex, depth = 0) {
    if (depth > 4) return null;
    const range = bodyRangeForFunc(funcIndex);
    if (!range) return null;
    const localsEnd = skipLocals(range.start, range.end);
    if (localsEnd === null) return null;
    let pos = localsEnd;
    const bodyEnd = range.end;
    while (pos < bodyEnd) {
      const op = src[pos++];
      if (op === 11) {
        if (pos === bodyEnd) return null;
        continue;
      }
      if (op === 65) {
        const [val] = readSLEB128_i32(src, pos);
        const [, n] = readSLEB128_i32(src, pos);
        const next = pos + n;
        if (src[next] === 15 || src[next] === 11 && next + 1 === bodyEnd) {
          return val;
        }
        pos = next;
      } else if (op === 16) {
        const [callee, n] = readULEB128(src, pos);
        const next = pos + n;
        if (src[next] === 15 || src[next] === 11 && next + 1 === bodyEnd) {
          const val = extractFromFunc(callee, depth + 1);
          if (val !== null) return val;
        }
        pos = next;
      } else if (op === 12 || op === 13 || op === 18 || op === 210) {
        const [, n] = readULEB128(src, pos);
        pos += n;
      } else if (op === 2 || op === 3 || op === 4) {
        pos = skipWasmBlockType(src, pos);
      } else if (op === 14) {
        const [targetCount, targetCountBytes] = readULEB128(src, pos);
        pos += targetCountBytes;
        for (let i = 0; i <= targetCount; i++) {
          const [, n] = readULEB128(src, pos);
          pos += n;
        }
      } else if (op === 17) {
        const [, typeBytes] = readULEB128(src, pos);
        pos += typeBytes;
        const [, tableBytes] = readULEB128(src, pos);
        pos += tableBytes;
      } else if (op === 28) {
        const [typeCount, typeCountBytes] = readULEB128(src, pos);
        pos += typeCountBytes;
        for (let i = 0; i < typeCount; i++) {
          const [, n] = readULEB128(src, pos);
          pos += n;
        }
      } else if (op >= 32 && op <= 38 || op === 208) {
        const [, n] = readULEB128(src, pos);
        pos += n;
      } else if (op >= 40 && op <= 62) {
        pos = skipVectorMemarg(src, pos);
      } else if (op === 63 || op === 64) {
        pos++;
      } else if (op === 66) {
        const [, n] = readSLEB128_i64(src, pos);
        pos += n;
      } else if (op === 67) {
        pos += 4;
      } else if (op === 68) {
        pos += 8;
      } else if (op === 252 || op === 253 || op === 254) {
        const next = skipPrefixedInstructionImmediate(op, src, pos);
        if (next === null) return null;
        pos = next;
      } else {
      }
    }
    return null;
  }
  return extractFromFunc(abiFuncIndex);
}
function extractAbiVersion(programBytes) {
  return extractI32ConstFunctionExport(programBytes, "__abi_version");
}

// src/binary-resolver.ts
var EXECUTABLE_PROGRAM_REQUIRED_EXPORTS = ["__abi_version", "_start"];
var cachedRepoRoot = null;
function currentModuleDir() {
  if (typeof __dirname !== "undefined") return __dirname;
  return import.meta.url ? dirname(fileURLToPath(import.meta.url)) : process.cwd();
}
function isRepoRoot(dir) {
  const cargo = join(dir, "Cargo.toml");
  const packageJson = join(dir, "package.json");
  if (!existsSync(cargo) || !existsSync(packageJson)) {
    return false;
  }
  try {
    const packageIdentity = JSON.parse(readFileSync(packageJson, "utf8"));
    return /^\s*\[workspace\]/m.test(readFileSync(cargo, "utf8")) && packageIdentity?.name === "kandelo";
  } catch {
    return false;
  }
}
function findRepoRoot(startFrom) {
  if (cachedRepoRoot && !startFrom) return cachedRepoRoot;
  const here = startFrom ?? currentModuleDir();
  let dir = resolve(here);
  for (let i = 0; i < 20; i++) {
    if (isRepoRoot(dir)) {
      if (!startFrom) cachedRepoRoot = dir;
      return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(
    "Could not find repo root (expected workspace Cargo.toml + package.json)"
  );
}
function resolverRepoRoot() {
  const explicitStart = process.env.WASM_POSIX_BINARY_RESOLVER_REPO_ROOT;
  return explicitStart ? findRepoRoot(explicitStart) : findRepoRoot();
}
function packageRoot() {
  return resolve(currentModuleDir(), "..");
}
function hasSourceCheckout() {
  try {
    resolverRepoRoot();
    return true;
  } catch {
    return false;
  }
}
function binaryCacheRoot() {
  const explicitCacheRoot = process.env.WASM_POSIX_BINARY_CACHE_ROOT;
  if (explicitCacheRoot !== void 0) {
    return isAbsolute(explicitCacheRoot) ? resolve(explicitCacheRoot) : resolve(resolverRepoRoot(), explicitCacheRoot);
  }
  const xdgCacheHome = process.env.XDG_CACHE_HOME;
  if (xdgCacheHome !== void 0) {
    return resolve(xdgCacheHome, "kandelo");
  }
  const home = process.env.HOME;
  if (home !== void 0) {
    return resolve(home, ".cache", "kandelo");
  }
  return "/tmp/kandelo";
}
function binaryProgramCacheRoot() {
  return join(binaryCacheRoot(), "programs");
}
function isWellFormedUnicode(value) {
  for (let index = 0; index < value.length; index++) {
    const codeUnit = value.charCodeAt(index);
    if (codeUnit >= 55296 && codeUnit <= 56319) {
      const next = value.charCodeAt(index + 1);
      if (!(next >= 56320 && next <= 57343)) return false;
      index++;
    } else if (codeUnit >= 56320 && codeUnit <= 57343) {
      return false;
    }
  }
  return true;
}
function isPortableResolverPath(relPath) {
  return isWellFormedUnicode(relPath) && relPath.length > 0 && !relPath.startsWith("/") && !/^[A-Za-z]:/.test(relPath) && !relPath.includes("\\") && !relPath.includes("\0") && relPath.split("/").every((part) => part && part !== "." && part !== "..");
}
function requirePortableResolverPath(relPath) {
  if (!isWellFormedUnicode(relPath)) {
    throw new Error(
      `Binary resolver path must be well-formed Unicode: ${JSON.stringify(relPath)}`
    );
  }
  if (!isPortableResolverPath(relPath)) {
    throw new Error(
      `Binary resolver path must be a normalized portable relative path: ${JSON.stringify(relPath)}`
    );
  }
  return relPath;
}
var ARCH_SEGMENTS = /* @__PURE__ */ new Set(["wasm32", "wasm64"]);
function applyDefaultArch(relPath) {
  requirePortableResolverPath(relPath);
  if (!relPath.startsWith("programs/")) return relPath;
  const tail = relPath.slice("programs/".length);
  const firstSeg = tail.split("/", 1)[0];
  if (ARCH_SEGMENTS.has(firstSeg)) return relPath;
  return `programs/wasm32/${tail}`;
}
function packagedBinaryCandidates(relPath, root = join(packageRoot(), "wasm")) {
  const adjusted = applyDefaultArch(relPath);
  const candidates = [join(root, adjusted)];
  if (relPath === "rootfs.vfs.zst") {
    candidates.push(join(root, "rootfs.vfs.zst"));
  }
  return candidates;
}
var BinaryNotFoundError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "BinaryNotFoundError";
  }
};
function binaryCandidateTiers() {
  const tiers = [];
  let sourceCheckout = false;
  try {
    const repo = resolverRepoRoot();
    sourceCheckout = true;
    const sourceOnlyRoot = join(repo, "local-binaries", "source-only-v1");
    if (existsSync(sourceOnlyRoot)) {
      tiers.push({
        label: "source-only-v1",
        root: sourceOnlyRoot,
        identity: "source-only-generation",
        // The engine writes real files here, not links into a shared cache,
        // so this tier would otherwise be refused for every multi-artifact
        // package the moment `pinPackageClosureIdentity` saw regular files.
        // Its identity is not the directory shape: it is the projection
        // authority in `.kandelo/`, which binds each member to a package,
        // cache key and sha256. `pinPackageClosureIdentity` checks exactly
        // that for this tier — see its `source-only-generation` branch.
        allowRegularFileClosure: true,
        candidatesFor(relPath) {
          return [join(sourceOnlyRoot, applyDefaultArch(relPath))];
        }
      });
    }
    for (const [label, root2] of [
      ["local-binaries", join(repo, "local-binaries")],
      ["binaries", join(repo, "binaries")]
    ]) {
      tiers.push({
        label,
        root: root2,
        identity: label === "local-binaries" ? "local-generation" : "program-cache",
        allowRegularFileClosure: false,
        candidatesFor(relPath) {
          return [join(root2, applyDefaultArch(relPath))];
        }
      });
    }
  } catch {
  }
  const root = join(packageRoot(), "wasm");
  tiers.push({
    label: "installed package",
    root,
    identity: "installed-package",
    allowRegularFileClosure: !sourceCheckout,
    candidatesFor(relPath) {
      return packagedBinaryCandidates(relPath, root);
    }
  });
  return tiers;
}
function manifestError(manifestPath, detail) {
  return new Error(`Invalid package manifest ${manifestPath}: ${detail}`);
}
function pathEntryExists(path) {
  try {
    lstatSync(path);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return false;
    throw error;
  }
}
function portableArtifactPath(value, manifestPath, field) {
  if (!isWellFormedUnicode(value)) {
    throw manifestError(
      manifestPath,
      `${field} must be well-formed Unicode`
    );
  }
  if (value.length === 0 || value.startsWith("/") || value.includes("\\") || value.includes("\0") || value.split("/").some((part) => !part || part === "." || part === "..")) {
    throw manifestError(
      manifestPath,
      `${field} must be a normalized portable relative path`
    );
  }
  return value;
}
function safeSinglePathComponent(value, manifestPath, field, allowAt = true) {
  if (!isWellFormedUnicode(value)) {
    throw manifestError(
      manifestPath,
      `${field} must be well-formed Unicode`
    );
  }
  if (value.length === 0 || value === "." || value === ".." || value.includes("/") || value.includes("\\") || value.includes("\0") || !allowAt && value.includes("@")) {
    throw manifestError(
      manifestPath,
      `${field} must be a safe single path component`
    );
  }
  return value;
}
var PROGRAM_PACKAGE_INDEX_FORMAT = "kandelo-program-packages-v2";
var PROGRAM_PACKAGE_INDEX_FILE = "program-packages.json";
var programIndexContextCheckerForTests = null;
var bundledProgramPackageIndexPathForTests = null;
var preparedProgramIndexChecker = null;
var programIndexFreshnessBoundaryDepth = 0;
function bundledProgramPackageIndexPath() {
  return bundledProgramPackageIndexPathForTests ?? join(packageRoot(), "wasm", PROGRAM_PACKAGE_INDEX_FILE);
}
function configuredProgramRegistryRoots() {
  if (Object.prototype.hasOwnProperty.call(
    process.env,
    "WASM_POSIX_DEPS_REGISTRY"
  )) {
    let sourceRepoRoot = null;
    return (process.env.WASM_POSIX_DEPS_REGISTRY ?? "").split(":").filter(Boolean).map((entry) => {
      if (entry.startsWith("~/") && process.env.HOME !== void 0) {
        return join(process.env.HOME, entry.slice(2));
      }
      if (isAbsolute(entry)) return resolve(entry);
      sourceRepoRoot ??= resolverRepoRoot();
      return resolve(sourceRepoRoot, entry);
    });
  }
  let registryRoot;
  try {
    registryRoot = join(resolverRepoRoot(), "packages", "registry");
  } catch {
    return null;
  }
  let defaultRegistryCarriesPackagePolicy = false;
  if (pathEntryExists(registryRoot)) {
    if (!statSync(registryRoot).isDirectory()) return [registryRoot];
    defaultRegistryCarriesPackagePolicy = readdirSync(
      registryRoot,
      { withFileTypes: true }
    ).filter((entry) => entry.isDirectory() || entry.isSymbolicLink()).some(
      (entry) => pathEntryExists(join(registryRoot, entry.name, "package.toml"))
    );
  }
  if (!defaultRegistryCarriesPackagePolicy && completeSourceCheckoutRoot() === null && pathEntryExists(bundledProgramPackageIndexPath())) {
    return null;
  }
  return [registryRoot];
}
function completeSourceCheckoutRoot() {
  let sourceRepoRoot;
  try {
    sourceRepoRoot = resolverRepoRoot();
  } catch {
    return null;
  }
  if (!existsSync(join(sourceRepoRoot, "tools", "xtask", "Cargo.toml")) || !existsSync(join(sourceRepoRoot, "scripts", "dev-shell.sh"))) return null;
  try {
    const sourceModuleDir = realpathSync(currentModuleDir());
    const realRepoRoot = realpathSync(sourceRepoRoot);
    const sourceOwned = [
      join(realRepoRoot, "host"),
      join(realRepoRoot, "scripts")
    ].some((ownedRoot) => {
      return existsSync(ownedRoot) && pathIsWithin(realpathSync(ownedRoot), sourceModuleDir);
    });
    return sourceOwned ? realRepoRoot : null;
  } catch {
    return null;
  }
}
function commandFailure(command, args, result) {
  const detail = [
    typeof result.stderr === "string" ? result.stderr.trim() : "",
    typeof result.stdout === "string" ? result.stdout.trim() : "",
    result.error?.message ?? ""
  ].filter(Boolean).join("\n");
  return `${command} ${args.join(" ")} failed${result.status === null ? "" : ` with status ${result.status}`}${detail ? `:
${detail}` : ""}`;
}
function rustHostTarget(sourceRepoRoot) {
  const inDevShell = process.env.KANDELO_DEV_SHELL_TOOL_PATH !== void 0;
  const command = inDevShell ? "rustc" : "bash";
  const args = inDevShell ? ["-vV"] : [join(sourceRepoRoot, "scripts", "dev-shell.sh"), "rustc", "-vV"];
  const result = spawnSync(command, args, {
    cwd: sourceRepoRoot,
    encoding: "utf8"
  });
  if (result.status !== 0) {
    throw new Error(commandFailure(command, args, result));
  }
  const host = result.stdout.split(/\r?\n/).find((line) => line.startsWith("host: "))?.slice("host: ".length).trim();
  if (!host) {
    throw new Error(
      `Could not determine the Rust host target for ${sourceRepoRoot}`
    );
  }
  return host;
}
function requireRegularXtask(path) {
  try {
    if (lstatSync(path).isFile()) return realpathSync(path);
  } catch {
  }
  throw new Error(`Prepared xtask is not a regular file: ${path}`);
}
var CHECKER_BUILD_SCRUBBED_ENV = [
  "CC",
  "CXX",
  "AR",
  "CFLAGS",
  "CXXFLAGS",
  "CPPFLAGS",
  "LDFLAGS"
];
function prepareProgramIndexChecker(sourceRepoRoot) {
  const explicit = process.env.WASM_POSIX_XTASK_BIN;
  if (explicit !== void 0) {
    const explicitPath = isAbsolute(explicit) ? resolve(explicit) : resolve(sourceRepoRoot, explicit);
    return requireRegularXtask(explicitPath);
  }
  if (preparedProgramIndexChecker?.sourceRepoRoot === sourceRepoRoot) {
    return requireRegularXtask(preparedProgramIndexChecker.xtaskPath);
  }
  const host = rustHostTarget(sourceRepoRoot);
  const checkerTargetDir = join(sourceRepoRoot, "target", "program-index-checker");
  const xtaskPath = join(
    checkerTargetDir,
    host,
    "release",
    process.platform === "win32" ? "xtask.exe" : "xtask"
  );
  const cargoArgs = [
    "build",
    "--release",
    "-p",
    "xtask",
    "--target",
    host,
    "--target-dir",
    checkerTargetDir,
    "--quiet"
  ];
  const inDevShell = process.env.KANDELO_DEV_SHELL_TOOL_PATH !== void 0;
  const command = inDevShell ? "cargo" : "bash";
  const args = inDevShell ? cargoArgs : [join(sourceRepoRoot, "scripts", "dev-shell.sh"), "cargo", ...cargoArgs];
  const env = { ...process.env };
  for (const name of CHECKER_BUILD_SCRUBBED_ENV) delete env[name];
  const result = spawnSync(command, args, {
    cwd: sourceRepoRoot,
    encoding: "utf8",
    env
  });
  if (result.status !== 0) {
    throw new Error(commandFailure(command, args, result));
  }
  preparedProgramIndexChecker = {
    sourceRepoRoot,
    xtaskPath: requireRegularXtask(xtaskPath)
  };
  return preparedProgramIndexChecker.xtaskPath;
}
function ensureProgramIndexesInSourceContext() {
  const sourceRepoRoot = completeSourceCheckoutRoot();
  if (sourceRepoRoot === null) return;
  const registryRoots = configuredProgramRegistryRoots();
  if (registryRoots === null) return;
  if (programIndexContextCheckerForTests) {
    programIndexContextCheckerForTests(sourceRepoRoot, registryRoots);
    return;
  }
  const xtaskPath = prepareProgramIndexChecker(sourceRepoRoot);
  const args = [
    "build-deps",
    "program-index-context-ensure",
    "--source-repo-root",
    sourceRepoRoot
  ];
  const result = spawnSync(xtaskPath, args, {
    cwd: sourceRepoRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      WASM_POSIX_DEPS_REGISTRY: registryRoots.join(":")
    }
  });
  if (result.status !== 0) {
    throw new Error(
      `Failed to generate the program package source projection:
${commandFailure(xtaskPath, args, result)}`
    );
  }
}
function withFreshProgramIndexes(relPaths, operation) {
  if (programIndexFreshnessBoundaryDepth > 0 || !relPaths.some((relPath) => relPath.startsWith("programs/"))) {
    return operation();
  }
  programIndexFreshnessBoundaryDepth += 1;
  try {
    ensureProgramIndexesInSourceContext();
    return operation();
  } finally {
    programIndexFreshnessBoundaryDepth -= 1;
  }
}
function hasExactObjectKeys(value, expectedKeys) {
  const actual = Object.keys(value).sort();
  const expected = [...expectedKeys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}
function readProgramPackageProjection(indexPath) {
  let raw;
  try {
    raw = JSON.parse(readFileSync(indexPath, "utf8"));
  } catch (error) {
    throw new Error(
      `Invalid program package index ${indexPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
  return parseProgramPackageProjection(raw, indexPath);
}
function parseProgramPackageProjection(raw, indexPath, options = {}) {
  if (typeof raw !== "object" || raw === null || !hasExactObjectKeys(raw, ["format", "identities", "packages"]) || raw.format !== PROGRAM_PACKAGE_INDEX_FORMAT || typeof raw.identities !== "object" || raw.identities === null || Array.isArray(raw.identities) || typeof raw.packages !== "object" || raw.packages === null || Array.isArray(raw.packages)) {
    throw new Error(
      `Invalid program package index ${indexPath}: expected ${PROGRAM_PACKAGE_INDEX_FORMAT}`
    );
  }
  const identities = /* @__PURE__ */ new Map();
  const rawIdentities = raw.identities;
  for (const [packageName, rawIdentity] of Object.entries(rawIdentities)) {
    safeSinglePathComponent(packageName, indexPath, "identity package name", false);
    if (typeof rawIdentity !== "object" || rawIdentity === null || !hasExactObjectKeys(rawIdentity, ["manifestSha256", "cacheKeys"]) || typeof rawIdentity.manifestSha256 !== "string" || !/^[a-f0-9]{64}$/.test(
      rawIdentity.manifestSha256
    ) || typeof rawIdentity.cacheKeys !== "object" || rawIdentity.cacheKeys === null || Array.isArray(rawIdentity.cacheKeys)) {
      throw new Error(
        `Invalid program package index ${indexPath}: malformed identity ${JSON.stringify(packageName)}`
      );
    }
    const cacheKeys = rawIdentity.cacheKeys;
    if (!hasExactObjectKeys(cacheKeys, ["wasm32", "wasm64"]) || Object.values(cacheKeys).some(
      (cacheKey) => typeof cacheKey !== "string" || !/^[a-f0-9]{64}$/.test(cacheKey)
    )) {
      throw new Error(
        `Invalid program package index ${indexPath}: identity ${JSON.stringify(packageName)} has invalid contextual cache keys`
      );
    }
    identities.set(packageName, {
      manifestSha256: rawIdentity.manifestSha256,
      cacheKeys
    });
  }
  const packages = /* @__PURE__ */ new Map();
  const rawPackages = raw.packages;
  for (const [packageName, rawPackage] of Object.entries(rawPackages)) {
    safeSinglePathComponent(packageName, indexPath, "package name", false);
    if (typeof rawPackage !== "object" || rawPackage === null || !hasExactObjectKeys(rawPackage, [
      "manifestSha256",
      "arches",
      "cacheKeys",
      "dependencyClosures",
      "members"
    ]) || !Array.isArray(rawPackage.arches) || typeof rawPackage.cacheKeys !== "object" || rawPackage.cacheKeys === null || Array.isArray(rawPackage.cacheKeys) || typeof rawPackage.dependencyClosures !== "object" || rawPackage.dependencyClosures === null || Array.isArray(
      rawPackage.dependencyClosures
    ) || !Array.isArray(rawPackage.members) || typeof rawPackage.manifestSha256 !== "string" || !/^[a-f0-9]{64}$/.test(
      rawPackage.manifestSha256
    )) {
      throw new Error(
        `Invalid program package index ${indexPath}: malformed package ${JSON.stringify(packageName)}`
      );
    }
    const arches = rawPackage.arches;
    if (arches.length === 0 || new Set(arches).size !== arches.length || arches.some((arch) => typeof arch !== "string" || !ARCH_SEGMENTS.has(arch))) {
      throw new Error(
        `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} has invalid arches`
      );
    }
    const cacheKeys = rawPackage.cacheKeys;
    if (!hasExactObjectKeys(cacheKeys, arches) || Object.values(cacheKeys).some(
      (cacheKey) => typeof cacheKey !== "string" || !/^[a-f0-9]{64}$/.test(cacheKey)
    )) {
      throw new Error(
        `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} has invalid cache keys`
      );
    }
    const dependencyClosures = rawPackage.dependencyClosures;
    if (!hasExactObjectKeys(dependencyClosures, arches)) {
      throw new Error(
        `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} has invalid dependency closure arches`
      );
    }
    const parsedDependencyClosures = {};
    for (const arch of arches) {
      const rawClosure = dependencyClosures[arch];
      if (!Array.isArray(rawClosure)) {
        throw new Error(
          `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} has a malformed dependency closure for ${arch}`
        );
      }
      const seenDependencies = /* @__PURE__ */ new Set();
      parsedDependencyClosures[arch] = rawClosure.map(
        (rawDependency, dependencyIndex) => {
          if (typeof rawDependency !== "object" || rawDependency === null || !hasExactObjectKeys(rawDependency, [
            "packageName",
            "manifestSha256",
            "cacheKey"
          ]) || typeof rawDependency.packageName !== "string" || typeof rawDependency.manifestSha256 !== "string" || !/^[a-f0-9]{64}$/.test(
            rawDependency.manifestSha256
          ) || typeof rawDependency.cacheKey !== "string" || !/^[a-f0-9]{64}$/.test(
            rawDependency.cacheKey
          )) {
            throw new Error(
              `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} dependency ${dependencyIndex + 1} for ${arch} is malformed`
            );
          }
          const dependency = rawDependency;
          safeSinglePathComponent(
            dependency.packageName,
            indexPath,
            `${packageName} dependency packageName`,
            false
          );
          if (dependency.packageName === packageName || seenDependencies.has(dependency.packageName)) {
            throw new Error(
              `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} dependency closure for ${arch} must contain unique dependencies other than itself`
            );
          }
          seenDependencies.add(dependency.packageName);
          const contextualIdentity = identities.get(dependency.packageName);
          if (!contextualIdentity || contextualIdentity.manifestSha256 !== dependency.manifestSha256 || contextualIdentity.cacheKeys[arch] !== dependency.cacheKey) {
            throw new Error(
              `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} dependency ${JSON.stringify(dependency.packageName)} for ${arch} does not match the index's authoritative contextual identity`
            );
          }
          return dependency;
        }
      );
    }
    const members = rawPackage.members.map(
      (rawMember, memberIndex) => {
        if (typeof rawMember !== "object" || rawMember === null || rawMember.kind !== "output" && rawMember.kind !== "runtime-file" || typeof rawMember.sourceArtifact !== "string" || typeof rawMember.mirrorPath !== "string") {
          throw new Error(
            `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} member ${memberIndex + 1} is malformed`
          );
        }
        const member = rawMember;
        const expectedMemberKeys = member.kind === "output" ? [
          "kind",
          "sourceArtifact",
          "mirrorPath",
          "outputName",
          "forkInstrumentation"
        ] : [
          "kind",
          "sourceArtifact",
          "mirrorPath",
          "guestPath",
          "mode"
        ];
        if (!hasExactObjectKeys(member, expectedMemberKeys)) {
          throw new Error(
            `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} member ${memberIndex + 1} has unknown or missing fields`
          );
        }
        portableArtifactPath(
          member.sourceArtifact,
          indexPath,
          `${packageName} sourceArtifact`
        );
        portableArtifactPath(
          member.mirrorPath,
          indexPath,
          `${packageName} mirrorPath`
        );
        if (member.kind === "output") {
          if (typeof member.outputName !== "string" || member.forkInstrumentation !== "auto" && member.forkInstrumentation !== "disabled") {
            throw new Error(
              `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} output member lacks outputName or forkInstrumentation`
            );
          }
          safeSinglePathComponent(
            member.outputName,
            indexPath,
            `${packageName} outputName`
          );
        } else if (typeof member.guestPath !== "string" || !isWellFormedUnicode(member.guestPath) || !member.guestPath.startsWith("/") || !Number.isInteger(member.mode) || member.mode < 0 || member.mode > 511) {
          throw new Error(
            `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} runtime member lacks valid guestPath or mode`
          );
        }
        return member;
      }
    );
    if (members.length === 0 || new Set(members.map((member) => member.sourceArtifact)).size !== members.length || new Set(members.map((member) => member.mirrorPath)).size !== members.length || members.length === 1 && members[0].mirrorPath.includes("/") || members.length > 1 && members.some(
      (member) => !member.mirrorPath.startsWith(`${packageName}/`)
    )) {
      throw new Error(
        `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} members are empty, collide, or violate scalar/package-directory layout`
      );
    }
    const manifestSha256 = rawPackage.manifestSha256;
    const identity = identities.get(packageName);
    if (!identity || identity.manifestSha256 !== manifestSha256 || arches.some(
      (arch) => identity.cacheKeys[arch] !== cacheKeys[arch]
    )) {
      throw new Error(
        `Invalid program package index ${indexPath}: package ${JSON.stringify(packageName)} does not match its contextual package identity`
      );
    }
    packages.set(packageName, {
      manifestSha256,
      arches,
      cacheKeys,
      dependencyClosures: parsedDependencyClosures,
      members
    });
  }
  const requiredIdentities = new Set(packages.keys());
  for (const projection of packages.values()) {
    for (const closure of Object.values(projection.dependencyClosures)) {
      for (const dependency of closure) {
        requiredIdentities.add(dependency.packageName);
      }
    }
  }
  if (options.requireExactIdentitySet && (identities.size !== requiredIdentities.size || [...identities.keys()].some((name) => !requiredIdentities.has(name)))) {
    throw new Error(
      `Invalid program package index ${indexPath}: identities must be the exact package/dependency identity set`
    );
  }
  return { identities, packages, indexPath };
}
var SOURCE_ONLY_RESOLUTION_POLICY = "source-only-v1";
var SOURCE_ONLY_PROJECTION_FORMAT = "kandelo-source-only-program-projection-v1";
var SOURCE_ONLY_PROJECTION_REL_PATH = ".kandelo/source-only-program-projection-v1.json";
var SOURCE_ONLY_PROJECTION_MAX_BYTES = 16 * 1024 * 1024;
var SOURCE_ONLY_MEMBER_MAX_BYTES = 512 * 1024 * 1024;
function sourceOnlyPolicyEnabled() {
  return process.env.WASM_POSIX_RESOLUTION_POLICY === SOURCE_ONLY_RESOLUTION_POLICY;
}
function sourceOnlyBinaryRoot() {
  if (!sourceOnlyPolicyEnabled()) return null;
  const configured = process.env.WASM_POSIX_SOURCE_ONLY_BINARY_ROOT;
  if (configured === void 0 || configured.length === 0) {
    throw new Error(
      `${SOURCE_ONLY_RESOLUTION_POLICY} requires WASM_POSIX_SOURCE_ONLY_BINARY_ROOT`
    );
  }
  if (!isAbsolute(configured)) {
    throw new Error(
      `WASM_POSIX_SOURCE_ONLY_BINARY_ROOT must be absolute under ${SOURCE_ONLY_RESOLUTION_POLICY}: ${JSON.stringify(configured)}`
    );
  }
  const lexical = resolve(configured);
  if (lexical !== configured) {
    throw new Error(
      `WASM_POSIX_SOURCE_ONLY_BINARY_ROOT must use its normalized canonical spelling: ${JSON.stringify(configured)}`
    );
  }
  try {
    const metadata = lstatSync(lexical);
    if (!metadata.isDirectory() || metadata.isSymbolicLink()) {
      throw new Error("root is not a real directory");
    }
    const canonical = realpathSync(lexical);
    if (canonical !== lexical) {
      throw new Error(`canonical path is ${canonical}`);
    }
    return canonical;
  } catch (error) {
    throw new Error(
      `Invalid WASM_POSIX_SOURCE_ONLY_BINARY_ROOT ${JSON.stringify(configured)}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
function sameStableFileMetadata(left, right) {
  return left.dev === right.dev && left.ino === right.ino && left.nlink === right.nlink && left.mode === right.mode && left.size === right.size && left.mtimeMs === right.mtimeMs && left.ctimeMs === right.ctimeMs;
}
function requireStableNamedFile(path, opened, label) {
  const named = lstatSync(path);
  if (!named.isFile() || named.isSymbolicLink() || realpathSync(path) !== resolve(path) || !sameStableFileMetadata(opened, named)) {
    throw new Error(`${label} changed or crosses a symlink: ${path}`);
  }
}
function readStableProjectionAuthority(path) {
  let descriptor = null;
  try {
    descriptor = openSync(
      path,
      fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0)
    );
    const before = fstatSync(descriptor);
    if (!before.isFile()) {
      throw new Error("authority is not a regular file");
    }
    if ((before.mode & 4095) !== 420) {
      throw new Error(
        `authority mode is ${(before.mode & 4095).toString(8)}, expected 644`
      );
    }
    if (before.size < 0 || !Number.isSafeInteger(before.size) || before.size > SOURCE_ONLY_PROJECTION_MAX_BYTES) {
      throw new Error(
        `authority is ${before.size} bytes, exceeding the ${SOURCE_ONLY_PROJECTION_MAX_BYTES}-byte limit`
      );
    }
    const bytes = Buffer.alloc(before.size);
    let offset = 0;
    while (offset < bytes.length) {
      const count = readSync(
        descriptor,
        bytes,
        offset,
        bytes.length - offset,
        offset
      );
      if (count === 0) throw new Error("authority ended during its stable read");
      offset += count;
    }
    const after = fstatSync(descriptor);
    if (!sameStableFileMetadata(before, after)) {
      throw new Error("authority changed during its stable read");
    }
    requireStableNamedFile(path, after, "Source-only projection authority");
    return bytes;
  } catch (error) {
    throw new Error(
      `Invalid source-only projection authority ${path}: ${error instanceof Error ? error.message : String(error)}`
    );
  } finally {
    if (descriptor !== null) closeSync(descriptor);
  }
}
function comparePortableTuple(left, right) {
  for (let index = 0; index < Math.max(left.length, right.length); index++) {
    const leftValue = left[index] ?? "";
    const rightValue = right[index] ?? "";
    const comparison = Buffer.compare(
      Buffer.from(leftValue, "utf8"),
      Buffer.from(rightValue, "utf8")
    );
    if (comparison !== 0) return comparison;
  }
  return 0;
}
function emptySourceOnlyClaimedPathNode() {
  return {
    ownerPath: null,
    firstDescendantPath: null,
    children: /* @__PURE__ */ new Map()
  };
}
function claimSourceOnlyMirrorPath(root, mirrorPath, projectionPath) {
  let cursor = root;
  const lineage = [root];
  for (const component of mirrorPath.split("/")) {
    if (cursor.ownerPath !== null) {
      throw sourceOnlyProjectionError(
        projectionPath,
        `materialized member paths conflict: ${JSON.stringify(cursor.ownerPath)} and ${JSON.stringify(mirrorPath)}`
      );
    }
    let child = cursor.children.get(component);
    if (child === void 0) {
      child = emptySourceOnlyClaimedPathNode();
      cursor.children.set(component, child);
    }
    cursor = child;
    lineage.push(cursor);
  }
  const conflict = cursor.ownerPath ?? cursor.firstDescendantPath;
  if (conflict !== null) {
    throw sourceOnlyProjectionError(
      projectionPath,
      `materialized member paths conflict: ${JSON.stringify(conflict)} and ${JSON.stringify(mirrorPath)}`
    );
  }
  cursor.ownerPath = mirrorPath;
  for (const node of lineage) node.firstDescendantPath ??= mirrorPath;
}
function sourceOnlyProjectionError(path, detail) {
  return new Error(`Invalid source-only projection authority ${path}: ${detail}`);
}
function readSourceOnlyProjection() {
  const root = sourceOnlyBinaryRoot();
  if (root === null) {
    throw new Error("Source-only projection requested outside source-only-v1");
  }
  return readSourceOnlyProjectionAt(root);
}
function readSourceOnlyProjectionAt(root) {
  const metadataRoot = join(root, ".kandelo");
  try {
    const metadata = lstatSync(metadataRoot);
    if (!metadata.isDirectory() || metadata.isSymbolicLink() || realpathSync(metadataRoot) !== metadataRoot) {
      throw new Error("metadata parent is not a canonical real directory");
    }
  } catch (error) {
    throw sourceOnlyProjectionError(
      join(root, SOURCE_ONLY_PROJECTION_REL_PATH),
      `invalid .kandelo directory: ${error instanceof Error ? error.message : String(error)}`
    );
  }
  const projectionPath = join(root, SOURCE_ONLY_PROJECTION_REL_PATH);
  let raw;
  try {
    const bytes = readStableProjectionAuthority(projectionPath);
    let json;
    try {
      json = new TextDecoder("utf-8", {
        fatal: true,
        ignoreBOM: true
      }).decode(bytes);
    } catch {
      throw new Error("authority is not valid UTF-8");
    }
    raw = JSON.parse(json);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Invalid source-only projection authority")) throw error;
    throw sourceOnlyProjectionError(
      projectionPath,
      error instanceof Error ? error.message : String(error)
    );
  }
  if (typeof raw !== "object" || raw === null || Array.isArray(raw) || !hasExactObjectKeys(raw, [
    "format",
    "projection",
    "graphAuthoritySha256",
    "nodes"
  ]) || raw.format !== SOURCE_ONLY_PROJECTION_FORMAT || typeof raw.graphAuthoritySha256 !== "string" || !/^[a-f0-9]{64}$/.test(
    raw.graphAuthoritySha256
  ) || !Array.isArray(raw.nodes)) {
    throw sourceOnlyProjectionError(
      projectionPath,
      `expected exact ${SOURCE_ONLY_PROJECTION_FORMAT} fields`
    );
  }
  const projection = parseProgramPackageProjection(
    raw.projection,
    `${projectionPath}#projection`,
    { requireExactIdentitySet: true }
  );
  for (const [packageName, packageProjection] of projection.packages) {
    if (packageProjection.arches.some(
      (arch, index, arches) => index > 0 && comparePortableTuple([arches[index - 1]], [arch]) >= 0
    )) {
      throw sourceOnlyProjectionError(
        projectionPath,
        `program projection ${JSON.stringify(packageName)} architectures are not canonically sorted`
      );
    }
  }
  const nodes = [];
  const nodeByKey = /* @__PURE__ */ new Map();
  const ownerByMirrorPath = /* @__PURE__ */ new Map();
  const claimedMirrorPaths = emptySourceOnlyClaimedPathNode();
  let previousNodeTuple = null;
  const rawNodes = raw.nodes;
  for (const [nodeIndex, rawNode] of rawNodes.entries()) {
    if (typeof rawNode !== "object" || rawNode === null || Array.isArray(rawNode) || !hasExactObjectKeys(rawNode, [
      "node",
      "manifestSha256",
      "cacheKeySha256",
      "cacheReceiptSha256",
      "members"
    ]) || typeof rawNode.node !== "object" || rawNode.node === null || Array.isArray(rawNode.node) || !hasExactObjectKeys(
      rawNode.node,
      ["kind", "name", "targetArch"]
    ) || rawNode.node.kind !== "package" || typeof rawNode.node.name !== "string" || typeof rawNode.node.targetArch !== "string" || !ARCH_SEGMENTS.has(
      rawNode.node.targetArch
    ) || !Array.isArray(rawNode.members)) {
      throw sourceOnlyProjectionError(
        projectionPath,
        `node ${nodeIndex + 1} is malformed`
      );
    }
    const packageName = rawNode.node.name;
    const targetArch = rawNode.node.targetArch;
    safeSinglePathComponent(
      packageName,
      projectionPath,
      `node ${nodeIndex + 1} package name`,
      false
    );
    const nodeTuple = [packageName, targetArch];
    if (previousNodeTuple !== null && comparePortableTuple(previousNodeTuple, nodeTuple) >= 0) {
      throw sourceOnlyProjectionError(
        projectionPath,
        "nodes must be uniquely sorted by (name, targetArch)"
      );
    }
    previousNodeTuple = nodeTuple;
    const nodeRecord = rawNode;
    for (const digestField of [
      "manifestSha256",
      "cacheKeySha256",
      "cacheReceiptSha256"
    ]) {
      if (typeof nodeRecord[digestField] !== "string" || !/^[a-f0-9]{64}$/.test(nodeRecord[digestField])) {
        throw sourceOnlyProjectionError(
          projectionPath,
          `node ${nodeIndex + 1} has invalid ${digestField}`
        );
      }
    }
    const identity = projection.identities.get(packageName);
    if (identity && (identity.manifestSha256 !== nodeRecord.manifestSha256 || identity.cacheKeys[targetArch] !== nodeRecord.cacheKeySha256)) {
      throw sourceOnlyProjectionError(
        projectionPath,
        `node ${JSON.stringify(packageName)} (${targetArch}) does not match the projection identity`
      );
    }
    const members = [];
    let previousMemberTuple = null;
    for (const [memberIndex, rawMember] of nodeRecord.members.entries()) {
      if (typeof rawMember !== "object" || rawMember === null || Array.isArray(rawMember) || !hasExactObjectKeys(rawMember, [
        "sourceArtifact",
        "mirrorPath",
        "mode",
        "size",
        "sha256"
      ]) || typeof rawMember.sourceArtifact !== "string" || typeof rawMember.mirrorPath !== "string" || !Number.isInteger(rawMember.mode) || rawMember.mode < 0 || rawMember.mode > 4095 || !Number.isSafeInteger(rawMember.size) || rawMember.size < 0 || rawMember.size > SOURCE_ONLY_MEMBER_MAX_BYTES || typeof rawMember.sha256 !== "string" || !/^[a-f0-9]{64}$/.test(
        rawMember.sha256
      )) {
        throw sourceOnlyProjectionError(
          projectionPath,
          `node ${JSON.stringify(packageName)} member ${memberIndex + 1} is malformed or exceeds the ${SOURCE_ONLY_MEMBER_MAX_BYTES}-byte artifact limit`
        );
      }
      const memberRecord = rawMember;
      portableArtifactPath(
        memberRecord.sourceArtifact,
        projectionPath,
        `${packageName} sourceArtifact`
      );
      requirePortableResolverPath(memberRecord.mirrorPath);
      const memberTuple = [
        memberRecord.mirrorPath,
        memberRecord.sourceArtifact
      ];
      if (previousMemberTuple !== null && comparePortableTuple(previousMemberTuple, memberTuple) >= 0) {
        throw sourceOnlyProjectionError(
          projectionPath,
          `node ${JSON.stringify(packageName)} members must be uniquely sorted by (mirrorPath, sourceArtifact)`
        );
      }
      previousMemberTuple = memberTuple;
      claimSourceOnlyMirrorPath(
        claimedMirrorPaths,
        memberRecord.mirrorPath,
        projectionPath
      );
      const member = {
        ...memberRecord,
        forkInstrumentation: null
      };
      members.push(member);
    }
    const node = {
      packageName,
      targetArch,
      manifestSha256: nodeRecord.manifestSha256,
      cacheKeySha256: nodeRecord.cacheKeySha256,
      cacheReceiptSha256: nodeRecord.cacheReceiptSha256,
      members
    };
    const projectedProgram = projection.packages.get(packageName);
    const isExactProgramNode = projectedProgram?.arches.includes(targetArch) ?? false;
    const isRootMirrorNode = !projection.packages.has(packageName) && packageName === "kernel" && members.length === 1 && !members[0].mirrorPath.includes("/");
    const standaloneModuleArtifacts = {
      "kandelo-image-module": ["kandelo_image_module32.wasm"]
    };
    const isStandaloneModuleNode = !projection.packages.has(packageName) && members.length === 1 && (standaloneModuleArtifacts[packageName]?.includes(
      members[0].mirrorPath
    ) ?? false);
    if (!isExactProgramNode && !isRootMirrorNode && !isStandaloneModuleNode) {
      throw sourceOnlyProjectionError(
        projectionPath,
        `node ${JSON.stringify(packageName)} (${targetArch}) is neither an exact v2 program node nor a root-mirror package`
      );
    }
    const nodeKey = `${packageName}\0${targetArch}`;
    nodeByKey.set(nodeKey, node);
    for (const member of members) ownerByMirrorPath.set(member.mirrorPath, node);
    nodes.push(node);
  }
  for (const [packageName, packageProjection] of projection.packages) {
    for (const arch of packageProjection.arches) {
      const node = nodeByKey.get(`${packageName}\0${arch}`);
      if (!node) {
        throw sourceOnlyProjectionError(
          projectionPath,
          `program projection ${JSON.stringify(packageName)} (${arch}) has no aggregate node`
        );
      }
      const expectedByPath = new Map(
        packageProjection.members.map((member) => [
          `programs/${arch}/${member.mirrorPath}`,
          member
        ])
      );
      if (node.members.length !== expectedByPath.size || node.members.some((member) => {
        const expected = expectedByPath.get(member.mirrorPath);
        if (!expected || expected.sourceArtifact !== member.sourceArtifact) {
          return true;
        }
        if (expected.kind === "runtime-file" && expected.mode !== member.mode) {
          return true;
        }
        member.forkInstrumentation = expected.kind === "output" ? expected.forkInstrumentation ?? null : null;
        return false;
      })) {
        throw sourceOnlyProjectionError(
          projectionPath,
          `aggregate node ${JSON.stringify(packageName)} (${arch}) is not a 1:1 materialization of its program projection`
        );
      }
    }
  }
  return { root, projectionPath, projection, nodes, ownerByMirrorPath };
}
function validateSourceOnlyMember(loaded, member, captureBytes = false) {
  const candidate = join(loaded.root, ...member.mirrorPath.split("/"));
  let descriptor = null;
  try {
    descriptor = openSync(
      candidate,
      fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0)
    );
    const before = fstatSync(descriptor);
    if (!before.isFile()) throw new Error("member is not a regular file");
    if ((before.mode & 4095) !== member.mode) {
      throw new Error(
        `member mode is ${(before.mode & 4095).toString(8)}, expected ${member.mode.toString(8)}`
      );
    }
    if (before.size !== member.size) {
      throw new Error(
        `member size is ${before.size}, expected ${member.size}`
      );
    }
    const inspectArtifactBytes = member.mirrorPath.endsWith(".wasm") || member.mirrorPath.endsWith(".vfs") || member.mirrorPath.endsWith(".vfs.zst");
    const retainedBytes = captureBytes || inspectArtifactBytes ? Buffer.alloc(member.size) : null;
    const chunk = retainedBytes ?? Buffer.alloc(Math.min(1024 * 1024, Math.max(1, member.size)));
    const digest = createHash("sha256");
    let offset = 0;
    while (offset < member.size) {
      const bufferOffset = retainedBytes === null ? 0 : offset;
      const count = readSync(
        descriptor,
        chunk,
        bufferOffset,
        Math.min(chunk.length, member.size - offset),
        offset
      );
      if (count === 0) throw new Error("member ended during its stable read");
      digest.update(chunk.subarray(bufferOffset, bufferOffset + count));
      offset += count;
    }
    const after = fstatSync(descriptor);
    if (!sameStableFileMetadata(before, after)) {
      throw new Error("member changed during its stable read");
    }
    requireStableNamedFile(candidate, after, "Source-only materialized member");
    const actualSha256 = digest.digest("hex");
    if (actualSha256 !== member.sha256) {
      throw new Error(
        `member sha256 is ${actualSha256}, expected ${member.sha256}`
      );
    }
    if (retainedBytes !== null && hasBinaryArtifactPolicyFailuresForBytes(
      retainedBytes,
      member.mirrorPath,
      member.forkInstrumentation
    )) {
      throw new Error("member is rejected by artifact policy");
    }
    return {
      path: candidate,
      bytes: captureBytes ? retainedBytes : null
    };
  } catch (error) {
    throw new Error(
      `Source-only package member ${JSON.stringify(member.mirrorPath)} is invalid: ${error instanceof Error ? error.message : String(error)}`
    );
  } finally {
    if (descriptor !== null) closeSync(descriptor);
  }
}
function resolveSourceOnlyBinary(relPath, loaded = readSourceOnlyProjection()) {
  const adjusted = applyDefaultArch(relPath);
  const owner = loaded.ownerByMirrorPath.get(adjusted);
  if (!owner) {
    throw new BinaryNotFoundError(
      `Package artifacts not found in source-only projection: ${adjusted}`
    );
  }
  const validated = validateSourceOnlyNode(loaded, owner);
  const resolved = validated.get(adjusted);
  if (!resolved) {
    throw new Error(
      `Source-only package closure for ${JSON.stringify(owner.packageName)} omitted ${JSON.stringify(adjusted)}`
    );
  }
  return resolved;
}
function validateSourceOnlyNode(loaded, owner) {
  const validated = /* @__PURE__ */ new Map();
  for (const member of owner.members) {
    validated.set(
      member.mirrorPath,
      validateSourceOnlyMember(loaded, member).path
    );
  }
  return validated;
}
function programPackageProjectionIdentity(projection) {
  return JSON.stringify({
    manifestSha256: projection.manifestSha256,
    arches: projection.arches,
    cacheKeys: Object.fromEntries(
      projection.arches.map((arch) => [arch, projection.cacheKeys[arch]])
    ),
    dependencyClosures: Object.fromEntries(
      projection.arches.map((arch) => [
        arch,
        [...projection.dependencyClosures[arch]].sort(
          (left, right) => left.packageName < right.packageName ? -1 : left.packageName > right.packageName ? 1 : 0
        )
      ])
    ),
    members: projection.members.map(
      (member) => member.kind === "output" ? {
        kind: member.kind,
        sourceArtifact: member.sourceArtifact,
        mirrorPath: member.mirrorPath,
        outputName: member.outputName,
        forkInstrumentation: member.forkInstrumentation
      } : {
        kind: member.kind,
        sourceArtifact: member.sourceArtifact,
        mirrorPath: member.mirrorPath,
        guestPath: member.guestPath,
        mode: member.mode
      }
    )
  });
}
function bundledProgramPackageProjection() {
  const indexPath = bundledProgramPackageIndexPath();
  return pathEntryExists(indexPath) ? readProgramPackageProjection(indexPath) : null;
}
function bundledProgramClaimForPath(adjusted) {
  const loaded = bundledProgramPackageProjection();
  if (!loaded) return null;
  const components = adjusted.split("/");
  if (components[0] !== "programs" || !ARCH_SEGMENTS.has(components[1])) return null;
  const arch = components[1];
  if (components.length >= 4) {
    const packageName = components[2];
    const projection = loaded.packages.get(packageName);
    return projection?.arches.includes(arch) ? packageName : null;
  }
  if (components.length !== 3) return null;
  const flatName = components[2];
  for (const [packageName, projection] of loaded.packages) {
    if (projection.arches.includes(arch) && projection.members.some(
      (member) => member.kind === "output" && member.mirrorPath.split("/").at(-1) === flatName
    )) return packageName;
  }
  return null;
}
function rejectUnselectedBundledProgramClaim(adjusted) {
  const packageName = bundledProgramClaimForPath(adjusted);
  if (packageName) {
    throw new Error(
      `Installed package resolver path ${JSON.stringify(adjusted)} is owned by ${JSON.stringify(packageName)}, but that package is not selected by the configured program registry`
    );
  }
}
function selectedProgramPackageState() {
  const roots = configuredProgramRegistryRoots();
  const identities = /* @__PURE__ */ new Map();
  const unidentifiedPackages = /* @__PURE__ */ new Map();
  const packages = /* @__PURE__ */ new Map();
  const unprojectedPackages = /* @__PURE__ */ new Map();
  const physicalProgramClaims = [];
  if (roots === null) {
    const indexPath = bundledProgramPackageIndexPath();
    if (!pathEntryExists(indexPath)) {
      return {
        identities,
        unidentifiedPackages,
        packages,
        unprojectedPackages,
        physicalProgramClaims
      };
    }
    const loaded = readProgramPackageProjection(indexPath);
    for (const [packageName, identity] of loaded.identities) {
      identities.set(packageName, {
        ...identity,
        packageName,
        policyPath: `${loaded.indexPath}#identities.${packageName}`
      });
    }
    for (const [packageName, projection] of loaded.packages) {
      physicalProgramClaims.push({
        packageName,
        projection,
        selected: true
      });
      packages.set(packageName, {
        ...projection,
        packageName,
        policyPath: `${loaded.indexPath}#${packageName}`
      });
    }
    return {
      identities,
      unidentifiedPackages,
      packages,
      unprojectedPackages,
      physicalProgramClaims
    };
  }
  const claimed = /* @__PURE__ */ new Set();
  let authoritativeIdentities = null;
  let authoritativePackages = null;
  for (const root of roots) {
    if (!pathEntryExists(root)) continue;
    if (!statSync(root).isDirectory()) {
      throw new Error(`Program registry root is not a directory: ${root}`);
    }
    const indexPath = join(root, PROGRAM_PACKAGE_INDEX_FILE);
    if (!pathEntryExists(indexPath)) {
      throw new Error(
        `Program registry ${root} is missing ${PROGRAM_PACKAGE_INDEX_FILE}; generate it with xtask build-deps program-index`
      );
    }
    const loaded = readProgramPackageProjection(indexPath);
    authoritativeIdentities ??= loaded.identities;
    authoritativePackages ??= loaded.packages;
    const entries = readdirSync(root, { withFileTypes: true }).filter((entry) => entry.isDirectory() || entry.isSymbolicLink()).sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const packageName = entry.name;
      const manifestPath = join(root, packageName, "package.toml");
      if (!pathEntryExists(manifestPath)) continue;
      let isFile = false;
      try {
        isFile = statSync(manifestPath).isFile();
      } catch {
        isFile = false;
      }
      if (!isFile) continue;
      const physicalProjection = loaded.packages.get(packageName);
      const selected = !claimed.has(packageName);
      if (physicalProjection) {
        physicalProgramClaims.push({
          packageName,
          projection: physicalProjection,
          selected
        });
      }
      if (!selected) continue;
      claimed.add(packageName);
      const identity = authoritativeIdentities.get(packageName);
      if (identity) {
        identities.set(packageName, {
          ...identity,
          packageName,
          manifestPath,
          policyPath: manifestPath
        });
      } else {
        unidentifiedPackages.set(packageName, manifestPath);
      }
      const projection = authoritativePackages.get(packageName);
      if (!projection) {
        unprojectedPackages.set(packageName, manifestPath);
        continue;
      }
      packages.set(packageName, {
        ...projection,
        packageName,
        manifestPath,
        policyPath: manifestPath
      });
    }
  }
  return {
    identities,
    unidentifiedPackages,
    packages,
    unprojectedPackages,
    physicalProgramClaims
  };
}
function verifySelectedPackageIdentity(identity) {
  if (!identity.manifestPath) return;
  let bytes;
  try {
    bytes = readFileSync(identity.manifestPath);
  } catch (error) {
    throw new Error(
      `Program package identity cannot verify ${identity.manifestPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
  const digest = createHash("sha256").update(bytes).digest("hex");
  if (digest !== identity.manifestSha256) {
    throw new Error(
      `Program package identity is stale for ${identity.manifestPath}; regenerate ${PROGRAM_PACKAGE_INDEX_FILE}`
    );
  }
}
function verifySelectedProgramPackage(projection) {
  if (!projection.manifestPath) return;
  let bytes;
  try {
    bytes = readFileSync(projection.manifestPath);
  } catch (error) {
    throw new Error(
      `Program package projection cannot verify ${projection.manifestPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
  const digest = createHash("sha256").update(bytes).digest("hex");
  if (digest !== projection.manifestSha256) {
    throw new Error(
      `Program package projection is stale for ${projection.manifestPath}; regenerate ${PROGRAM_PACKAGE_INDEX_FILE}`
    );
  }
}
function selectedProgramPackage(packageName) {
  const index = programRegistryIndex();
  const projection = index.packages.get(packageName);
  if (projection) {
    verifySelectedProgramPackage(projection);
    return projection;
  }
  const manifestPath = index.unprojectedPackages.get(packageName);
  if (manifestPath) {
    throw new Error(
      `Package ${JSON.stringify(packageName)} is selected at ${manifestPath} but is absent from ${PROGRAM_PACKAGE_INDEX_FILE}; regenerate the registry projection`
    );
  }
  return null;
}
function verifyProgramDependencyContext(projection, arch) {
  const expectedDependencies = projection.dependencyClosures[arch];
  if (!expectedDependencies) {
    throw manifestError(
      projection.policyPath,
      `package ${JSON.stringify(projection.packageName)} lacks a dependency identity closure for ${arch}`
    );
  }
  const state = selectedProgramPackageState();
  const selectedProgramIdentity = state.identities.get(projection.packageName);
  if (!selectedProgramIdentity) {
    const unidentified = state.unidentifiedPackages.get(projection.packageName);
    throw new Error(
      `Program package ${JSON.stringify(projection.packageName)} has no authoritative contextual identity for ${arch}${unidentified ? ` at ${unidentified}` : ""}; regenerate ${PROGRAM_PACKAGE_INDEX_FILE} with the exact ordered registry roots`
    );
  }
  verifySelectedPackageIdentity(selectedProgramIdentity);
  const selectedProgramCacheKey = selectedProgramIdentity.cacheKeys[arch];
  if (selectedProgramIdentity.manifestSha256 !== projection.manifestSha256 || selectedProgramCacheKey !== projection.cacheKeys[arch]) {
    throw new Error(
      `Program package ${JSON.stringify(projection.packageName)} was projected with manifest ${projection.manifestSha256} and cache key ${projection.cacheKeys[arch]} for ${arch}, but the authoritative first-hit registry context at ${selectedProgramIdentity.policyPath} requires manifest ${selectedProgramIdentity.manifestSha256} and cache key ${selectedProgramCacheKey ?? "<missing>"}. Regenerate this program projection with the exact ordered registry roots; the highest-priority index must carry the complete combined-context projection rather than relying on a lower suffix-context build identity.`
    );
  }
  for (const expected of expectedDependencies) {
    const selected = state.identities.get(expected.packageName);
    if (!selected) {
      const unidentified = state.unidentifiedPackages.get(expected.packageName);
      if (unidentified) {
        throw new Error(
          `Program package ${JSON.stringify(projection.packageName)} was generated against dependency ${JSON.stringify(expected.packageName)}, but the first-hit package at ${unidentified} has no contextual identity in ${PROGRAM_PACKAGE_INDEX_FILE}`
        );
      }
      throw new Error(
        `Program package ${JSON.stringify(projection.packageName)} was generated against dependency ${JSON.stringify(expected.packageName)}, but that dependency is absent from the configured first-hit registry roots`
      );
    }
    verifySelectedPackageIdentity(selected);
    const selectedCacheKey = selected.cacheKeys[arch];
    if (selected.manifestSha256 !== expected.manifestSha256 || selectedCacheKey !== expected.cacheKey) {
      throw new Error(
        `Program package ${JSON.stringify(projection.packageName)} has a contextual cache identity mismatch for ${arch}: its projection expects dependency ${JSON.stringify(expected.packageName)} manifest ${expected.manifestSha256} and cache key ${expected.cacheKey}, but first-hit selection at ${selected.policyPath} provides manifest ${selected.manifestSha256} and cache key ${selectedCacheKey ?? "<missing>"}. Regenerate the program projection with the exact ordered registry roots; the complete highest-priority projection must bind every selected program to the same combined dependency context.`
      );
    }
  }
}
function programRegistryIndex() {
  const state = selectedProgramPackageState();
  const { physicalProgramClaims, ...selectedState } = state;
  const index = {
    ...selectedState,
    legacyFlatOutputs: /* @__PURE__ */ new Map(),
    forkInstrumentationDisabledOutputs: /* @__PURE__ */ new Map()
  };
  const resolverPaths = [];
  for (const projection of state.packages.values()) {
    const packageOwned = projection.members.length > 1;
    for (const arch of projection.arches) {
      for (const member of projection.members) {
        const conflict = resolverPaths.find(
          (previous) => previous.arch === arch && (previous.path === member.mirrorPath || previous.path.startsWith(`${member.mirrorPath}/`) || member.mirrorPath.startsWith(`${previous.path}/`))
        );
        if (conflict) {
          throw new Error(
            `Program resolver paths programs/${arch}/${conflict.path} and programs/${arch}/${member.mirrorPath} conflict between selected packages ${JSON.stringify(conflict.packageName)} and ${JSON.stringify(projection.packageName)}`
          );
        }
        resolverPaths.push({
          arch,
          path: member.mirrorPath,
          packageName: projection.packageName
        });
        if (member.kind !== "output") continue;
        const flatPath = member.mirrorPath.split("/").at(-1);
        const key = `${arch}/${flatPath}`;
        let owner = index.legacyFlatOutputs.get(key);
        if (!owner) {
          owner = {
            scalarOwners: /* @__PURE__ */ new Set(),
            packagePaths: /* @__PURE__ */ new Map(),
            shadowedOwners: /* @__PURE__ */ new Set()
          };
          index.legacyFlatOutputs.set(key, owner);
        }
        if (packageOwned) {
          owner.packagePaths.set(
            `programs/${arch}/${member.mirrorPath}`,
            projection.packageName
          );
        } else {
          owner.scalarOwners.add(projection.packageName);
        }
        if (member.forkInstrumentation === "disabled") {
          index.forkInstrumentationDisabledOutputs.set(
            `${arch}/${member.mirrorPath}`,
            projection.packageName
          );
        }
      }
    }
  }
  for (const { packageName, projection, selected } of physicalProgramClaims) {
    if (selected && state.packages.has(packageName)) continue;
    for (const arch of projection.arches) {
      for (const member of projection.members) {
        if (member.kind !== "output") continue;
        const flatPath = member.mirrorPath.split("/").at(-1);
        const key = `${arch}/${flatPath}`;
        let owner = index.legacyFlatOutputs.get(key);
        if (!owner) {
          owner = {
            scalarOwners: /* @__PURE__ */ new Set(),
            packagePaths: /* @__PURE__ */ new Map(),
            shadowedOwners: /* @__PURE__ */ new Set()
          };
          index.legacyFlatOutputs.set(key, owner);
        }
        owner.shadowedOwners.add(packageName);
      }
    }
  }
  return index;
}
function selectedFlatProgramPackage(adjusted) {
  const components = adjusted.split("/");
  if (components.length !== 3 || components[0] !== "programs" || !ARCH_SEGMENTS.has(components[1])) return null;
  const owner = programRegistryIndex().legacyFlatOutputs.get(
    `${components[1]}/${components[2]}`
  );
  if (!owner) return null;
  for (const packageName of owner.scalarOwners) {
    const projection = selectedProgramPackage(packageName);
    if (projection) return projection;
  }
  for (const packageName of owner.packagePaths.values()) {
    selectedProgramPackage(packageName);
  }
  if (owner.packagePaths.size > 0) {
    throw new Error(
      `Legacy flat resolver path ${JSON.stringify(adjusted)} belongs to a multi-member package; use ${[...owner.packagePaths.keys()].sort().map((path) => JSON.stringify(path)).join(" or ")}`
    );
  }
  for (const packageName of owner.shadowedOwners) {
    const projection = selectedProgramPackage(packageName);
    if (projection) return projection;
    throw new Error(
      `Legacy flat resolver path ${JSON.stringify(adjusted)} is claimed by a lower-root program package ${JSON.stringify(packageName)}, but its first-hit selected package does not project that program; stale scalar mirror fallback is forbidden`
    );
  }
  return null;
}
function closureForProjection(projection, arch, adjusted) {
  if (!projection.arches.includes(arch)) {
    throw manifestError(
      projection.policyPath,
      `package ${JSON.stringify(projection.packageName)} does not declare resolver artifacts for ${arch}`
    );
  }
  const cacheKey = projection.cacheKeys[arch];
  if (!cacheKey) {
    throw manifestError(
      projection.policyPath,
      `package ${JSON.stringify(projection.packageName)} lacks a cache identity for ${arch}`
    );
  }
  verifyProgramDependencyContext(projection, arch);
  const projectionIdentity = programPackageProjectionIdentity(projection);
  const members = projection.members.map(
    (member) => ({
      packageName: projection.packageName,
      relPath: `programs/${arch}/${member.mirrorPath}`,
      sourceArtifact: member.sourceArtifact,
      cacheKey,
      forkInstrumentation: member.kind === "output" ? member.forkInstrumentation ?? null : null,
      projectionIdentity
    })
  );
  if (!members.some((member) => member.relPath === adjusted)) {
    throw manifestError(
      projection.policyPath,
      `resolver path ${JSON.stringify(adjusted)} is not a declared member of package ${JSON.stringify(projection.packageName)}`
    );
  }
  return {
    manifestPath: projection.policyPath,
    packageName: projection.packageName,
    members
  };
}
function discoverProgramPackageClosure(relPath) {
  const adjusted = applyDefaultArch(relPath);
  const components = adjusted.split("/");
  if (components[0] === "programs" && !hasSourceCheckout() && bundledProgramPackageProjection() === null) {
    throw new Error(
      `Installed host package is missing wasm/${PROGRAM_PACKAGE_INDEX_FILE}; program artifacts cannot be resolved without packaged policy`
    );
  }
  if (components.length === 3) {
    const projection2 = selectedFlatProgramPackage(adjusted);
    if (projection2) {
      return closureForProjection(projection2, components[1], adjusted);
    }
    rejectUnselectedBundledProgramClaim(adjusted);
    return null;
  }
  if (components.length < 4 || components[0] !== "programs" || !ARCH_SEGMENTS.has(components[1])) return null;
  const arch = components[1];
  const packageDirectory = components[2];
  const projection = selectedProgramPackage(packageDirectory);
  if (!projection) {
    rejectUnselectedBundledProgramClaim(adjusted);
    return null;
  }
  return closureForProjection(projection, arch, adjusted);
}
function stripProgramArch(relPath) {
  const adjusted = applyDefaultArch(relPath);
  for (const prefix of ["programs/wasm32/", "programs/wasm64/"]) {
    if (adjusted.startsWith(prefix)) return adjusted.slice(prefix.length);
  }
  return null;
}
function disablesForkInstrumentation(relPath) {
  const adjusted = applyDefaultArch(relPath);
  for (const arch of ARCH_SEGMENTS) {
    const prefix = `programs/${arch}/`;
    if (adjusted.startsWith(prefix)) {
      const packageName = programRegistryIndex().forkInstrumentationDisabledOutputs.get(
        `${arch}/${adjusted.slice(prefix.length)}`
      );
      if (!packageName) return false;
      return selectedProgramPackage(packageName) !== null;
    }
  }
  return false;
}
function requiredExportsForRelPath(relPath) {
  const adjusted = applyDefaultArch(relPath);
  if (adjusted === "kernel.wasm") {
    return HOST_ADAPTER_REQUIRED_KERNEL_EXPORTS;
  }
  const programRel = stripProgramArch(adjusted);
  if (programRel && programRel.endsWith(".wasm")) {
    return EXECUTABLE_PROGRAM_REQUIRED_EXPORTS;
  }
  return void 0;
}
var LEGACY_KERNEL_EXEC_EXPORTS = Object.freeze([
  "kernel_exec_prepare",
  "kernel_exec_setup",
  "kernel_exec_setup_for_thread",
  "kernel_execve",
  "kernel_execveat"
]);
function forbiddenExportsForRelPath(relPath) {
  return applyDefaultArch(relPath) === "kernel.wasm" ? LEGACY_KERNEL_EXEC_EXPORTS : void 0;
}
function hasWasmArtifactPolicyFailures(path, relPath, capturedForkInstrumentation) {
  if (!relPath.endsWith(".wasm")) return false;
  try {
    return hasWasmArtifactPolicyFailuresForBytes(
      readFileSync(path),
      relPath,
      capturedForkInstrumentation
    );
  } catch {
    return true;
  }
}
function hasWasmArtifactPolicyFailuresForBytes(bytes, relPath, capturedForkInstrumentation) {
  if (!relPath.endsWith(".wasm")) return false;
  try {
    const programBytes = new ArrayBuffer(bytes.byteLength);
    new Uint8Array(programBytes).set(bytes);
    const forkDisabled = capturedForkInstrumentation === void 0 ? disablesForkInstrumentation(relPath) : capturedForkInstrumentation === "disabled";
    return describeWasmArtifactPolicyFailures(programBytes, {
      expectedAbi: ABI_VERSION,
      requiredExports: requiredExportsForRelPath(relPath),
      forbiddenExports: forbiddenExportsForRelPath(relPath),
      requireForkInstrumentation: forkDisabled ? false : void 0,
      forbidForkInstrumentation: forkDisabled
    }).length > 0;
  } catch {
    return true;
  }
}
function hasBinaryArtifactPolicyFailures(path, relPath, capturedForkInstrumentation) {
  return hasWasmArtifactPolicyFailures(
    path,
    relPath,
    capturedForkInstrumentation
  );
}
function hasBinaryArtifactPolicyFailuresForBytes(bytes, relPath, capturedForkInstrumentation) {
  return hasWasmArtifactPolicyFailuresForBytes(
    bytes,
    relPath,
    capturedForkInstrumentation
  );
}
function chooseBinaryCandidate(candidates, relPath, capturedForkInstrumentation) {
  const existing = candidates.filter(pathEntryExists);
  if (existing.length === 0) return null;
  return existing.find((candidate) => {
    try {
      return statSync(candidate).isFile() && !hasBinaryArtifactPolicyFailures(
        candidate,
        relPath,
        capturedForkInstrumentation
      );
    } catch {
      return false;
    }
  }) ?? null;
}
function pinScalarCandidate(candidate, relPath, capturedForkInstrumentation) {
  try {
    const metadata = lstatSync(candidate);
    if (!metadata.isSymbolicLink()) return candidate;
    const pinned = realpathSync(candidate);
    if (!statSync(pinned).isFile() || hasBinaryArtifactPolicyFailures(
      pinned,
      relPath,
      capturedForkInstrumentation
    )) {
      throw new Error("canonical target is not an accepted regular file");
    }
    if (applyDefaultArch(relPath).startsWith("programs/") && isResolverOwnedProgramGenerationTarget(pinned)) {
      throw new Error(
        "resolver-owned program generation has no matching selected package projection"
      );
    }
    return pinned;
  } catch (error) {
    throw new Error(
      `Binary changed or became invalid while pinning ${relPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
function isResolverOwnedProgramGenerationTarget(path) {
  const roots = [binaryProgramCacheRoot()];
  try {
    roots.push(
      join(
        resolverRepoRoot(),
        "local-binaries",
        ".kandelo-local-generations"
      )
    );
  } catch {
  }
  return roots.some((root) => {
    try {
      return pathEntryExists(root) && pathIsWithin(realpathSync(root), path);
    } catch {
      return false;
    }
  });
}
function pathIsWithin(root, path) {
  const pathFromRoot = relative(root, path);
  return pathFromRoot === "" || pathFromRoot !== ".." && !pathFromRoot.startsWith(`..${sep}`) && !isAbsolute(pathFromRoot);
}
function canonicalRootForArtifact(resolvedTarget, sourceArtifact) {
  const parts = sourceArtifact.split("/");
  let root = resolvedTarget;
  for (let index = 0; index < parts.length; index++) root = dirname(root);
  return resolve(root, ...parts) === resolvedTarget ? root : null;
}
function mutableGenerationIdentityFailure(tier, sharedRoot, members) {
  const [programs, arch] = members[0].relPath.split("/");
  const packageName = members[0].packageName;
  if (programs !== "programs" || !ARCH_SEGMENTS.has(arch) || !packageName || members.some((member) => member.packageName !== packageName)) return "declared package members do not share a valid program namespace";
  if (!statSync(sharedRoot).isDirectory()) {
    return "shared package generation root is not a directory";
  }
  const cacheKey = members[0].cacheKey;
  if (!/^[a-f0-9]{64}$/.test(cacheKey) || members.some((member) => member.cacheKey !== cacheKey)) {
    return "declared package members do not share one valid cache identity";
  }
  if (tier.identity === "local-generation") {
    const expectedParentPath = join(
      tier.root,
      ".kandelo-local-generations",
      arch,
      packageName,
      cacheKey
    );
    if (!pathEntryExists(expectedParentPath)) {
      return "local mirror targets are not one direct immutable local generation";
    }
    const expectedParent = realpathSync(expectedParentPath);
    return dirname(sharedRoot) === expectedParent ? null : "local mirror targets are not one direct immutable local generation";
  }
  if (tier.identity === "program-cache") {
    const expectedParentPath = binaryProgramCacheRoot();
    if (!pathEntryExists(expectedParentPath)) {
      return "fetched mirror targets are not one canonical program-cache generation";
    }
    const expectedParent = realpathSync(expectedParentPath);
    const generationName = basename(sharedRoot);
    const hasCanonicalName = generationName.startsWith(`${packageName}-`) && new RegExp(`-rev[0-9]+-${arch}-abi[0-9]+-${cacheKey}$`).test(generationName);
    return dirname(sharedRoot) === expectedParent && hasCanonicalName ? null : "fetched mirror targets are not one canonical program-cache generation";
  }
  return "installed-package symlink closures are not an immutable installed identity";
}
function pinSourceOnlyGenerationClosure(tier, selected, members) {
  let loaded;
  try {
    loaded = readSourceOnlyProjectionAt(tier.root);
  } catch (error) {
    return {
      failure: `source-only projection is unusable: ${error instanceof Error ? error.message : String(error)}`
    };
  }
  const owner = loaded.ownerByMirrorPath.get(members[0].relPath);
  if (!owner) {
    return {
      failure: `source-only projection does not own ${members[0].relPath}`
    };
  }
  for (const member of members) {
    if (loaded.ownerByMirrorPath.get(member.relPath) !== owner) {
      return {
        failure: "declared members are not one source-only package projection node"
      };
    }
  }
  if (owner.packageName !== members[0].packageName) {
    return {
      failure: `source-only projection attributes ${members[0].relPath} to ${JSON.stringify(owner.packageName)}, not ${JSON.stringify(members[0].packageName)}`
    };
  }
  let validated;
  try {
    validated = validateSourceOnlyNode(loaded, owner);
  } catch (error) {
    return {
      failure: `source-only package member is invalid: ${error instanceof Error ? error.message : String(error)}`
    };
  }
  const pinnedPaths = [];
  for (let index = 0; index < members.length; index++) {
    const resolved = validated.get(members[index].relPath);
    if (resolved === void 0) {
      return {
        failure: `source-only package closure omitted ${members[index].relPath}`
      };
    }
    if (realpathSync(resolved) !== realpathSync(selected[index])) {
      return {
        failure: `source-only projection validated a different file for ${members[index].relPath}`
      };
    }
    pinnedPaths.push(resolved);
  }
  return { paths: pinnedPaths };
}
function pinPackageClosureIdentity(tier, selected, members) {
  if (selected.length !== members.length) {
    return { failure: "internal member/path count mismatch" };
  }
  try {
    const linkKinds = selected.map((candidate) => {
      const metadata = lstatSync(candidate);
      if (metadata.isSymbolicLink()) return "symlink";
      if (metadata.isFile()) return "file";
      return "other";
    });
    if (linkKinds.includes("other")) {
      return {
        failure: "a selected mirror member is neither a regular file nor a symlink"
      };
    }
    const allSymlinks = linkKinds.every((kind) => kind === "symlink");
    const allFiles = linkKinds.every((kind) => kind === "file");
    if (!allSymlinks && !allFiles) {
      return {
        failure: "regular files and symlinks cannot share one package identity"
      };
    }
    if (allFiles) {
      if (!tier.allowRegularFileClosure) {
        return {
          failure: "a mutable source-checkout wasm tree is not an installed package identity"
        };
      }
      if (tier.identity === "source-only-generation") {
        return pinSourceOnlyGenerationClosure(tier, selected, members);
      }
      const packageName = members[0].packageName;
      const projectionIdentity = members[0].projectionIdentity;
      if (members.some(
        (member) => member.packageName !== packageName || member.projectionIdentity !== projectionIdentity
      )) {
        return {
          failure: "declared members do not share one selected package projection"
        };
      }
      const bundled = bundledProgramPackageProjection();
      const bundledProjection = bundled?.packages.get(packageName);
      if (!bundledProjection || programPackageProjectionIdentity(bundledProjection) !== projectionIdentity) {
        return {
          failure: "installed bytes do not match the selected package projection"
        };
      }
      const installedRoot = realpathSync(tier.root);
      const pinnedPaths2 = [];
      for (const candidate of selected) {
        const resolvedCandidate = realpathSync(candidate);
        if (!pathIsWithin(installedRoot, resolvedCandidate) || !statSync(resolvedCandidate).isFile()) {
          return {
            failure: "an installed-package member escapes its immutable wasm tree"
          };
        }
        pinnedPaths2.push(resolvedCandidate);
      }
      return { paths: pinnedPaths2 };
    }
    let sharedRoot = null;
    const pinnedPaths = [];
    for (let index = 0; index < selected.length; index++) {
      const resolvedTarget = realpathSync(selected[index]);
      if (!statSync(resolvedTarget).isFile()) {
        return {
          failure: `${members[index].relPath} does not resolve to a regular file`
        };
      }
      const canonicalRoot = canonicalRootForArtifact(
        resolvedTarget,
        members[index].sourceArtifact
      );
      if (!canonicalRoot) {
        return {
          failure: `${members[index].relPath} does not target its declared source artifact ${members[index].sourceArtifact}`
        };
      }
      if (sharedRoot === null) {
        sharedRoot = canonicalRoot;
      } else if (canonicalRoot !== sharedRoot) {
        return {
          failure: "member symlinks target different canonical package generations"
        };
      }
      pinnedPaths.push(resolvedTarget);
    }
    const generationFailure = mutableGenerationIdentityFailure(
      tier,
      sharedRoot,
      members
    );
    if (generationFailure) return { failure: generationFailure };
    return { paths: pinnedPaths };
  } catch (error) {
    return {
      failure: `cannot inspect package identity: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
function resolveBinary(relPath) {
  if (sourceOnlyPolicyEnabled()) return resolveSourceOnlyBinary(relPath);
  return withFreshProgramIndexes(
    [relPath],
    () => resolveBinaryInFreshProgramContext(relPath)
  );
}
function resolveBinaryInFreshProgramContext(relPath) {
  const adjusted = applyDefaultArch(relPath);
  const packageClosure = discoverProgramPackageClosure(adjusted);
  if (packageClosure) {
    const selected = tryResolveBinarySetFromTiers(
      packageClosure.members.map((member) => member.relPath),
      packageClosure.members
    );
    if (selected) {
      return selected[packageClosure.members.findIndex((member) => member.relPath === adjusted)];
    }
    throw new BinaryNotFoundError(
      `Package artifacts not found for ${packageClosure.packageName}: ${adjusted}`
    );
  }
  const checked = [];
  const candidates = [];
  for (const tier of binaryCandidateTiers()) {
    for (const candidate2 of tier.candidatesFor(relPath)) {
      checked.push(candidate2);
      candidates.push(candidate2);
    }
  }
  const candidate = chooseBinaryCandidate(candidates, relPath);
  if (candidate) return pinScalarCandidate(candidate, relPath);
  if (candidates.some(pathEntryExists)) {
    throw new Error(
      `Binary exists but was rejected by artifact policy: ${relPath}
` + checked.map((p) => `  checked: ${p}`).join("\n")
    );
  }
  throw new BinaryNotFoundError(
    `Binary not found: ${relPath}
` + checked.map((p) => `  checked: ${p}`).join("\n") + `
  Run scripts/fetch-binaries.sh, place a file at local-binaries/${adjusted}, or install a package that includes wasm/${relPath}.`
  );
}
var LAZY_BINARIES_URL_PREFIX = "binaries/";
function decodedLazyAssetRelPath(url) {
  const relative2 = url.replace(/^\/+/, "");
  if (!relative2.startsWith(LAZY_BINARIES_URL_PREFIX)) return null;
  let decoded;
  try {
    decoded = relative2.slice(LAZY_BINARIES_URL_PREFIX.length).split("/").map(decodeURIComponent).join("/");
  } catch {
    return null;
  }
  return isPortableResolverPath(decoded) ? decoded : null;
}
function literalLazyAssetPath(url) {
  const relative2 = url.replace(/^\/+/, "");
  if (relative2.includes("\0") || relative2.split(/[/\\]/).some((part) => part === "..")) {
    throw new Error(
      `Lazy asset URL must name a path inside the repository root: ${JSON.stringify(url)}`
    );
  }
  return join(resolverRepoRoot(), relative2);
}
function resolveLazyAssetPath(url) {
  const relPath = decodedLazyAssetRelPath(url);
  if (relPath === null) return literalLazyAssetPath(url);
  try {
    return resolveBinary(relPath);
  } catch (error) {
    if (error instanceof BinaryNotFoundError) return literalLazyAssetPath(url);
    throw new Error(
      `Lazy asset ${JSON.stringify(url)} failed to resolve: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
function resolveLazyAssetPaths(urls2) {
  const relPaths = urls2.flatMap((url) => decodedLazyAssetRelPath(url) ?? []);
  const resolutions = /* @__PURE__ */ new Map();
  withFreshProgramIndexes(relPaths, () => {
    for (const url of urls2) {
      if (resolutions.has(url)) continue;
      try {
        resolutions.set(url, { path: resolveLazyAssetPath(url) });
      } catch (error) {
        resolutions.set(url, {
          error: error instanceof Error ? error : new Error(String(error))
        });
      }
    }
  });
  return resolutions;
}
function tryResolveBinarySetFromTiers(relPaths, closureMembers) {
  if (relPaths.length === 0) return [];
  let anyExisting = false;
  const incomplete = [];
  for (const tier of binaryCandidateTiers()) {
    const selected = [];
    const unavailable = [];
    if (closureMembers) {
      const [programs, arch, packageName] = closureMembers[0].relPath.split("/");
      if (programs === "programs" && arch && packageName) {
        anyExisting ||= pathEntryExists(join(tier.root, programs, arch, packageName));
      }
    }
    for (const [index, relPath] of relPaths.entries()) {
      const candidates = tier.candidatesFor(relPath);
      const existing = candidates.filter(pathEntryExists);
      anyExisting ||= existing.length > 0;
      const candidate = chooseBinaryCandidate(
        candidates,
        relPath,
        closureMembers?.[index]?.forkInstrumentation
      );
      if (candidate) {
        selected.push(candidate);
      } else if (existing.length > 0) {
        unavailable.push(`${relPath} (rejected by artifact policy)`);
      } else {
        unavailable.push(`${relPath} (missing)`);
      }
    }
    if (unavailable.length === 0 && closureMembers) {
      const identity = pinPackageClosureIdentity(
        tier,
        selected,
        closureMembers
      );
      if ("failure" in identity) {
        unavailable.push(`shared package identity rejected: ${identity.failure}`);
      } else {
        const rejectedPinnedMembers = identity.paths.flatMap(
          (path, index) => hasBinaryArtifactPolicyFailures(
            path,
            relPaths[index],
            closureMembers[index].forkInstrumentation
          ) ? [relPaths[index]] : []
        );
        if (rejectedPinnedMembers.length > 0) {
          unavailable.push(
            `pinned package generation rejected by artifact policy: ${rejectedPinnedMembers.join(", ")}`
          );
        } else {
          return identity.paths;
        }
      }
    }
    if (unavailable.length === 0) {
      return selected.map(
        (path, index) => pinScalarCandidate(
          path,
          relPaths[index],
          closureMembers?.[index]?.forkInstrumentation
        )
      );
    }
    incomplete.push(
      `  ${tier.label} (${tier.root}): ${unavailable.join(", ")}`
    );
  }
  if (!anyExisting) return null;
  throw new Error(
    "Package artifact closure is incomplete: no single provenance tier contains every accepted artifact, and tiers will not be mixed.\n" + incomplete.join("\n")
  );
}

// src/node-lazy-asset-resolver-entry.ts
var { repoRoot, urls } = workerData;
process.env.WASM_POSIX_BINARY_RESOLVER_REPO_ROOT = repoRoot;
parentPort.postMessage(resolveLazyAssetPaths(urls));
parentPort.close();
