/* eslint-disable no-var */
let wasm;

const heap = Array.from({ length: 32 }).fill(0);

heap.push(undefined, undefined, true, false);

function getObject(index) {
    return heap[index];
}

let heap_next = heap.length;

function dropObject(index) {
    if (index < 36) return;

    heap[index] = heap_next;
    heap_next = index;
}

function takeObject(index) {
    const returnValue = getObject(index);

    dropObject(index);

    return returnValue;
}

const cachedTextDecoder = new TextDecoder('utf8', {
    ignoreBOM: true,
    fatal: true,
});

cachedTextDecoder.decode();

let cachegetUint8Memory0;

function getUint8Memory0() {
    if (
        cachegetUint8Memory0 === null ||
        cachegetUint8Memory0.buffer !== wasm.memory.buffer
    ) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }

    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, length) {
    return cachedTextDecoder.decode(
        getUint8Memory0().subarray(ptr, ptr + length)
    );
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder();

const encodeString =
    typeof cachedTextEncoder.encodeInto === 'function'
        ? function (argument, view) {
              return cachedTextEncoder.encodeInto(argument, view);
          }
        : function (argument, view) {
              const buf = cachedTextEncoder.encode(argument);

              view.set(buf);

              return {
                  read: argument.length,
                  written: buf.length,
              };
          };

function passStringToWasm0(argument, malloc, realloc) {
    if (typeof argument !== 'string')
        throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(argument);
        const ptr = malloc(buf.length);

        getUint8Memory0()
            .subarray(ptr, ptr + buf.length)
            .set(buf);
        WASM_VECTOR_LEN = buf.length;

        return ptr;
    }

    let { length } = argument;
    let ptr = malloc(length);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < length; offset++) {
        const code = argument.codePointAt(offset);

        // eslint-disable-next-line prettier/prettier
        if (code > 0x7F) break;

        mem[ptr + offset] = code;
    }

    if (offset !== length) {
        if (offset !== 0) {
            argument = argument.slice(offset);
        }

        const { length: argumentLength } = argument;

        ptr = realloc(ptr, length, (length = offset + argumentLength * 3));
        const view = getUint8Memory0().subarray(ptr + offset, ptr + length);
        const returnValue = encodeString(argument, view);

        if (returnValue.read !== argumentLength)
            throw new Error('failed to pass whole string');

        offset += returnValue.written;
    }

    WASM_VECTOR_LEN = offset;

    return ptr;
}

function passArray8ToWasm0(argument, malloc) {
    const ptr = malloc(argument.length * 1);

    getUint8Memory0().set(argument, ptr / 1);
    WASM_VECTOR_LEN = argument.length;

    return ptr;
}

let cachegetInt32Memory0;

function getInt32Memory0() {
    if (
        cachegetInt32Memory0 === null ||
        cachegetInt32Memory0.buffer !== wasm.memory.buffer
    ) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }

    return cachegetInt32Memory0;
}
/**
 * @param {string} name
 * @param {Uint8Array} data
 * @returns {string}
 */
export function wasm_register_index(name, data) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;

        wasm.__wbindgen_export_0.value = retptr;
        const ptr0 = passStringToWasm0(
            name,
            wasm.__wbindgen_malloc,
            wasm.__wbindgen_realloc
        );
        const length0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const length1 = WASM_VECTOR_LEN;

        wasm.wasm_register_index(retptr, ptr0, length0, ptr1, length1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];

        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_export_0.value += 16;
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
 * @param {string} name
 * @param {string} query
 * @returns {string}
 */
export function wasm_search(name, query) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;

        wasm.__wbindgen_export_0.value = retptr;
        const ptr0 = passStringToWasm0(
            name,
            wasm.__wbindgen_malloc,
            wasm.__wbindgen_realloc
        );
        const length0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(
            query,
            wasm.__wbindgen_malloc,
            wasm.__wbindgen_realloc
        );
        const length1 = WASM_VECTOR_LEN;

        wasm.wasm_search(retptr, ptr0, length0, ptr1, length1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];

        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_export_0.value += 16;
        wasm.__wbindgen_free(r0, r1);
    }
}

function logError(f) {
    return function () {
        try {
            return Reflect.apply(f, this, arguments);
        } catch (error_) {
            const error = (function () {
                try {
                    return error_ instanceof Error
                        ? `${error_.message}\n\nStack:\n${error_.stack}`
                        : error_.toString();
                } catch {
                    return '<failed to stringify thrown value>';
                }
            })();

            console.error(
                'wasm-bindgen: imported JS function that was not marked as `catch` threw an error:',
                error
            );
            throw error_;
        }
    };
}

function addHeapObject(object) {
    if (heap_next === heap.length) heap.push(heap.length + 1);

    const index = heap_next;

    heap_next = heap[index] as number;

    if (typeof heap_next !== 'number') throw new Error('corrupt heap');

    heap[index] = object;

    return index;
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (error) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn(
                        '`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
                        error
                    );
                } else {
                    throw error;
                }
            }
        }

        const bytes = await module.arrayBuffer();

        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        return instance instanceof WebAssembly.Instance
            ? { instance, module }
            : instance;
    }
}

export async function init(input) {
    // eslint-disable-next-line sonarjs/prefer-object-literal
    const imports = { wbg: {} as Record<string, unknown> };

    imports.wbg.__wbg_error_4bb6c2a97407129a = logError(
        (argument0, argument1) => {
            try {
                console.error(getStringFromWasm0(argument0, argument1));
            } finally {
                wasm.__wbindgen_free(argument0, argument1);
            }
        }
    );
    imports.wbg.__wbg_new_59cb74e423758ede = logError(() => {
        // eslint-disable-next-line unicorn/error-message
        const returnValue = new Error();

        return addHeapObject(returnValue);
    });
    imports.wbg.__wbg_stack_558ba5917b466edd = logError(
        (argument0, argument1) => {
            const returnValue = (getObject(argument1) as { stack: unknown })[
                'stack'
            ];

            const ptr0 = passStringToWasm0(
                returnValue,
                wasm.__wbindgen_malloc,
                wasm.__wbindgen_realloc
            );
            const length0 = WASM_VECTOR_LEN;

            getInt32Memory0()[argument0 / 4 + 1] = length0;
            getInt32Memory0()[argument0 / 4 + 0] = ptr0;
        }
    );
    imports.wbg.__wbindgen_object_drop_ref = function (argument0) {
        takeObject(argument0);
    };
    imports.wbg.__wbindgen_throw = function (argument0, argument1) {
        throw new Error(getStringFromWasm0(argument0, argument1));
    };

    const { instance, module } = await load(await fetch(input), imports);

    wasm = instance.exports;
    (init as unknown as Record<string, unknown>).__wbindgen_wasm_module =
        module;

    return wasm;
}
