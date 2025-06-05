var Godot = (() => {
  var _scriptName =
    "undefined" != typeof document ? document.currentScript?.src : void 0;
  return function (moduleArg = {}) {
    var moduleRtn,
      Module = moduleArg,
      readyPromiseResolve,
      readyPromiseReject,
      readyPromise = new Promise((e, t) => {
        (readyPromiseResolve = e), (readyPromiseReject = t);
      });
    [
      "_memory",
      "__Z14godot_web_mainiPPc",
      "__emwebxr_on_input_event",
      "__emwebxr_on_simple_event",
      "___indirect_function_table",
      "_main",
      "onRuntimeInitialized",
    ].forEach((e) => {
      Object.getOwnPropertyDescriptor(readyPromise, e) ||
        Object.defineProperty(readyPromise, e, {
          get: () =>
            abort(
              "You are getting " +
                e +
                " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
            ),
          set: () =>
            abort(
              "You are setting " +
                e +
                " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
            ),
        });
    });
    var ENVIRONMENT_IS_WEB = "object" == typeof window,
      ENVIRONMENT_IS_WORKER = "function" == typeof importScripts,
      ENVIRONMENT_IS_NODE =
        "object" == typeof process &&
        "object" == typeof process.versions &&
        "string" == typeof process.versions.node,
      ENVIRONMENT_IS_SHELL =
        !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module.ENVIRONMENT)
      throw new Error(
        "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"
      );
    var moduleOverrides = Object.assign({}, Module),
      arguments_ = [],
      thisProgram = "./this.program",
      quit_ = (e, t) => {
        throw t;
      },
      scriptDirectory = "",
      readAsync,
      readBinary;
    function locateFile(e) {
      return Module.locateFile
        ? Module.locateFile(e, scriptDirectory)
        : scriptDirectory + e;
    }
    if (ENVIRONMENT_IS_SHELL) {
      if (
        ("object" == typeof process && "function" == typeof require) ||
        "object" == typeof window ||
        "function" == typeof importScripts
      )
        throw new Error(
          "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
        );
    } else {
      if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER)
        throw new Error("environment detection error");
      if (
        (ENVIRONMENT_IS_WORKER
          ? (scriptDirectory = self.location.href)
          : "undefined" != typeof document &&
            document.currentScript &&
            (scriptDirectory = document.currentScript.src),
        _scriptName && (scriptDirectory = _scriptName),
        (scriptDirectory = scriptDirectory.startsWith("blob:")
          ? ""
          : scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
            )),
        "object" != typeof window && "function" != typeof importScripts)
      )
        throw new Error(
          "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
        );
      ENVIRONMENT_IS_WORKER &&
        (readBinary = (e) => {
          var t = new XMLHttpRequest();
          return (
            t.open("GET", e, !1),
            (t.responseType = "arraybuffer"),
            t.send(null),
            new Uint8Array(t.response)
          );
        }),
        (readAsync = (e) => (
          assert(!isFileURI(e), "readAsync does not work with file:// URLs"),
          fetch(e, { credentials: "same-origin" }).then((e) =>
            e.ok
              ? e.arrayBuffer()
              : Promise.reject(new Error(e.status + " : " + e.url))
          )
        ));
    }
    var out = Module.print || console.log.bind(console),
      err = Module.printErr || console.error.bind(console),
      wasmBinary,
      wasmMemory;
    Object.assign(Module, moduleOverrides),
      (moduleOverrides = null),
      checkIncomingModuleAPI(),
      Module.arguments && (arguments_ = Module.arguments),
      legacyModuleProp("arguments", "arguments_"),
      Module.thisProgram && (thisProgram = Module.thisProgram),
      legacyModuleProp("thisProgram", "thisProgram"),
      Module.quit && (quit_ = Module.quit),
      legacyModuleProp("quit", "quit_"),
      assert(
        void 0 === Module.memoryInitializerPrefixURL,
        "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"
      ),
      assert(
        void 0 === Module.pthreadMainPrefixURL,
        "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"
      ),
      assert(
        void 0 === Module.cdInitializerPrefixURL,
        "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"
      ),
      assert(
        void 0 === Module.filePackagePrefixURL,
        "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"
      ),
      assert(void 0 === Module.read, "Module.read option was removed"),
      assert(
        void 0 === Module.readAsync,
        "Module.readAsync option was removed (modify readAsync in JS)"
      ),
      assert(
        void 0 === Module.readBinary,
        "Module.readBinary option was removed (modify readBinary in JS)"
      ),
      assert(
        void 0 === Module.setWindowTitle,
        "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"
      ),
      assert(
        void 0 === Module.TOTAL_MEMORY,
        "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"
      ),
      legacyModuleProp("asm", "wasmExports"),
      legacyModuleProp("readAsync", "readAsync"),
      legacyModuleProp("readBinary", "readBinary"),
      legacyModuleProp("setWindowTitle", "setWindowTitle"),
      assert(
        !ENVIRONMENT_IS_NODE,
        "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable."
      ),
      assert(
        !ENVIRONMENT_IS_SHELL,
        "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."
      ),
      Module.wasmBinary && (wasmBinary = Module.wasmBinary),
      legacyModuleProp("wasmBinary", "wasmBinary"),
      "object" != typeof WebAssembly && err("no native wasm support detected");
    var ABORT = !1,
      EXITSTATUS,
      HEAP8,
      HEAPU8,
      HEAP16,
      HEAPU16,
      HEAP32,
      HEAPU32,
      HEAPF32,
      HEAP64,
      HEAPU64,
      HEAPF64;
    function assert(e, t) {
      e || abort("Assertion failed" + (t ? ": " + t : ""));
    }
    function updateMemoryViews() {
      var e = wasmMemory.buffer;
      (Module.HEAP8 = HEAP8 = new Int8Array(e)),
        (Module.HEAP16 = HEAP16 = new Int16Array(e)),
        (Module.HEAPU8 = HEAPU8 = new Uint8Array(e)),
        (Module.HEAPU16 = HEAPU16 = new Uint16Array(e)),
        (Module.HEAP32 = HEAP32 = new Int32Array(e)),
        (Module.HEAPU32 = HEAPU32 = new Uint32Array(e)),
        (Module.HEAPF32 = HEAPF32 = new Float32Array(e)),
        (Module.HEAPF64 = HEAPF64 = new Float64Array(e)),
        (Module.HEAP64 = HEAP64 = new BigInt64Array(e)),
        (Module.HEAPU64 = HEAPU64 = new BigUint64Array(e));
    }
    function writeStackCookie() {
      var e = _emscripten_stack_get_end();
      assert(!(3 & e)),
        0 == e && (e += 4),
        (HEAPU32[e >> 2] = 34821223),
        (HEAPU32[(e + 4) >> 2] = 2310721022),
        (HEAPU32[0] = 1668509029);
    }
    function checkStackCookie() {
      if (!ABORT) {
        var e = _emscripten_stack_get_end();
        0 == e && (e += 4);
        var t = HEAPU32[e >> 2],
          o = HEAPU32[(e + 4) >> 2];
        (34821223 == t && 2310721022 == o) ||
          abort(
            `Stack overflow! Stack cookie has been overwritten at ${ptrToString(
              e
            )}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(
              o
            )} ${ptrToString(t)}`
          ),
          1668509029 != HEAPU32[0] &&
            abort(
              "Runtime error: The application has corrupted its heap memory area (address zero)!"
            );
      }
    }
    assert(
      !Module.STACK_SIZE,
      "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"
    ),
      assert(
        "undefined" != typeof Int32Array &&
          "undefined" != typeof Float64Array &&
          null != Int32Array.prototype.subarray &&
          null != Int32Array.prototype.set,
        "JS engine does not provide full typed array support"
      ),
      assert(
        !Module.wasmMemory,
        "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"
      ),
      assert(
        !Module.INITIAL_MEMORY,
        "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"
      ),
      (function () {
        var e = new Int16Array(1),
          t = new Int8Array(e.buffer);
        if (((e[0] = 25459), 115 !== t[0] || 99 !== t[1]))
          throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
      })();
    var __ATPRERUN__ = [],
      __ATINIT__ = [],
      __ATMAIN__ = [],
      __ATEXIT__ = [],
      __ATPOSTRUN__ = [],
      runtimeInitialized = !1,
      runtimeExited = !1;
    function preRun() {
      if (Module.preRun)
        for (
          "function" == typeof Module.preRun &&
          (Module.preRun = [Module.preRun]);
          Module.preRun.length;

        )
          addOnPreRun(Module.preRun.shift());
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      assert(!runtimeInitialized),
        (runtimeInitialized = !0),
        checkStackCookie(),
        Module.noFSInit || FS.init.initialized || FS.init(),
        (FS.ignorePermissions = !1),
        TTY.init(),
        callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie(), callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      assert(!runtimeExited),
        checkStackCookie(),
        ___funcs_on_exit(),
        callRuntimeCallbacks(__ATEXIT__),
        FS.quit(),
        TTY.shutdown(),
        IDBFS.quit(),
        (runtimeExited = !0);
    }
    function postRun() {
      if ((checkStackCookie(), Module.postRun))
        for (
          "function" == typeof Module.postRun &&
          (Module.postRun = [Module.postRun]);
          Module.postRun.length;

        )
          addOnPostRun(Module.postRun.shift());
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(e) {
      __ATPRERUN__.unshift(e);
    }
    function addOnInit(e) {
      __ATINIT__.unshift(e);
    }
    function addOnPostRun(e) {
      __ATPOSTRUN__.unshift(e);
    }
    assert(
      Math.imul,
      "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
    ),
      assert(
        Math.fround,
        "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
      ),
      assert(
        Math.clz32,
        "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
      ),
      assert(
        Math.trunc,
        "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
      );
    var runDependencies = 0,
      runDependencyWatcher = null,
      dependenciesFulfilled = null,
      runDependencyTracking = {};
    function getUniqueRunDependency(e) {
      for (var t = e; ; ) {
        if (!runDependencyTracking[e]) return e;
        e = t + Math.random();
      }
    }
    function addRunDependency(e) {
      runDependencies++,
        Module.monitorRunDependencies?.(runDependencies),
        e
          ? (assert(!runDependencyTracking[e]),
            (runDependencyTracking[e] = 1),
            null === runDependencyWatcher &&
              "undefined" != typeof setInterval &&
              (runDependencyWatcher = setInterval(() => {
                if (ABORT)
                  return (
                    clearInterval(runDependencyWatcher),
                    void (runDependencyWatcher = null)
                  );
                var e = !1;
                for (var t in runDependencyTracking)
                  e || ((e = !0), err("still waiting on run dependencies:")),
                    err(`dependency: ${t}`);
                e && err("(end of list)");
              }, 1e4)))
          : err("warning: run dependency added without ID");
    }
    function removeRunDependency(e) {
      if (
        (runDependencies--,
        Module.monitorRunDependencies?.(runDependencies),
        e
          ? (assert(runDependencyTracking[e]), delete runDependencyTracking[e])
          : err("warning: run dependency removed without ID"),
        0 == runDependencies &&
          (null !== runDependencyWatcher &&
            (clearInterval(runDependencyWatcher),
            (runDependencyWatcher = null)),
          dependenciesFulfilled))
      ) {
        var t = dependenciesFulfilled;
        (dependenciesFulfilled = null), t();
      }
    }
    function abort(e) {
      Module.onAbort?.(e),
        err((e = "Aborted(" + e + ")")),
        (ABORT = !0),
        (EXITSTATUS = 1);
      var t = new WebAssembly.RuntimeError(e);
      throw (readyPromiseReject(t), t);
    }
    var dataURIPrefix = "data:application/octet-stream;base64,",
      isDataURI = (e) => e.startsWith(dataURIPrefix),
      isFileURI = (e) => e.startsWith("file://"),
      wasmBinaryFile;
    function createExportWrapper(e, t) {
      return (...o) => {
        assert(
          runtimeInitialized,
          `native function \`${e}\` called before runtime initialization`
        ),
          assert(
            !runtimeExited,
            `native function \`${e}\` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)`
          );
        var r = wasmExports[e];
        return (
          assert(r, `exported native function \`${e}\` not found`),
          assert(
            o.length <= t,
            `native function \`${e}\` called with ${o.length} args but expects ${t}`
          ),
          r(...o)
        );
      };
    }
    function findWasmBinary() {
      var e = "godot.web.template_release.wasm32.nothreads.wasm";
      return isDataURI(e) ? e : locateFile(e);
    }
    function getBinarySync(e) {
      if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
      if (readBinary) return readBinary(e);
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(e) {
      return wasmBinary
        ? Promise.resolve().then(() => getBinarySync(e))
        : readAsync(e).then(
            (e) => new Uint8Array(e),
            () => getBinarySync(e)
          );
    }
    function instantiateArrayBuffer(e, t, o) {
      return getBinaryPromise(e)
        .then((e) => WebAssembly.instantiate(e, t))
        .then(o, (e) => {
          err(`failed to asynchronously prepare wasm: ${e}`),
            isFileURI(wasmBinaryFile) &&
              err(
                `warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`
              ),
            abort(e);
        });
    }
    function instantiateAsync(e, t, o, r) {
      return e ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        isDataURI(t) ||
        "function" != typeof fetch
        ? instantiateArrayBuffer(t, o, r)
        : fetch(t, { credentials: "same-origin" }).then((e) =>
            WebAssembly.instantiateStreaming(e, o).then(r, function (e) {
              return (
                err(`wasm streaming compile failed: ${e}`),
                err("falling back to ArrayBuffer instantiation"),
                instantiateArrayBuffer(t, o, r)
              );
            })
          );
    }
    function getWasmImports() {
      return { env: wasmImports, wasi_snapshot_preview1: wasmImports };
    }
    function createWasm() {
      var e = getWasmImports();
      function t(e, t) {
        return (
          (wasmExports = e.exports),
          assert(
            (wasmMemory = wasmExports.memory),
            "memory not found in wasm exports"
          ),
          updateMemoryViews(),
          assert(
            (wasmTable = wasmExports.__indirect_function_table),
            "table not found in wasm exports"
          ),
          addOnInit(wasmExports.__wasm_call_ctors),
          removeRunDependency("wasm-instantiate"),
          wasmExports
        );
      }
      addRunDependency("wasm-instantiate");
      var o = Module;
      if (Module.instantiateWasm)
        try {
          return Module.instantiateWasm(e, t);
        } catch (e) {
          err(`Module.instantiateWasm callback failed with error: ${e}`),
            readyPromiseReject(e);
        }
      return (
        wasmBinaryFile || (wasmBinaryFile = findWasmBinary()),
        instantiateAsync(wasmBinary, wasmBinaryFile, e, function (e) {
          assert(
            Module === o,
            "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"
          ),
            (o = null),
            t(e.instance);
        }).catch(readyPromiseReject),
        {}
      );
    }
    function legacyModuleProp(e, t, o = !0) {
      Object.getOwnPropertyDescriptor(Module, e) ||
        Object.defineProperty(Module, e, {
          configurable: !0,
          get() {
            abort(
              `\`Module.${e}\` has been replaced by \`${t}\`` +
                (o
                  ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
                  : "")
            );
          },
        });
    }
    function ignoredModuleProp(e) {
      Object.getOwnPropertyDescriptor(Module, e) &&
        abort(
          `\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`
        );
    }
    function isExportedByForceFilesystem(e) {
      return (
        "FS_createPath" === e ||
        "FS_createDataFile" === e ||
        "FS_createPreloadedFile" === e ||
        "FS_unlink" === e ||
        "addRunDependency" === e ||
        "FS_createLazyFile" === e ||
        "FS_createDevice" === e ||
        "removeRunDependency" === e
      );
    }
    function missingGlobal(e, t) {
      "undefined" != typeof globalThis &&
        Object.defineProperty(globalThis, e, {
          configurable: !0,
          get() {
            warnOnce(`\`${e}\` is not longer defined by emscripten. ${t}`);
          },
        });
    }
    function missingLibrarySymbol(e) {
      "undefined" == typeof globalThis ||
        Object.getOwnPropertyDescriptor(globalThis, e) ||
        Object.defineProperty(globalThis, e, {
          configurable: !0,
          get() {
            var t = `\`${e}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,
              o = e;
            o.startsWith("_") || (o = "$" + e),
              (t += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${o}')`),
              isExportedByForceFilesystem(e) &&
                (t +=
                  ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
              warnOnce(t);
          },
        }),
        unexportedRuntimeSymbol(e);
    }
    function unexportedRuntimeSymbol(e) {
      Object.getOwnPropertyDescriptor(Module, e) ||
        Object.defineProperty(Module, e, {
          configurable: !0,
          get() {
            var t = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
            isExportedByForceFilesystem(e) &&
              (t +=
                ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),
              abort(t);
          },
        });
    }
    function ExitStatus(e) {
      (this.name = "ExitStatus"),
        (this.message = `Program terminated with exit(${e})`),
        (this.status = e);
    }
    missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer"),
      missingGlobal("asm", "Please use wasmExports instead");
    var callRuntimeCallbacks = (e) => {
      for (; e.length > 0; ) e.shift()(Module);
    };
    function getValue(e, t = "i8") {
      switch ((t.endsWith("*") && (t = "*"), t)) {
        case "i1":
        case "i8":
          return HEAP8[e];
        case "i16":
          return HEAP16[e >> 1];
        case "i32":
          return HEAP32[e >> 2];
        case "i64":
          return HEAP64[e >> 3];
        case "float":
          return HEAPF32[e >> 2];
        case "double":
          return HEAPF64[e >> 3];
        case "*":
          return HEAPU32[e >> 2];
        default:
          abort(`invalid type for getValue: ${t}`);
      }
    }
    var noExitRuntime = Module.noExitRuntime || !1,
      ptrToString = (e) => (
        assert("number" == typeof e),
        "0x" + (e >>>= 0).toString(16).padStart(8, "0")
      );
    function setValue(e, t, o = "i8") {
      switch ((o.endsWith("*") && (o = "*"), o)) {
        case "i1":
        case "i8":
          HEAP8[e] = t;
          break;
        case "i16":
          HEAP16[e >> 1] = t;
          break;
        case "i32":
          HEAP32[e >> 2] = t;
          break;
        case "i64":
          HEAP64[e >> 3] = BigInt(t);
          break;
        case "float":
          HEAPF32[e >> 2] = t;
          break;
        case "double":
          HEAPF64[e >> 3] = t;
          break;
        case "*":
          HEAPU32[e >> 2] = t;
          break;
        default:
          abort(`invalid type for setValue: ${o}`);
      }
    }
    var warnOnce = (e) => {
        (warnOnce.shown ||= {}),
          warnOnce.shown[e] || ((warnOnce.shown[e] = 1), err(e));
      },
      UTF8Decoder =
        "undefined" != typeof TextDecoder ? new TextDecoder() : void 0,
      UTF8ArrayToString = (e, t, o) => {
        for (var r = t + o, n = t; e[n] && !(n >= r); ) ++n;
        if (n - t > 16 && e.buffer && UTF8Decoder)
          return UTF8Decoder.decode(e.subarray(t, n));
        for (var i = ""; t < n; ) {
          var a = e[t++];
          if (128 & a) {
            var s = 63 & e[t++];
            if (192 != (224 & a)) {
              var d = 63 & e[t++];
              if (
                (224 == (240 & a)
                  ? (a = ((15 & a) << 12) | (s << 6) | d)
                  : (240 != (248 & a) &&
                      warnOnce(
                        "Invalid UTF-8 leading byte " +
                          ptrToString(a) +
                          " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"
                      ),
                    (a =
                      ((7 & a) << 18) | (s << 12) | (d << 6) | (63 & e[t++]))),
                a < 65536)
              )
                i += String.fromCharCode(a);
              else {
                var l = a - 65536;
                i += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
              }
            } else i += String.fromCharCode(((31 & a) << 6) | s);
          } else i += String.fromCharCode(a);
        }
        return i;
      },
      UTF8ToString = (e, t) => (
        assert(
          "number" == typeof e,
          `UTF8ToString expects a number (got ${typeof e})`
        ),
        e ? UTF8ArrayToString(HEAPU8, e, t) : ""
      ),
      ___assert_fail = (e, t, o, r) => {
        abort(
          `Assertion failed: ${UTF8ToString(e)}, at: ` +
            [
              t ? UTF8ToString(t) : "unknown filename",
              o,
              r ? UTF8ToString(r) : "unknown function",
            ]
        );
      },
      wasmTable,
      getWasmTableEntry = (e) => wasmTable.get(e),
      ___call_sighandler = (e, t) => getWasmTableEntry(e)(t),
      PATH = {
        isAbs: (e) => "/" === e.charAt(0),
        splitPath: (e) =>
          /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
            .exec(e)
            .slice(1),
        normalizeArray: (e, t) => {
          for (var o = 0, r = e.length - 1; r >= 0; r--) {
            var n = e[r];
            "." === n
              ? e.splice(r, 1)
              : ".." === n
              ? (e.splice(r, 1), o++)
              : o && (e.splice(r, 1), o--);
          }
          if (t) for (; o; o--) e.unshift("..");
          return e;
        },
        normalize: (e) => {
          var t = PATH.isAbs(e),
            o = "/" === e.substr(-1);
          return (
            (e = PATH.normalizeArray(
              e.split("/").filter((e) => !!e),
              !t
            ).join("/")) ||
              t ||
              (e = "."),
            e && o && (e += "/"),
            (t ? "/" : "") + e
          );
        },
        dirname: (e) => {
          var t = PATH.splitPath(e),
            o = t[0],
            r = t[1];
          return o || r ? (r && (r = r.substr(0, r.length - 1)), o + r) : ".";
        },
        basename: (e) => {
          if ("/" === e) return "/";
          var t = (e = (e = PATH.normalize(e)).replace(/\/$/, "")).lastIndexOf(
            "/"
          );
          return -1 === t ? e : e.substr(t + 1);
        },
        join: (...e) => PATH.normalize(e.join("/")),
        join2: (e, t) => PATH.normalize(e + "/" + t),
      },
      initRandomFill = () => {
        if (
          "object" == typeof crypto &&
          "function" == typeof crypto.getRandomValues
        )
          return (e) => crypto.getRandomValues(e);
        abort(
          "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"
        );
      },
      randomFill = (e) => (randomFill = initRandomFill())(e),
      PATH_FS = {
        resolve: (...e) => {
          for (var t = "", o = !1, r = e.length - 1; r >= -1 && !o; r--) {
            var n = r >= 0 ? e[r] : FS.cwd();
            if ("string" != typeof n)
              throw new TypeError("Arguments to path.resolve must be strings");
            if (!n) return "";
            (t = n + "/" + t), (o = PATH.isAbs(n));
          }
          return (
            (o ? "/" : "") +
              (t = PATH.normalizeArray(
                t.split("/").filter((e) => !!e),
                !o
              ).join("/")) || "."
          );
        },
        relative: (e, t) => {
          function o(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var o = e.length - 1; o >= 0 && "" === e[o]; o--);
            return t > o ? [] : e.slice(t, o - t + 1);
          }
          (e = PATH_FS.resolve(e).substr(1)),
            (t = PATH_FS.resolve(t).substr(1));
          for (
            var r = o(e.split("/")),
              n = o(t.split("/")),
              i = Math.min(r.length, n.length),
              a = i,
              s = 0;
            s < i;
            s++
          )
            if (r[s] !== n[s]) {
              a = s;
              break;
            }
          var d = [];
          for (s = a; s < r.length; s++) d.push("..");
          return (d = d.concat(n.slice(a))).join("/");
        },
      },
      FS_stdin_getChar_buffer = [],
      lengthBytesUTF8 = (e) => {
        for (var t = 0, o = 0; o < e.length; ++o) {
          var r = e.charCodeAt(o);
          r <= 127
            ? t++
            : r <= 2047
            ? (t += 2)
            : r >= 55296 && r <= 57343
            ? ((t += 4), ++o)
            : (t += 3);
        }
        return t;
      },
      stringToUTF8Array = (e, t, o, r) => {
        if (
          (assert(
            "string" == typeof e,
            `stringToUTF8Array expects a string (got ${typeof e})`
          ),
          !(r > 0))
        )
          return 0;
        for (var n = o, i = o + r - 1, a = 0; a < e.length; ++a) {
          var s = e.charCodeAt(a);
          if (s >= 55296 && s <= 57343)
            s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a));
          if (s <= 127) {
            if (o >= i) break;
            t[o++] = s;
          } else if (s <= 2047) {
            if (o + 1 >= i) break;
            (t[o++] = 192 | (s >> 6)), (t[o++] = 128 | (63 & s));
          } else if (s <= 65535) {
            if (o + 2 >= i) break;
            (t[o++] = 224 | (s >> 12)),
              (t[o++] = 128 | ((s >> 6) & 63)),
              (t[o++] = 128 | (63 & s));
          } else {
            if (o + 3 >= i) break;
            s > 1114111 &&
              warnOnce(
                "Invalid Unicode code point " +
                  ptrToString(s) +
                  " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."
              ),
              (t[o++] = 240 | (s >> 18)),
              (t[o++] = 128 | ((s >> 12) & 63)),
              (t[o++] = 128 | ((s >> 6) & 63)),
              (t[o++] = 128 | (63 & s));
          }
        }
        return (t[o] = 0), o - n;
      };
    function intArrayFromString(e, t, o) {
      var r = o > 0 ? o : lengthBytesUTF8(e) + 1,
        n = new Array(r),
        i = stringToUTF8Array(e, n, 0, n.length);
      return t && (n.length = i), n;
    }
    var FS_stdin_getChar = () => {
        if (!FS_stdin_getChar_buffer.length) {
          var e = null;
          if (
            ("undefined" != typeof window &&
              "function" == typeof window.prompt &&
              null !== (e = window.prompt("Input: ")) &&
              (e += "\n"),
            !e)
          )
            return null;
          FS_stdin_getChar_buffer = intArrayFromString(e, !0);
        }
        return FS_stdin_getChar_buffer.shift();
      },
      TTY = {
        ttys: [],
        init() {},
        shutdown() {},
        register(e, t) {
          (TTY.ttys[e] = { input: [], output: [], ops: t }),
            FS.registerDevice(e, TTY.stream_ops);
        },
        stream_ops: {
          open(e) {
            var t = TTY.ttys[e.node.rdev];
            if (!t) throw new FS.ErrnoError(43);
            (e.tty = t), (e.seekable = !1);
          },
          close(e) {
            e.tty.ops.fsync(e.tty);
          },
          fsync(e) {
            e.tty.ops.fsync(e.tty);
          },
          read(e, t, o, r, n) {
            if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
            for (var i = 0, a = 0; a < r; a++) {
              var s;
              try {
                s = e.tty.ops.get_char(e.tty);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (void 0 === s && 0 === i) throw new FS.ErrnoError(6);
              if (null == s) break;
              i++, (t[o + a] = s);
            }
            return i && (e.node.timestamp = Date.now()), i;
          },
          write(e, t, o, r, n) {
            if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
            try {
              for (var i = 0; i < r; i++) e.tty.ops.put_char(e.tty, t[o + i]);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            return r && (e.node.timestamp = Date.now()), i;
          },
        },
        default_tty_ops: {
          get_char: (e) => FS_stdin_getChar(),
          put_char(e, t) {
            null === t || 10 === t
              ? (out(UTF8ArrayToString(e.output, 0)), (e.output = []))
              : 0 != t && e.output.push(t);
          },
          fsync(e) {
            e.output &&
              e.output.length > 0 &&
              (out(UTF8ArrayToString(e.output, 0)), (e.output = []));
          },
          ioctl_tcgets: (e) => ({
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          }),
          ioctl_tcsets: (e, t, o) => 0,
          ioctl_tiocgwinsz: (e) => [24, 80],
        },
        default_tty1_ops: {
          put_char(e, t) {
            null === t || 10 === t
              ? (err(UTF8ArrayToString(e.output, 0)), (e.output = []))
              : 0 != t && e.output.push(t);
          },
          fsync(e) {
            e.output &&
              e.output.length > 0 &&
              (err(UTF8ArrayToString(e.output, 0)), (e.output = []));
          },
        },
      },
      mmapAlloc = (e) => {
        abort(
          "internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported"
        );
      },
      MEMFS = {
        ops_table: null,
        mount: (e) => MEMFS.createNode(null, "/", 16895, 0),
        createNode(e, t, o, r) {
          if (FS.isBlkdev(o) || FS.isFIFO(o)) throw new FS.ErrnoError(63);
          MEMFS.ops_table ||= {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink,
              },
              stream: { llseek: MEMFS.stream_ops.llseek },
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync,
              },
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink,
              },
              stream: {},
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
              },
              stream: FS.chrdev_stream_ops,
            },
          };
          var n = FS.createNode(e, t, o, r);
          return (
            FS.isDir(n.mode)
              ? ((n.node_ops = MEMFS.ops_table.dir.node),
                (n.stream_ops = MEMFS.ops_table.dir.stream),
                (n.contents = {}))
              : FS.isFile(n.mode)
              ? ((n.node_ops = MEMFS.ops_table.file.node),
                (n.stream_ops = MEMFS.ops_table.file.stream),
                (n.usedBytes = 0),
                (n.contents = null))
              : FS.isLink(n.mode)
              ? ((n.node_ops = MEMFS.ops_table.link.node),
                (n.stream_ops = MEMFS.ops_table.link.stream))
              : FS.isChrdev(n.mode) &&
                ((n.node_ops = MEMFS.ops_table.chrdev.node),
                (n.stream_ops = MEMFS.ops_table.chrdev.stream)),
            (n.timestamp = Date.now()),
            e && ((e.contents[t] = n), (e.timestamp = n.timestamp)),
            n
          );
        },
        getFileDataAsTypedArray: (e) =>
          e.contents
            ? e.contents.subarray
              ? e.contents.subarray(0, e.usedBytes)
              : new Uint8Array(e.contents)
            : new Uint8Array(0),
        expandFileStorage(e, t) {
          var o = e.contents ? e.contents.length : 0;
          if (!(o >= t)) {
            (t = Math.max(t, (o * (o < 1048576 ? 2 : 1.125)) >>> 0)),
              0 != o && (t = Math.max(t, 256));
            var r = e.contents;
            (e.contents = new Uint8Array(t)),
              e.usedBytes > 0 && e.contents.set(r.subarray(0, e.usedBytes), 0);
          }
        },
        resizeFileStorage(e, t) {
          if (e.usedBytes != t)
            if (0 == t) (e.contents = null), (e.usedBytes = 0);
            else {
              var o = e.contents;
              (e.contents = new Uint8Array(t)),
                o && e.contents.set(o.subarray(0, Math.min(t, e.usedBytes))),
                (e.usedBytes = t);
            }
        },
        node_ops: {
          getattr(e) {
            var t = {};
            return (
              (t.dev = FS.isChrdev(e.mode) ? e.id : 1),
              (t.ino = e.id),
              (t.mode = e.mode),
              (t.nlink = 1),
              (t.uid = 0),
              (t.gid = 0),
              (t.rdev = e.rdev),
              FS.isDir(e.mode)
                ? (t.size = 4096)
                : FS.isFile(e.mode)
                ? (t.size = e.usedBytes)
                : FS.isLink(e.mode)
                ? (t.size = e.link.length)
                : (t.size = 0),
              (t.atime = new Date(e.timestamp)),
              (t.mtime = new Date(e.timestamp)),
              (t.ctime = new Date(e.timestamp)),
              (t.blksize = 4096),
              (t.blocks = Math.ceil(t.size / t.blksize)),
              t
            );
          },
          setattr(e, t) {
            void 0 !== t.mode && (e.mode = t.mode),
              void 0 !== t.timestamp && (e.timestamp = t.timestamp),
              void 0 !== t.size && MEMFS.resizeFileStorage(e, t.size);
          },
          lookup(e, t) {
            throw FS.genericErrors[44];
          },
          mknod: (e, t, o, r) => MEMFS.createNode(e, t, o, r),
          rename(e, t, o) {
            if (FS.isDir(e.mode)) {
              var r;
              try {
                r = FS.lookupNode(t, o);
              } catch (e) {}
              if (r) for (var n in r.contents) throw new FS.ErrnoError(55);
            }
            delete e.parent.contents[e.name],
              (e.parent.timestamp = Date.now()),
              (e.name = o),
              (t.contents[o] = e),
              (t.timestamp = e.parent.timestamp);
          },
          unlink(e, t) {
            delete e.contents[t], (e.timestamp = Date.now());
          },
          rmdir(e, t) {
            var o = FS.lookupNode(e, t);
            for (var r in o.contents) throw new FS.ErrnoError(55);
            delete e.contents[t], (e.timestamp = Date.now());
          },
          readdir(e) {
            var t = [".", ".."];
            for (var o of Object.keys(e.contents)) t.push(o);
            return t;
          },
          symlink(e, t, o) {
            var r = MEMFS.createNode(e, t, 41471, 0);
            return (r.link = o), r;
          },
          readlink(e) {
            if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
            return e.link;
          },
        },
        stream_ops: {
          read(e, t, o, r, n) {
            var i = e.node.contents;
            if (n >= e.node.usedBytes) return 0;
            var a = Math.min(e.node.usedBytes - n, r);
            if ((assert(a >= 0), a > 8 && i.subarray))
              t.set(i.subarray(n, n + a), o);
            else for (var s = 0; s < a; s++) t[o + s] = i[n + s];
            return a;
          },
          write(e, t, o, r, n, i) {
            if (
              (assert(!(t instanceof ArrayBuffer)),
              t.buffer === HEAP8.buffer && (i = !1),
              !r)
            )
              return 0;
            var a = e.node;
            if (
              ((a.timestamp = Date.now()),
              t.subarray && (!a.contents || a.contents.subarray))
            ) {
              if (i)
                return (
                  assert(
                    0 === n,
                    "canOwn must imply no weird position inside the file"
                  ),
                  (a.contents = t.subarray(o, o + r)),
                  (a.usedBytes = r),
                  r
                );
              if (0 === a.usedBytes && 0 === n)
                return (a.contents = t.slice(o, o + r)), (a.usedBytes = r), r;
              if (n + r <= a.usedBytes)
                return a.contents.set(t.subarray(o, o + r), n), r;
            }
            if (
              (MEMFS.expandFileStorage(a, n + r),
              a.contents.subarray && t.subarray)
            )
              a.contents.set(t.subarray(o, o + r), n);
            else for (var s = 0; s < r; s++) a.contents[n + s] = t[o + s];
            return (a.usedBytes = Math.max(a.usedBytes, n + r)), r;
          },
          llseek(e, t, o) {
            var r = t;
            if (
              (1 === o
                ? (r += e.position)
                : 2 === o && FS.isFile(e.node.mode) && (r += e.node.usedBytes),
              r < 0)
            )
              throw new FS.ErrnoError(28);
            return r;
          },
          allocate(e, t, o) {
            MEMFS.expandFileStorage(e.node, t + o),
              (e.node.usedBytes = Math.max(e.node.usedBytes, t + o));
          },
          mmap(e, t, o, r, n) {
            if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
            var i,
              a,
              s = e.node.contents;
            if (2 & n || s.buffer !== HEAP8.buffer) {
              if (
                ((o > 0 || o + t < s.length) &&
                  (s = s.subarray
                    ? s.subarray(o, o + t)
                    : Array.prototype.slice.call(s, o, o + t)),
                (a = !0),
                !(i = mmapAlloc(t)))
              )
                throw new FS.ErrnoError(48);
              HEAP8.set(s, i);
            } else (a = !1), (i = s.byteOffset);
            return { ptr: i, allocated: a };
          },
          msync: (e, t, o, r, n) => (
            MEMFS.stream_ops.write(e, t, 0, r, o, !1), 0
          ),
        },
      },
      asyncLoad = (e, t, o, r) => {
        var n = r ? "" : getUniqueRunDependency(`al ${e}`);
        readAsync(e).then(
          (o) => {
            assert(o, `Loading data file "${e}" failed (no arrayBuffer).`),
              t(new Uint8Array(o)),
              n && removeRunDependency(n);
          },
          (t) => {
            if (!o) throw `Loading data file "${e}" failed.`;
            o();
          }
        ),
          n && addRunDependency(n);
      },
      FS_createDataFile = (e, t, o, r, n, i) => {
        FS.createDataFile(e, t, o, r, n, i);
      },
      preloadPlugins = Module.preloadPlugins || [],
      FS_handledByPreloadPlugin = (e, t, o, r) => {
        void 0 !== Browser && Browser.init();
        var n = !1;
        return (
          preloadPlugins.forEach((i) => {
            n || (i.canHandle(t) && (i.handle(e, t, o, r), (n = !0)));
          }),
          n
        );
      },
      FS_createPreloadedFile = (e, t, o, r, n, i, a, s, d, l) => {
        var u = t ? PATH_FS.resolve(PATH.join2(e, t)) : e,
          c = getUniqueRunDependency(`cp ${u}`);
        function _(o) {
          function _(o) {
            l?.(),
              s || FS_createDataFile(e, t, o, r, n, d),
              i?.(),
              removeRunDependency(c);
          }
          FS_handledByPreloadPlugin(o, u, _, () => {
            a?.(), removeRunDependency(c);
          }) || _(o);
        }
        addRunDependency(c), "string" == typeof o ? asyncLoad(o, _, a) : _(o);
      },
      FS_modeStringToFlags = (e) => {
        var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e];
        if (void 0 === t) throw new Error(`Unknown file open mode: ${e}`);
        return t;
      },
      FS_getMode = (e, t) => {
        var o = 0;
        return e && (o |= 365), t && (o |= 146), o;
      },
      IDBFS = {
        dbs: {},
        indexedDB: () => {
          if ("undefined" != typeof indexedDB) return indexedDB;
          var e = null;
          return (
            "object" == typeof window &&
              (e =
                window.indexedDB ||
                window.mozIndexedDB ||
                window.webkitIndexedDB ||
                window.msIndexedDB),
            assert(e, "IDBFS used, but indexedDB not supported"),
            e
          );
        },
        DB_VERSION: 21,
        DB_STORE_NAME: "FILE_DATA",
        queuePersist: (e) => {
          function t() {
            "again" === e.idbPersistState ? o() : (e.idbPersistState = 0);
          }
          function o() {
            (e.idbPersistState = "idb"), IDBFS.syncfs(e, !1, t);
          }
          e.idbPersistState
            ? "idb" === e.idbPersistState && (e.idbPersistState = "again")
            : (e.idbPersistState = setTimeout(o, 0));
        },
        mount: (e) => {
          var t = MEMFS.mount(e);
          if (e?.opts?.autoPersist) {
            t.idbPersistState = 0;
            var o = t.node_ops;
            (t.node_ops = Object.assign({}, t.node_ops)),
              (t.node_ops.mknod = (e, r, n, i) => {
                var a = o.mknod(e, r, n, i);
                return (
                  (a.node_ops = t.node_ops),
                  (a.idbfs_mount = t.mount),
                  (a.memfs_stream_ops = a.stream_ops),
                  (a.stream_ops = Object.assign({}, a.stream_ops)),
                  (a.stream_ops.write = (e, t, o, r, n, i) => (
                    (e.node.isModified = !0),
                    a.memfs_stream_ops.write(e, t, o, r, n, i)
                  )),
                  (a.stream_ops.close = (e) => {
                    var t = e.node;
                    if (
                      (t.isModified &&
                        (IDBFS.queuePersist(t.idbfs_mount),
                        (t.isModified = !1)),
                      t.memfs_stream_ops.close)
                    )
                      return t.memfs_stream_ops.close(e);
                  }),
                  a
                );
              }),
              (t.node_ops.mkdir = (...e) => (
                IDBFS.queuePersist(t.mount), o.mkdir(...e)
              )),
              (t.node_ops.rmdir = (...e) => (
                IDBFS.queuePersist(t.mount), o.rmdir(...e)
              )),
              (t.node_ops.symlink = (...e) => (
                IDBFS.queuePersist(t.mount), o.symlink(...e)
              )),
              (t.node_ops.unlink = (...e) => (
                IDBFS.queuePersist(t.mount), o.unlink(...e)
              )),
              (t.node_ops.rename = (...e) => (
                IDBFS.queuePersist(t.mount), o.rename(...e)
              ));
          }
          return t;
        },
        syncfs: (e, t, o) => {
          IDBFS.getLocalSet(e, (r, n) => {
            if (r) return o(r);
            IDBFS.getRemoteSet(e, (e, r) => {
              if (e) return o(e);
              var i = t ? r : n,
                a = t ? n : r;
              IDBFS.reconcile(i, a, o);
            });
          });
        },
        quit: () => {
          Object.values(IDBFS.dbs).forEach((e) => e.close()), (IDBFS.dbs = {});
        },
        getDB: (e, t) => {
          var o,
            r = IDBFS.dbs[e];
          if (r) return t(null, r);
          try {
            o = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
          } catch (e) {
            return t(e);
          }
          if (!o) return t("Unable to connect to IndexedDB");
          (o.onupgradeneeded = (e) => {
            var t,
              o = e.target.result,
              r = e.target.transaction;
            (t = o.objectStoreNames.contains(IDBFS.DB_STORE_NAME)
              ? r.objectStore(IDBFS.DB_STORE_NAME)
              : o.createObjectStore(IDBFS.DB_STORE_NAME)).indexNames.contains(
              "timestamp"
            ) || t.createIndex("timestamp", "timestamp", { unique: !1 });
          }),
            (o.onsuccess = () => {
              (r = o.result), (IDBFS.dbs[e] = r), t(null, r);
            }),
            (o.onerror = (e) => {
              t(e.target.error), e.preventDefault();
            });
        },
        getLocalSet: (e, t) => {
          var o = {};
          function r(e) {
            return "." !== e && ".." !== e;
          }
          function n(e) {
            return (t) => PATH.join2(e, t);
          }
          for (
            var i = FS.readdir(e.mountpoint).filter(r).map(n(e.mountpoint));
            i.length;

          ) {
            var a,
              s = i.pop();
            try {
              a = FS.stat(s);
            } catch (e) {
              return t(e);
            }
            FS.isDir(a.mode) && i.push(...FS.readdir(s).filter(r).map(n(s))),
              (o[s] = { timestamp: a.mtime });
          }
          return t(null, { type: "local", entries: o });
        },
        getRemoteSet: (e, t) => {
          var o = {};
          IDBFS.getDB(e.mountpoint, (e, r) => {
            if (e) return t(e);
            try {
              var n = r.transaction([IDBFS.DB_STORE_NAME], "readonly");
              (n.onerror = (e) => {
                t(e.target.error), e.preventDefault();
              }),
                (n
                  .objectStore(IDBFS.DB_STORE_NAME)
                  .index("timestamp")
                  .openKeyCursor().onsuccess = (e) => {
                  var n = e.target.result;
                  if (!n) return t(null, { type: "remote", db: r, entries: o });
                  (o[n.primaryKey] = { timestamp: n.key }), n.continue();
                });
            } catch (e) {
              return t(e);
            }
          });
        },
        loadLocalEntry: (e, t) => {
          var o, r;
          try {
            (r = FS.lookupPath(e).node), (o = FS.stat(e));
          } catch (e) {
            return t(e);
          }
          return FS.isDir(o.mode)
            ? t(null, { timestamp: o.mtime, mode: o.mode })
            : FS.isFile(o.mode)
            ? ((r.contents = MEMFS.getFileDataAsTypedArray(r)),
              t(null, {
                timestamp: o.mtime,
                mode: o.mode,
                contents: r.contents,
              }))
            : t(new Error("node type not supported"));
        },
        storeLocalEntry: (e, t, o) => {
          try {
            if (FS.isDir(t.mode)) FS.mkdirTree(e, t.mode);
            else {
              if (!FS.isFile(t.mode))
                return o(new Error("node type not supported"));
              FS.writeFile(e, t.contents, { canOwn: !0 });
            }
            FS.chmod(e, t.mode), FS.utime(e, t.timestamp, t.timestamp);
          } catch (e) {
            return o(e);
          }
          o(null);
        },
        removeLocalEntry: (e, t) => {
          try {
            var o = FS.stat(e);
            FS.isDir(o.mode) ? FS.rmdir(e) : FS.isFile(o.mode) && FS.unlink(e);
          } catch (e) {
            return t(e);
          }
          t(null);
        },
        loadRemoteEntry: (e, t, o) => {
          var r = e.get(t);
          (r.onsuccess = (e) => o(null, e.target.result)),
            (r.onerror = (e) => {
              o(e.target.error), e.preventDefault();
            });
        },
        storeRemoteEntry: (e, t, o, r) => {
          try {
            var n = e.put(o, t);
          } catch (e) {
            return void r(e);
          }
          (n.onsuccess = (e) => r()),
            (n.onerror = (e) => {
              r(e.target.error), e.preventDefault();
            });
        },
        removeRemoteEntry: (e, t, o) => {
          var r = e.delete(t);
          (r.onsuccess = (e) => o()),
            (r.onerror = (e) => {
              o(e.target.error), e.preventDefault();
            });
        },
        reconcile: (e, t, o) => {
          var r = 0,
            n = [];
          Object.keys(e.entries).forEach(function (o) {
            var i = e.entries[o],
              a = t.entries[o];
            (a && i.timestamp.getTime() == a.timestamp.getTime()) ||
              (n.push(o), r++);
          });
          var i = [];
          if (
            (Object.keys(t.entries).forEach(function (t) {
              e.entries[t] || (i.push(t), r++);
            }),
            !r)
          )
            return o(null);
          var a = !1,
            s = ("remote" === e.type ? e.db : t.db).transaction(
              [IDBFS.DB_STORE_NAME],
              "readwrite"
            ),
            d = s.objectStore(IDBFS.DB_STORE_NAME);
          function l(e) {
            if (e && !a) return (a = !0), o(e);
          }
          (s.onerror = s.onabort =
            (e) => {
              l(e.target.error), e.preventDefault();
            }),
            (s.oncomplete = (e) => {
              a || o(null);
            }),
            n.sort().forEach((e) => {
              "local" === t.type
                ? IDBFS.loadRemoteEntry(d, e, (t, o) => {
                    if (t) return l(t);
                    IDBFS.storeLocalEntry(e, o, l);
                  })
                : IDBFS.loadLocalEntry(e, (t, o) => {
                    if (t) return l(t);
                    IDBFS.storeRemoteEntry(d, e, o, l);
                  });
            }),
            i
              .sort()
              .reverse()
              .forEach((e) => {
                "local" === t.type
                  ? IDBFS.removeLocalEntry(e, l)
                  : IDBFS.removeRemoteEntry(d, e, l);
              });
        },
      },
      strError = (e) => UTF8ToString(_strerror(e)),
      ERRNO_CODES = {
        EPERM: 63,
        ENOENT: 44,
        ESRCH: 71,
        EINTR: 27,
        EIO: 29,
        ENXIO: 60,
        E2BIG: 1,
        ENOEXEC: 45,
        EBADF: 8,
        ECHILD: 12,
        EAGAIN: 6,
        EWOULDBLOCK: 6,
        ENOMEM: 48,
        EACCES: 2,
        EFAULT: 21,
        ENOTBLK: 105,
        EBUSY: 10,
        EEXIST: 20,
        EXDEV: 75,
        ENODEV: 43,
        ENOTDIR: 54,
        EISDIR: 31,
        EINVAL: 28,
        ENFILE: 41,
        EMFILE: 33,
        ENOTTY: 59,
        ETXTBSY: 74,
        EFBIG: 22,
        ENOSPC: 51,
        ESPIPE: 70,
        EROFS: 69,
        EMLINK: 34,
        EPIPE: 64,
        EDOM: 18,
        ERANGE: 68,
        ENOMSG: 49,
        EIDRM: 24,
        ECHRNG: 106,
        EL2NSYNC: 156,
        EL3HLT: 107,
        EL3RST: 108,
        ELNRNG: 109,
        EUNATCH: 110,
        ENOCSI: 111,
        EL2HLT: 112,
        EDEADLK: 16,
        ENOLCK: 46,
        EBADE: 113,
        EBADR: 114,
        EXFULL: 115,
        ENOANO: 104,
        EBADRQC: 103,
        EBADSLT: 102,
        EDEADLOCK: 16,
        EBFONT: 101,
        ENOSTR: 100,
        ENODATA: 116,
        ETIME: 117,
        ENOSR: 118,
        ENONET: 119,
        ENOPKG: 120,
        EREMOTE: 121,
        ENOLINK: 47,
        EADV: 122,
        ESRMNT: 123,
        ECOMM: 124,
        EPROTO: 65,
        EMULTIHOP: 36,
        EDOTDOT: 125,
        EBADMSG: 9,
        ENOTUNIQ: 126,
        EBADFD: 127,
        EREMCHG: 128,
        ELIBACC: 129,
        ELIBBAD: 130,
        ELIBSCN: 131,
        ELIBMAX: 132,
        ELIBEXEC: 133,
        ENOSYS: 52,
        ENOTEMPTY: 55,
        ENAMETOOLONG: 37,
        ELOOP: 32,
        EOPNOTSUPP: 138,
        EPFNOSUPPORT: 139,
        ECONNRESET: 15,
        ENOBUFS: 42,
        EAFNOSUPPORT: 5,
        EPROTOTYPE: 67,
        ENOTSOCK: 57,
        ENOPROTOOPT: 50,
        ESHUTDOWN: 140,
        ECONNREFUSED: 14,
        EADDRINUSE: 3,
        ECONNABORTED: 13,
        ENETUNREACH: 40,
        ENETDOWN: 38,
        ETIMEDOUT: 73,
        EHOSTDOWN: 142,
        EHOSTUNREACH: 23,
        EINPROGRESS: 26,
        EALREADY: 7,
        EDESTADDRREQ: 17,
        EMSGSIZE: 35,
        EPROTONOSUPPORT: 66,
        ESOCKTNOSUPPORT: 137,
        EADDRNOTAVAIL: 4,
        ENETRESET: 39,
        EISCONN: 30,
        ENOTCONN: 53,
        ETOOMANYREFS: 141,
        EUSERS: 136,
        EDQUOT: 19,
        ESTALE: 72,
        ENOTSUP: 138,
        ENOMEDIUM: 148,
        EILSEQ: 25,
        EOVERFLOW: 61,
        ECANCELED: 11,
        ENOTRECOVERABLE: 56,
        EOWNERDEAD: 62,
        ESTRPIPE: 135,
      },
      FS = {
        root: null,
        mounts: [],
        devices: {},
        streams: [],
        nextInode: 1,
        nameTable: null,
        currentPath: "/",
        initialized: !1,
        ignorePermissions: !0,
        ErrnoError: class extends Error {
          constructor(e) {
            for (var t in (super(runtimeInitialized ? strError(e) : ""),
            (this.name = "ErrnoError"),
            (this.errno = e),
            ERRNO_CODES))
              if (ERRNO_CODES[t] === e) {
                this.code = t;
                break;
              }
          }
        },
        genericErrors: {},
        filesystems: null,
        syncFSRequests: 0,
        FSStream: class {
          constructor() {
            this.shared = {};
          }
          get object() {
            return this.node;
          }
          set object(e) {
            this.node = e;
          }
          get isRead() {
            return 1 != (2097155 & this.flags);
          }
          get isWrite() {
            return !!(2097155 & this.flags);
          }
          get isAppend() {
            return 1024 & this.flags;
          }
          get flags() {
            return this.shared.flags;
          }
          set flags(e) {
            this.shared.flags = e;
          }
          get position() {
            return this.shared.position;
          }
          set position(e) {
            this.shared.position = e;
          }
        },
        FSNode: class {
          constructor(e, t, o, r) {
            e || (e = this),
              (this.parent = e),
              (this.mount = e.mount),
              (this.mounted = null),
              (this.id = FS.nextInode++),
              (this.name = t),
              (this.mode = o),
              (this.node_ops = {}),
              (this.stream_ops = {}),
              (this.rdev = r),
              (this.readMode = 365),
              (this.writeMode = 146);
          }
          get read() {
            return (this.mode & this.readMode) === this.readMode;
          }
          set read(e) {
            e ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
          }
          get write() {
            return (this.mode & this.writeMode) === this.writeMode;
          }
          set write(e) {
            e ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
          }
          get isFolder() {
            return FS.isDir(this.mode);
          }
          get isDevice() {
            return FS.isChrdev(this.mode);
          }
        },
        lookupPath(e, t = {}) {
          if (!(e = PATH_FS.resolve(e))) return { path: "", node: null };
          if (
            (t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t))
              .recurse_count > 8
          )
            throw new FS.ErrnoError(32);
          for (
            var o = e.split("/").filter((e) => !!e),
              r = FS.root,
              n = "/",
              i = 0;
            i < o.length;
            i++
          ) {
            var a = i === o.length - 1;
            if (a && t.parent) break;
            if (
              ((r = FS.lookupNode(r, o[i])),
              (n = PATH.join2(n, o[i])),
              FS.isMountpoint(r) &&
                (!a || (a && t.follow_mount)) &&
                (r = r.mounted.root),
              !a || t.follow)
            )
              for (var s = 0; FS.isLink(r.mode); ) {
                var d = FS.readlink(n);
                if (
                  ((n = PATH_FS.resolve(PATH.dirname(n), d)),
                  (r = FS.lookupPath(n, {
                    recurse_count: t.recurse_count + 1,
                  }).node),
                  s++ > 40)
                )
                  throw new FS.ErrnoError(32);
              }
          }
          return { path: n, node: r };
        },
        getPath(e) {
          for (var t; ; ) {
            if (FS.isRoot(e)) {
              var o = e.mount.mountpoint;
              return t ? ("/" !== o[o.length - 1] ? `${o}/${t}` : o + t) : o;
            }
            (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
          }
        },
        hashName(e, t) {
          for (var o = 0, r = 0; r < t.length; r++)
            o = ((o << 5) - o + t.charCodeAt(r)) | 0;
          return ((e + o) >>> 0) % FS.nameTable.length;
        },
        hashAddNode(e) {
          var t = FS.hashName(e.parent.id, e.name);
          (e.name_next = FS.nameTable[t]), (FS.nameTable[t] = e);
        },
        hashRemoveNode(e) {
          var t = FS.hashName(e.parent.id, e.name);
          if (FS.nameTable[t] === e) FS.nameTable[t] = e.name_next;
          else
            for (var o = FS.nameTable[t]; o; ) {
              if (o.name_next === e) {
                o.name_next = e.name_next;
                break;
              }
              o = o.name_next;
            }
        },
        lookupNode(e, t) {
          var o = FS.mayLookup(e);
          if (o) throw new FS.ErrnoError(o);
          for (
            var r = FS.hashName(e.id, t), n = FS.nameTable[r];
            n;
            n = n.name_next
          ) {
            var i = n.name;
            if (n.parent.id === e.id && i === t) return n;
          }
          return FS.lookup(e, t);
        },
        createNode(e, t, o, r) {
          assert("object" == typeof e);
          var n = new FS.FSNode(e, t, o, r);
          return FS.hashAddNode(n), n;
        },
        destroyNode(e) {
          FS.hashRemoveNode(e);
        },
        isRoot: (e) => e === e.parent,
        isMountpoint: (e) => !!e.mounted,
        isFile: (e) => 32768 == (61440 & e),
        isDir: (e) => 16384 == (61440 & e),
        isLink: (e) => 40960 == (61440 & e),
        isChrdev: (e) => 8192 == (61440 & e),
        isBlkdev: (e) => 24576 == (61440 & e),
        isFIFO: (e) => 4096 == (61440 & e),
        isSocket: (e) => !(49152 & ~e),
        flagsToPermissionString(e) {
          var t = ["r", "w", "rw"][3 & e];
          return 512 & e && (t += "w"), t;
        },
        nodePermissions: (e, t) =>
          FS.ignorePermissions ||
          ((!t.includes("r") || 292 & e.mode) &&
            (!t.includes("w") || 146 & e.mode) &&
            (!t.includes("x") || 73 & e.mode))
            ? 0
            : 2,
        mayLookup(e) {
          if (!FS.isDir(e.mode)) return 54;
          var t = FS.nodePermissions(e, "x");
          return t || (e.node_ops.lookup ? 0 : 2);
        },
        mayCreate(e, t) {
          try {
            FS.lookupNode(e, t);
            return 20;
          } catch (e) {}
          return FS.nodePermissions(e, "wx");
        },
        mayDelete(e, t, o) {
          var r;
          try {
            r = FS.lookupNode(e, t);
          } catch (e) {
            return e.errno;
          }
          var n = FS.nodePermissions(e, "wx");
          if (n) return n;
          if (o) {
            if (!FS.isDir(r.mode)) return 54;
            if (FS.isRoot(r) || FS.getPath(r) === FS.cwd()) return 10;
          } else if (FS.isDir(r.mode)) return 31;
          return 0;
        },
        mayOpen: (e, t) =>
          e
            ? FS.isLink(e.mode)
              ? 32
              : FS.isDir(e.mode) &&
                ("r" !== FS.flagsToPermissionString(t) || 512 & t)
              ? 31
              : FS.nodePermissions(e, FS.flagsToPermissionString(t))
            : 44,
        MAX_OPEN_FDS: 4096,
        nextfd() {
          for (var e = 0; e <= FS.MAX_OPEN_FDS; e++)
            if (!FS.streams[e]) return e;
          throw new FS.ErrnoError(33);
        },
        getStreamChecked(e) {
          var t = FS.getStream(e);
          if (!t) throw new FS.ErrnoError(8);
          return t;
        },
        getStream: (e) => FS.streams[e],
        createStream: (e, t = -1) => (
          assert(t >= -1),
          (e = Object.assign(new FS.FSStream(), e)),
          -1 == t && (t = FS.nextfd()),
          (e.fd = t),
          (FS.streams[t] = e),
          e
        ),
        closeStream(e) {
          FS.streams[e] = null;
        },
        dupStream(e, t = -1) {
          var o = FS.createStream(e, t);
          return o.stream_ops?.dup?.(o), o;
        },
        chrdev_stream_ops: {
          open(e) {
            var t = FS.getDevice(e.node.rdev);
            (e.stream_ops = t.stream_ops), e.stream_ops.open?.(e);
          },
          llseek() {
            throw new FS.ErrnoError(70);
          },
        },
        major: (e) => e >> 8,
        minor: (e) => 255 & e,
        makedev: (e, t) => (e << 8) | t,
        registerDevice(e, t) {
          FS.devices[e] = { stream_ops: t };
        },
        getDevice: (e) => FS.devices[e],
        getMounts(e) {
          for (var t = [], o = [e]; o.length; ) {
            var r = o.pop();
            t.push(r), o.push(...r.mounts);
          }
          return t;
        },
        syncfs(e, t) {
          "function" == typeof e && ((t = e), (e = !1)),
            FS.syncFSRequests++,
            FS.syncFSRequests > 1 &&
              err(
                `warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
              );
          var o = FS.getMounts(FS.root.mount),
            r = 0;
          function n(e) {
            return assert(FS.syncFSRequests > 0), FS.syncFSRequests--, t(e);
          }
          function i(e) {
            if (e) return i.errored ? void 0 : ((i.errored = !0), n(e));
            ++r >= o.length && n(null);
          }
          o.forEach((t) => {
            if (!t.type.syncfs) return i(null);
            t.type.syncfs(t, e, i);
          });
        },
        mount(e, t, o) {
          if ("string" == typeof e) throw e;
          var r,
            n = "/" === o,
            i = !o;
          if (n && FS.root) throw new FS.ErrnoError(10);
          if (!n && !i) {
            var a = FS.lookupPath(o, { follow_mount: !1 });
            if (((o = a.path), (r = a.node), FS.isMountpoint(r)))
              throw new FS.ErrnoError(10);
            if (!FS.isDir(r.mode)) throw new FS.ErrnoError(54);
          }
          var s = { type: e, opts: t, mountpoint: o, mounts: [] },
            d = e.mount(s);
          return (
            (d.mount = s),
            (s.root = d),
            n
              ? (FS.root = d)
              : r && ((r.mounted = s), r.mount && r.mount.mounts.push(s)),
            d
          );
        },
        unmount(e) {
          var t = FS.lookupPath(e, { follow_mount: !1 });
          if (!FS.isMountpoint(t.node)) throw new FS.ErrnoError(28);
          var o = t.node,
            r = o.mounted,
            n = FS.getMounts(r);
          Object.keys(FS.nameTable).forEach((e) => {
            for (var t = FS.nameTable[e]; t; ) {
              var o = t.name_next;
              n.includes(t.mount) && FS.destroyNode(t), (t = o);
            }
          }),
            (o.mounted = null);
          var i = o.mount.mounts.indexOf(r);
          assert(-1 !== i), o.mount.mounts.splice(i, 1);
        },
        lookup: (e, t) => e.node_ops.lookup(e, t),
        mknod(e, t, o) {
          var r = FS.lookupPath(e, { parent: !0 }).node,
            n = PATH.basename(e);
          if (!n || "." === n || ".." === n) throw new FS.ErrnoError(28);
          var i = FS.mayCreate(r, n);
          if (i) throw new FS.ErrnoError(i);
          if (!r.node_ops.mknod) throw new FS.ErrnoError(63);
          return r.node_ops.mknod(r, n, t, o);
        },
        create: (e, t) => (
          (t = void 0 !== t ? t : 438),
          (t &= 4095),
          (t |= 32768),
          FS.mknod(e, t, 0)
        ),
        mkdir: (e, t) => (
          (t = void 0 !== t ? t : 511),
          (t &= 1023),
          (t |= 16384),
          FS.mknod(e, t, 0)
        ),
        mkdirTree(e, t) {
          for (var o = e.split("/"), r = "", n = 0; n < o.length; ++n)
            if (o[n]) {
              r += "/" + o[n];
              try {
                FS.mkdir(r, t);
              } catch (e) {
                if (20 != e.errno) throw e;
              }
            }
        },
        mkdev: (e, t, o) => (
          void 0 === o && ((o = t), (t = 438)), (t |= 8192), FS.mknod(e, t, o)
        ),
        symlink(e, t) {
          if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
          var o = FS.lookupPath(t, { parent: !0 }).node;
          if (!o) throw new FS.ErrnoError(44);
          var r = PATH.basename(t),
            n = FS.mayCreate(o, r);
          if (n) throw new FS.ErrnoError(n);
          if (!o.node_ops.symlink) throw new FS.ErrnoError(63);
          return o.node_ops.symlink(o, r, e);
        },
        rename(e, t) {
          var o,
            r,
            n = PATH.dirname(e),
            i = PATH.dirname(t),
            a = PATH.basename(e),
            s = PATH.basename(t);
          if (
            ((o = FS.lookupPath(e, { parent: !0 }).node),
            (r = FS.lookupPath(t, { parent: !0 }).node),
            !o || !r)
          )
            throw new FS.ErrnoError(44);
          if (o.mount !== r.mount) throw new FS.ErrnoError(75);
          var d,
            l = FS.lookupNode(o, a),
            u = PATH_FS.relative(e, i);
          if ("." !== u.charAt(0)) throw new FS.ErrnoError(28);
          if ("." !== (u = PATH_FS.relative(t, n)).charAt(0))
            throw new FS.ErrnoError(55);
          try {
            d = FS.lookupNode(r, s);
          } catch (e) {}
          if (l !== d) {
            var c = FS.isDir(l.mode),
              _ = FS.mayDelete(o, a, c);
            if (_) throw new FS.ErrnoError(_);
            if ((_ = d ? FS.mayDelete(r, s, c) : FS.mayCreate(r, s)))
              throw new FS.ErrnoError(_);
            if (!o.node_ops.rename) throw new FS.ErrnoError(63);
            if (FS.isMountpoint(l) || (d && FS.isMountpoint(d)))
              throw new FS.ErrnoError(10);
            if (r !== o && (_ = FS.nodePermissions(o, "w")))
              throw new FS.ErrnoError(_);
            FS.hashRemoveNode(l);
            try {
              o.node_ops.rename(l, r, s), (l.parent = r);
            } catch (e) {
              throw e;
            } finally {
              FS.hashAddNode(l);
            }
          }
        },
        rmdir(e) {
          var t = FS.lookupPath(e, { parent: !0 }).node,
            o = PATH.basename(e),
            r = FS.lookupNode(t, o),
            n = FS.mayDelete(t, o, !0);
          if (n) throw new FS.ErrnoError(n);
          if (!t.node_ops.rmdir) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(r)) throw new FS.ErrnoError(10);
          t.node_ops.rmdir(t, o), FS.destroyNode(r);
        },
        readdir(e) {
          var t = FS.lookupPath(e, { follow: !0 }).node;
          if (!t.node_ops.readdir) throw new FS.ErrnoError(54);
          return t.node_ops.readdir(t);
        },
        unlink(e) {
          var t = FS.lookupPath(e, { parent: !0 }).node;
          if (!t) throw new FS.ErrnoError(44);
          var o = PATH.basename(e),
            r = FS.lookupNode(t, o),
            n = FS.mayDelete(t, o, !1);
          if (n) throw new FS.ErrnoError(n);
          if (!t.node_ops.unlink) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(r)) throw new FS.ErrnoError(10);
          t.node_ops.unlink(t, o), FS.destroyNode(r);
        },
        readlink(e) {
          var t = FS.lookupPath(e).node;
          if (!t) throw new FS.ErrnoError(44);
          if (!t.node_ops.readlink) throw new FS.ErrnoError(28);
          return PATH_FS.resolve(FS.getPath(t.parent), t.node_ops.readlink(t));
        },
        stat(e, t) {
          var o = FS.lookupPath(e, { follow: !t }).node;
          if (!o) throw new FS.ErrnoError(44);
          if (!o.node_ops.getattr) throw new FS.ErrnoError(63);
          return o.node_ops.getattr(o);
        },
        lstat: (e) => FS.stat(e, !0),
        chmod(e, t, o) {
          var r;
          "string" == typeof e
            ? (r = FS.lookupPath(e, { follow: !o }).node)
            : (r = e);
          if (!r.node_ops.setattr) throw new FS.ErrnoError(63);
          r.node_ops.setattr(r, {
            mode: (4095 & t) | (-4096 & r.mode),
            timestamp: Date.now(),
          });
        },
        lchmod(e, t) {
          FS.chmod(e, t, !0);
        },
        fchmod(e, t) {
          var o = FS.getStreamChecked(e);
          FS.chmod(o.node, t);
        },
        chown(e, t, o, r) {
          var n;
          "string" == typeof e
            ? (n = FS.lookupPath(e, { follow: !r }).node)
            : (n = e);
          if (!n.node_ops.setattr) throw new FS.ErrnoError(63);
          n.node_ops.setattr(n, { timestamp: Date.now() });
        },
        lchown(e, t, o) {
          FS.chown(e, t, o, !0);
        },
        fchown(e, t, o) {
          var r = FS.getStreamChecked(e);
          FS.chown(r.node, t, o);
        },
        truncate(e, t) {
          if (t < 0) throw new FS.ErrnoError(28);
          var o;
          "string" == typeof e
            ? (o = FS.lookupPath(e, { follow: !0 }).node)
            : (o = e);
          if (!o.node_ops.setattr) throw new FS.ErrnoError(63);
          if (FS.isDir(o.mode)) throw new FS.ErrnoError(31);
          if (!FS.isFile(o.mode)) throw new FS.ErrnoError(28);
          var r = FS.nodePermissions(o, "w");
          if (r) throw new FS.ErrnoError(r);
          o.node_ops.setattr(o, { size: t, timestamp: Date.now() });
        },
        ftruncate(e, t) {
          var o = FS.getStreamChecked(e);
          if (!(2097155 & o.flags)) throw new FS.ErrnoError(28);
          FS.truncate(o.node, t);
        },
        utime(e, t, o) {
          var r = FS.lookupPath(e, { follow: !0 }).node;
          r.node_ops.setattr(r, { timestamp: Math.max(t, o) });
        },
        open(e, t, o) {
          if ("" === e) throw new FS.ErrnoError(44);
          var r;
          if (
            ((o =
              64 & (t = "string" == typeof t ? FS_modeStringToFlags(t) : t)
                ? (4095 & (o = void 0 === o ? 438 : o)) | 32768
                : 0),
            "object" == typeof e)
          )
            r = e;
          else {
            e = PATH.normalize(e);
            try {
              r = FS.lookupPath(e, { follow: !(131072 & t) }).node;
            } catch (e) {}
          }
          var n = !1;
          if (64 & t)
            if (r) {
              if (128 & t) throw new FS.ErrnoError(20);
            } else (r = FS.mknod(e, o, 0)), (n = !0);
          if (!r) throw new FS.ErrnoError(44);
          if (
            (FS.isChrdev(r.mode) && (t &= -513), 65536 & t && !FS.isDir(r.mode))
          )
            throw new FS.ErrnoError(54);
          if (!n) {
            var i = FS.mayOpen(r, t);
            if (i) throw new FS.ErrnoError(i);
          }
          512 & t && !n && FS.truncate(r, 0), (t &= -131713);
          var a = FS.createStream({
            node: r,
            path: FS.getPath(r),
            flags: t,
            seekable: !0,
            position: 0,
            stream_ops: r.stream_ops,
            ungotten: [],
            error: !1,
          });
          return (
            a.stream_ops.open && a.stream_ops.open(a),
            !Module.logReadFiles ||
              1 & t ||
              (FS.readFiles || (FS.readFiles = {}),
              e in FS.readFiles || (FS.readFiles[e] = 1)),
            a
          );
        },
        close(e) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          e.getdents && (e.getdents = null);
          try {
            e.stream_ops.close && e.stream_ops.close(e);
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(e.fd);
          }
          e.fd = null;
        },
        isClosed: (e) => null === e.fd,
        llseek(e, t, o) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
          if (0 != o && 1 != o && 2 != o) throw new FS.ErrnoError(28);
          return (
            (e.position = e.stream_ops.llseek(e, t, o)),
            (e.ungotten = []),
            e.position
          );
        },
        read(e, t, o, r, n) {
          if ((assert(o >= 0), r < 0 || n < 0)) throw new FS.ErrnoError(28);
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(8);
          if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
          if (!e.stream_ops.read) throw new FS.ErrnoError(28);
          var i = void 0 !== n;
          if (i) {
            if (!e.seekable) throw new FS.ErrnoError(70);
          } else n = e.position;
          var a = e.stream_ops.read(e, t, o, r, n);
          return i || (e.position += a), a;
        },
        write(e, t, o, r, n, i) {
          if ((assert(o >= 0), r < 0 || n < 0)) throw new FS.ErrnoError(28);
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (!(2097155 & e.flags)) throw new FS.ErrnoError(8);
          if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
          if (!e.stream_ops.write) throw new FS.ErrnoError(28);
          e.seekable && 1024 & e.flags && FS.llseek(e, 0, 2);
          var a = void 0 !== n;
          if (a) {
            if (!e.seekable) throw new FS.ErrnoError(70);
          } else n = e.position;
          var s = e.stream_ops.write(e, t, o, r, n, i);
          return a || (e.position += s), s;
        },
        allocate(e, t, o) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (t < 0 || o <= 0) throw new FS.ErrnoError(28);
          if (!(2097155 & e.flags)) throw new FS.ErrnoError(8);
          if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode))
            throw new FS.ErrnoError(43);
          if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
          e.stream_ops.allocate(e, t, o);
        },
        mmap(e, t, o, r, n) {
          if (2 & r && !(2 & n) && 2 != (2097155 & e.flags))
            throw new FS.ErrnoError(2);
          if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(2);
          if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
          return e.stream_ops.mmap(e, t, o, r, n);
        },
        msync: (e, t, o, r, n) => (
          assert(o >= 0),
          e.stream_ops.msync ? e.stream_ops.msync(e, t, o, r, n) : 0
        ),
        ioctl(e, t, o) {
          if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
          return e.stream_ops.ioctl(e, t, o);
        },
        readFile(e, t = {}) {
          if (
            ((t.flags = t.flags || 0),
            (t.encoding = t.encoding || "binary"),
            "utf8" !== t.encoding && "binary" !== t.encoding)
          )
            throw new Error(`Invalid encoding type "${t.encoding}"`);
          var o,
            r = FS.open(e, t.flags),
            n = FS.stat(e).size,
            i = new Uint8Array(n);
          return (
            FS.read(r, i, 0, n, 0),
            "utf8" === t.encoding
              ? (o = UTF8ArrayToString(i, 0))
              : "binary" === t.encoding && (o = i),
            FS.close(r),
            o
          );
        },
        writeFile(e, t, o = {}) {
          o.flags = o.flags || 577;
          var r = FS.open(e, o.flags, o.mode);
          if ("string" == typeof t) {
            var n = new Uint8Array(lengthBytesUTF8(t) + 1),
              i = stringToUTF8Array(t, n, 0, n.length);
            FS.write(r, n, 0, i, void 0, o.canOwn);
          } else {
            if (!ArrayBuffer.isView(t))
              throw new Error("Unsupported data type");
            FS.write(r, t, 0, t.byteLength, void 0, o.canOwn);
          }
          FS.close(r);
        },
        cwd: () => FS.currentPath,
        chdir(e) {
          var t = FS.lookupPath(e, { follow: !0 });
          if (null === t.node) throw new FS.ErrnoError(44);
          if (!FS.isDir(t.node.mode)) throw new FS.ErrnoError(54);
          var o = FS.nodePermissions(t.node, "x");
          if (o) throw new FS.ErrnoError(o);
          FS.currentPath = t.path;
        },
        createDefaultDirectories() {
          FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
        },
        createDefaultDevices() {
          FS.mkdir("/dev"),
            FS.registerDevice(FS.makedev(1, 3), {
              read: () => 0,
              write: (e, t, o, r, n) => r,
            }),
            FS.mkdev("/dev/null", FS.makedev(1, 3)),
            TTY.register(FS.makedev(5, 0), TTY.default_tty_ops),
            TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops),
            FS.mkdev("/dev/tty", FS.makedev(5, 0)),
            FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var e = new Uint8Array(1024),
            t = 0,
            o = () => (0 === t && (t = randomFill(e).byteLength), e[--t]);
          FS.createDevice("/dev", "random", o),
            FS.createDevice("/dev", "urandom", o),
            FS.mkdir("/dev/shm"),
            FS.mkdir("/dev/shm/tmp");
        },
        createSpecialDirectories() {
          FS.mkdir("/proc");
          var e = FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd"),
            FS.mount(
              {
                mount() {
                  var t = FS.createNode(e, "fd", 16895, 73);
                  return (
                    (t.node_ops = {
                      lookup(e, t) {
                        var o = +t,
                          r = FS.getStreamChecked(o),
                          n = {
                            parent: null,
                            mount: { mountpoint: "fake" },
                            node_ops: { readlink: () => r.path },
                          };
                        return (n.parent = n), n;
                      },
                    }),
                    t
                  );
                },
              },
              {},
              "/proc/self/fd"
            );
        },
        createStandardStreams() {
          Module.stdin
            ? FS.createDevice("/dev", "stdin", Module.stdin)
            : FS.symlink("/dev/tty", "/dev/stdin"),
            Module.stdout
              ? FS.createDevice("/dev", "stdout", null, Module.stdout)
              : FS.symlink("/dev/tty", "/dev/stdout"),
            Module.stderr
              ? FS.createDevice("/dev", "stderr", null, Module.stderr)
              : FS.symlink("/dev/tty1", "/dev/stderr");
          var e = FS.open("/dev/stdin", 0),
            t = FS.open("/dev/stdout", 1),
            o = FS.open("/dev/stderr", 1);
          assert(0 === e.fd, `invalid handle for stdin (${e.fd})`),
            assert(1 === t.fd, `invalid handle for stdout (${t.fd})`),
            assert(2 === o.fd, `invalid handle for stderr (${o.fd})`);
        },
        staticInit() {
          [44].forEach((e) => {
            (FS.genericErrors[e] = new FS.ErrnoError(e)),
              (FS.genericErrors[e].stack = "<generic error, no stack>");
          }),
            (FS.nameTable = new Array(4096)),
            FS.mount(MEMFS, {}, "/"),
            FS.createDefaultDirectories(),
            FS.createDefaultDevices(),
            FS.createSpecialDirectories(),
            (FS.filesystems = { MEMFS: MEMFS, IDBFS: IDBFS });
        },
        init(e, t, o) {
          assert(
            !FS.init.initialized,
            "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
          ),
            (FS.init.initialized = !0),
            (Module.stdin = e || Module.stdin),
            (Module.stdout = t || Module.stdout),
            (Module.stderr = o || Module.stderr),
            FS.createStandardStreams();
        },
        quit() {
          (FS.init.initialized = !1), _fflush(0);
          for (var e = 0; e < FS.streams.length; e++) {
            var t = FS.streams[e];
            t && FS.close(t);
          }
        },
        findObject(e, t) {
          var o = FS.analyzePath(e, t);
          return o.exists ? o.object : null;
        },
        analyzePath(e, t) {
          try {
            e = (r = FS.lookupPath(e, { follow: !t })).path;
          } catch (e) {}
          var o = {
            isRoot: !1,
            exists: !1,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: !1,
            parentPath: null,
            parentObject: null,
          };
          try {
            var r = FS.lookupPath(e, { parent: !0 });
            (o.parentExists = !0),
              (o.parentPath = r.path),
              (o.parentObject = r.node),
              (o.name = PATH.basename(e)),
              (r = FS.lookupPath(e, { follow: !t })),
              (o.exists = !0),
              (o.path = r.path),
              (o.object = r.node),
              (o.name = r.node.name),
              (o.isRoot = "/" === r.path);
          } catch (e) {
            o.error = e.errno;
          }
          return o;
        },
        createPath(e, t, o, r) {
          e = "string" == typeof e ? e : FS.getPath(e);
          for (var n = t.split("/").reverse(); n.length; ) {
            var i = n.pop();
            if (i) {
              var a = PATH.join2(e, i);
              try {
                FS.mkdir(a);
              } catch (e) {}
              e = a;
            }
          }
          return a;
        },
        createFile(e, t, o, r, n) {
          var i = PATH.join2("string" == typeof e ? e : FS.getPath(e), t),
            a = FS_getMode(r, n);
          return FS.create(i, a);
        },
        createDataFile(e, t, o, r, n, i) {
          var a = t;
          e &&
            ((e = "string" == typeof e ? e : FS.getPath(e)),
            (a = t ? PATH.join2(e, t) : e));
          var s = FS_getMode(r, n),
            d = FS.create(a, s);
          if (o) {
            if ("string" == typeof o) {
              for (var l = new Array(o.length), u = 0, c = o.length; u < c; ++u)
                l[u] = o.charCodeAt(u);
              o = l;
            }
            FS.chmod(d, 146 | s);
            var _ = FS.open(d, 577);
            FS.write(_, o, 0, o.length, 0, i), FS.close(_), FS.chmod(d, s);
          }
        },
        createDevice(e, t, o, r) {
          var n = PATH.join2("string" == typeof e ? e : FS.getPath(e), t),
            i = FS_getMode(!!o, !!r);
          FS.createDevice.major || (FS.createDevice.major = 64);
          var a = FS.makedev(FS.createDevice.major++, 0);
          return (
            FS.registerDevice(a, {
              open(e) {
                e.seekable = !1;
              },
              close(e) {
                r?.buffer?.length && r(10);
              },
              read(e, t, r, n, i) {
                for (var a = 0, s = 0; s < n; s++) {
                  var d;
                  try {
                    d = o();
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                  if (void 0 === d && 0 === a) throw new FS.ErrnoError(6);
                  if (null == d) break;
                  a++, (t[r + s] = d);
                }
                return a && (e.node.timestamp = Date.now()), a;
              },
              write(e, t, o, n, i) {
                for (var a = 0; a < n; a++)
                  try {
                    r(t[o + a]);
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                return n && (e.node.timestamp = Date.now()), a;
              },
            }),
            FS.mkdev(n, i, a)
          );
        },
        forceLoadFile(e) {
          if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
          if ("undefined" != typeof XMLHttpRequest)
            throw new Error(
              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
            );
          try {
            (e.contents = readBinary(e.url)), (e.usedBytes = e.contents.length);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        },
        createLazyFile(e, t, o, r, n) {
          class i {
            constructor() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            get(e) {
              if (!(e > this.length - 1 || e < 0)) {
                var t = e % this.chunkSize,
                  o = (e / this.chunkSize) | 0;
                return this.getter(o)[t];
              }
            }
            setDataGetter(e) {
              this.getter = e;
            }
            cacheLength() {
              var e = new XMLHttpRequest();
              if (
                (e.open("HEAD", o, !1),
                e.send(null),
                !((e.status >= 200 && e.status < 300) || 304 === e.status))
              )
                throw new Error("Couldn't load " + o + ". Status: " + e.status);
              var t,
                r = Number(e.getResponseHeader("Content-length")),
                n = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                i =
                  (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                a = 1048576;
              n || (a = r);
              var s = this;
              s.setDataGetter((e) => {
                var t = e * a,
                  n = (e + 1) * a - 1;
                if (
                  ((n = Math.min(n, r - 1)),
                  void 0 === s.chunks[e] &&
                    (s.chunks[e] = ((e, t) => {
                      if (e > t)
                        throw new Error(
                          "invalid range (" +
                            e +
                            ", " +
                            t +
                            ") or no bytes requested!"
                        );
                      if (t > r - 1)
                        throw new Error(
                          "only " + r + " bytes available! programmer error!"
                        );
                      var n = new XMLHttpRequest();
                      if (
                        (n.open("GET", o, !1),
                        r !== a &&
                          n.setRequestHeader("Range", "bytes=" + e + "-" + t),
                        (n.responseType = "arraybuffer"),
                        n.overrideMimeType &&
                          n.overrideMimeType(
                            "text/plain; charset=x-user-defined"
                          ),
                        n.send(null),
                        !(
                          (n.status >= 200 && n.status < 300) ||
                          304 === n.status
                        ))
                      )
                        throw new Error(
                          "Couldn't load " + o + ". Status: " + n.status
                        );
                      return void 0 !== n.response
                        ? new Uint8Array(n.response || [])
                        : intArrayFromString(n.responseText || "", !0);
                    })(t, n)),
                  void 0 === s.chunks[e])
                )
                  throw new Error("doXHR failed!");
                return s.chunks[e];
              }),
                (!i && r) ||
                  ((a = r = 1),
                  (r = this.getter(0).length),
                  (a = r),
                  out(
                    "LazyFiles on gzip forces download of the whole file when length is accessed"
                  )),
                (this._length = r),
                (this._chunkSize = a),
                (this.lengthKnown = !0);
            }
            get length() {
              return this.lengthKnown || this.cacheLength(), this._length;
            }
            get chunkSize() {
              return this.lengthKnown || this.cacheLength(), this._chunkSize;
            }
          }
          if ("undefined" != typeof XMLHttpRequest) {
            if (!ENVIRONMENT_IS_WORKER)
              throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var a = { isDevice: !1, contents: new i() };
          } else a = { isDevice: !1, url: o };
          var s = FS.createFile(e, t, a, r, n);
          a.contents
            ? (s.contents = a.contents)
            : a.url && ((s.contents = null), (s.url = a.url)),
            Object.defineProperties(s, {
              usedBytes: {
                get: function () {
                  return this.contents.length;
                },
              },
            });
          var d = {};
          function l(e, t, o, r, n) {
            var i = e.node.contents;
            if (n >= i.length) return 0;
            var a = Math.min(i.length - n, r);
            if ((assert(a >= 0), i.slice))
              for (var s = 0; s < a; s++) t[o + s] = i[n + s];
            else for (s = 0; s < a; s++) t[o + s] = i.get(n + s);
            return a;
          }
          return (
            Object.keys(s.stream_ops).forEach((e) => {
              var t = s.stream_ops[e];
              d[e] = (...e) => (FS.forceLoadFile(s), t(...e));
            }),
            (d.read = (e, t, o, r, n) => (
              FS.forceLoadFile(s), l(e, t, o, r, n)
            )),
            (d.mmap = (e, t, o, r, n) => {
              FS.forceLoadFile(s);
              var i = mmapAlloc(t);
              if (!i) throw new FS.ErrnoError(48);
              return l(e, HEAP8, i, t, o), { ptr: i, allocated: !0 };
            }),
            (s.stream_ops = d),
            s
          );
        },
        absolutePath() {
          abort(
            "FS.absolutePath has been removed; use PATH_FS.resolve instead"
          );
        },
        createFolder() {
          abort("FS.createFolder has been removed; use FS.mkdir instead");
        },
        createLink() {
          abort("FS.createLink has been removed; use FS.symlink instead");
        },
        joinPath() {
          abort("FS.joinPath has been removed; use PATH.join instead");
        },
        mmapAlloc() {
          abort(
            "FS.mmapAlloc has been replaced by the top level function mmapAlloc"
          );
        },
        standardizePath() {
          abort(
            "FS.standardizePath has been removed; use PATH.normalize instead"
          );
        },
      },
      SYSCALLS = {
        DEFAULT_POLLMASK: 5,
        calculateAt(e, t, o) {
          if (PATH.isAbs(t)) return t;
          var r;
          -100 === e ? (r = FS.cwd()) : (r = SYSCALLS.getStreamFromFD(e).path);
          if (0 == t.length) {
            if (!o) throw new FS.ErrnoError(44);
            return r;
          }
          return PATH.join2(r, t);
        },
        doStat(e, t, o) {
          var r = e(t);
          (HEAP32[o >> 2] = r.dev),
            (HEAP32[(o + 4) >> 2] = r.mode),
            (HEAPU32[(o + 8) >> 2] = r.nlink),
            (HEAP32[(o + 12) >> 2] = r.uid),
            (HEAP32[(o + 16) >> 2] = r.gid),
            (HEAP32[(o + 20) >> 2] = r.rdev),
            (HEAP64[(o + 24) >> 3] = BigInt(r.size)),
            (HEAP32[(o + 32) >> 2] = 4096),
            (HEAP32[(o + 36) >> 2] = r.blocks);
          var n = r.atime.getTime(),
            i = r.mtime.getTime(),
            a = r.ctime.getTime();
          return (
            (HEAP64[(o + 40) >> 3] = BigInt(Math.floor(n / 1e3))),
            (HEAPU32[(o + 48) >> 2] = (n % 1e3) * 1e3),
            (HEAP64[(o + 56) >> 3] = BigInt(Math.floor(i / 1e3))),
            (HEAPU32[(o + 64) >> 2] = (i % 1e3) * 1e3),
            (HEAP64[(o + 72) >> 3] = BigInt(Math.floor(a / 1e3))),
            (HEAPU32[(o + 80) >> 2] = (a % 1e3) * 1e3),
            (HEAP64[(o + 88) >> 3] = BigInt(r.ino)),
            0
          );
        },
        doMsync(e, t, o, r, n) {
          if (!FS.isFile(t.node.mode)) throw new FS.ErrnoError(43);
          if (2 & r) return 0;
          var i = HEAPU8.slice(e, e + o);
          FS.msync(t, i, n, o, r);
        },
        getStreamFromFD: (e) => FS.getStreamChecked(e),
        varargs: void 0,
        getStr: (e) => UTF8ToString(e),
      };
    function ___syscall_chdir(e) {
      try {
        return (e = SYSCALLS.getStr(e)), FS.chdir(e), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_chmod(e, t) {
      try {
        return (e = SYSCALLS.getStr(e)), FS.chmod(e, t), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_faccessat(e, t, o, r) {
      try {
        if (
          ((t = SYSCALLS.getStr(t)),
          assert(0 === r),
          (t = SYSCALLS.calculateAt(e, t)),
          -8 & o)
        )
          return -28;
        var n = FS.lookupPath(t, { follow: !0 }).node;
        if (!n) return -44;
        var i = "";
        return (
          4 & o && (i += "r"),
          2 & o && (i += "w"),
          1 & o && (i += "x"),
          i && FS.nodePermissions(n, i) ? -2 : 0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_fchmod(e, t) {
      try {
        return FS.fchmod(e, t), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function syscallGetVarargI() {
      assert(null != SYSCALLS.varargs);
      var e = HEAP32[+SYSCALLS.varargs >> 2];
      return (SYSCALLS.varargs += 4), e;
    }
    var syscallGetVarargP = syscallGetVarargI;
    function ___syscall_fcntl64(e, t, o) {
      SYSCALLS.varargs = o;
      try {
        var r = SYSCALLS.getStreamFromFD(e);
        switch (t) {
          case 0:
            if ((n = syscallGetVarargI()) < 0) return -28;
            for (; FS.streams[n]; ) n++;
            return FS.dupStream(r, n).fd;
          case 1:
          case 2:
          case 13:
          case 14:
            return 0;
          case 3:
            return r.flags;
          case 4:
            var n = syscallGetVarargI();
            return (r.flags |= n), 0;
          case 12:
            n = syscallGetVarargP();
            return (HEAP16[(n + 0) >> 1] = 2), 0;
        }
        return -28;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_fstat64(e, t) {
      try {
        var o = SYSCALLS.getStreamFromFD(e);
        return SYSCALLS.doStat(FS.stat, o.path, t);
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    var INT53_MAX = 9007199254740992,
      INT53_MIN = -9007199254740992,
      bigintToI53Checked = (e) =>
        e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
    function ___syscall_ftruncate64(e, t) {
      t = bigintToI53Checked(t);
      try {
        return isNaN(t) ? 61 : (FS.ftruncate(e, t), 0);
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    var stringToUTF8 = (e, t, o) => (
      assert(
        "number" == typeof o,
        "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
      ),
      stringToUTF8Array(e, HEAPU8, t, o)
    );
    function ___syscall_getcwd(e, t) {
      try {
        if (0 === t) return -28;
        var o = FS.cwd(),
          r = lengthBytesUTF8(o) + 1;
        return t < r ? -68 : (stringToUTF8(o, e, t), r);
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_getdents64(e, t, o) {
      try {
        var r = SYSCALLS.getStreamFromFD(e);
        r.getdents ||= FS.readdir(r.path);
        for (
          var n = 280, i = 0, a = FS.llseek(r, 0, 1), s = Math.floor(a / n);
          s < r.getdents.length && i + n <= o;

        ) {
          var d,
            l,
            u = r.getdents[s];
          if ("." === u) (d = r.node.id), (l = 4);
          else if (".." === u) {
            (d = FS.lookupPath(r.path, { parent: !0 }).node.id), (l = 4);
          } else {
            var c = FS.lookupNode(r.node, u);
            (d = c.id),
              (l = FS.isChrdev(c.mode)
                ? 2
                : FS.isDir(c.mode)
                ? 4
                : FS.isLink(c.mode)
                ? 10
                : 8);
          }
          assert(d),
            (HEAP64[(t + i) >> 3] = BigInt(d)),
            (HEAP64[(t + i + 8) >> 3] = BigInt((s + 1) * n)),
            (HEAP16[(t + i + 16) >> 1] = 280),
            (HEAP8[t + i + 18] = l),
            stringToUTF8(u, t + i + 19, 256),
            (i += n),
            (s += 1);
        }
        return FS.llseek(r, s * n, 0), i;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_ioctl(e, t, o) {
      SYSCALLS.varargs = o;
      try {
        var r = SYSCALLS.getStreamFromFD(e);
        switch (t) {
          case 21509:
          case 21510:
          case 21511:
          case 21512:
          case 21524:
          case 21515:
            return r.tty ? 0 : -59;
          case 21505:
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tcgets) {
              var n = r.tty.ops.ioctl_tcgets(r),
                i = syscallGetVarargP();
              (HEAP32[i >> 2] = n.c_iflag || 0),
                (HEAP32[(i + 4) >> 2] = n.c_oflag || 0),
                (HEAP32[(i + 8) >> 2] = n.c_cflag || 0),
                (HEAP32[(i + 12) >> 2] = n.c_lflag || 0);
              for (var a = 0; a < 32; a++) HEAP8[i + a + 17] = n.c_cc[a] || 0;
              return 0;
            }
            return 0;
          case 21506:
          case 21507:
          case 21508:
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tcsets) {
              i = syscallGetVarargP();
              var s = HEAP32[i >> 2],
                d = HEAP32[(i + 4) >> 2],
                l = HEAP32[(i + 8) >> 2],
                u = HEAP32[(i + 12) >> 2],
                c = [];
              for (a = 0; a < 32; a++) c.push(HEAP8[i + a + 17]);
              return r.tty.ops.ioctl_tcsets(r.tty, t, {
                c_iflag: s,
                c_oflag: d,
                c_cflag: l,
                c_lflag: u,
                c_cc: c,
              });
            }
            return 0;
          case 21519:
            if (!r.tty) return -59;
            i = syscallGetVarargP();
            return (HEAP32[i >> 2] = 0), 0;
          case 21520:
            return r.tty ? -28 : -59;
          case 21531:
            i = syscallGetVarargP();
            return FS.ioctl(r, t, i);
          case 21523:
            if (!r.tty) return -59;
            if (r.tty.ops.ioctl_tiocgwinsz) {
              var _ = r.tty.ops.ioctl_tiocgwinsz(r.tty);
              i = syscallGetVarargP();
              (HEAP16[i >> 1] = _[0]), (HEAP16[(i + 2) >> 1] = _[1]);
            }
            return 0;
          default:
            return -28;
        }
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_lstat64(e, t) {
      try {
        return (e = SYSCALLS.getStr(e)), SYSCALLS.doStat(FS.lstat, e, t);
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_mkdirat(e, t, o) {
      try {
        return (
          (t = SYSCALLS.getStr(t)),
          (t = SYSCALLS.calculateAt(e, t)),
          "/" === (t = PATH.normalize(t))[t.length - 1] &&
            (t = t.substr(0, t.length - 1)),
          FS.mkdir(t, o, 0),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_mknodat(e, t, o, r) {
      try {
        switch (
          ((t = SYSCALLS.getStr(t)),
          (t = SYSCALLS.calculateAt(e, t)),
          61440 & o)
        ) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        return FS.mknod(t, o, r), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_newfstatat(e, t, o, r) {
      try {
        t = SYSCALLS.getStr(t);
        var n = 256 & r,
          i = 4096 & r;
        return (
          assert(!(r &= -6401), `unknown flags in __syscall_newfstatat: ${r}`),
          (t = SYSCALLS.calculateAt(e, t, i)),
          SYSCALLS.doStat(n ? FS.lstat : FS.stat, t, o)
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_openat(e, t, o, r) {
      SYSCALLS.varargs = r;
      try {
        (t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t));
        var n = r ? syscallGetVarargI() : 0;
        return FS.open(t, o, n).fd;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_readlinkat(e, t, o, r) {
      try {
        if (
          ((t = SYSCALLS.getStr(t)), (t = SYSCALLS.calculateAt(e, t)), r <= 0)
        )
          return -28;
        var n = FS.readlink(t),
          i = Math.min(r, lengthBytesUTF8(n)),
          a = HEAP8[o + i];
        return stringToUTF8(n, o, r + 1), (HEAP8[o + i] = a), i;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_renameat(e, t, o, r) {
      try {
        return (
          (t = SYSCALLS.getStr(t)),
          (r = SYSCALLS.getStr(r)),
          (t = SYSCALLS.calculateAt(e, t)),
          (r = SYSCALLS.calculateAt(o, r)),
          FS.rename(t, r),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_rmdir(e) {
      try {
        return (e = SYSCALLS.getStr(e)), FS.rmdir(e), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_stat64(e, t) {
      try {
        return (e = SYSCALLS.getStr(e)), SYSCALLS.doStat(FS.stat, e, t);
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_statfs64(e, t, o) {
      try {
        return (
          (e = SYSCALLS.getStr(e)),
          assert(64 === t),
          (HEAP32[(o + 4) >> 2] = 4096),
          (HEAP32[(o + 40) >> 2] = 4096),
          (HEAP32[(o + 8) >> 2] = 1e6),
          (HEAP32[(o + 12) >> 2] = 5e5),
          (HEAP32[(o + 16) >> 2] = 5e5),
          (HEAP32[(o + 20) >> 2] = FS.nextInode),
          (HEAP32[(o + 24) >> 2] = 1e6),
          (HEAP32[(o + 28) >> 2] = 42),
          (HEAP32[(o + 44) >> 2] = 2),
          (HEAP32[(o + 36) >> 2] = 255),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_symlink(e, t) {
      try {
        return (
          (e = SYSCALLS.getStr(e)),
          (t = SYSCALLS.getStr(t)),
          FS.symlink(e, t),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    function ___syscall_unlinkat(e, t, o) {
      try {
        return (
          (t = SYSCALLS.getStr(t)),
          (t = SYSCALLS.calculateAt(e, t)),
          0 === o
            ? FS.unlink(t)
            : 512 === o
            ? FS.rmdir(t)
            : abort("Invalid flags passed to unlinkat"),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return -e.errno;
      }
    }
    var __abort_js = () => {
        abort("native code called abort()");
      },
      nowIsMonotonic = 1,
      __emscripten_get_now_is_monotonic = () => nowIsMonotonic,
      __emscripten_runtime_keepalive_clear = () => {
        (noExitRuntime = !1), (runtimeKeepaliveCounter = 0);
      };
    function __gmtime_js(e, t) {
      e = bigintToI53Checked(e);
      var o = new Date(1e3 * e);
      (HEAP32[t >> 2] = o.getUTCSeconds()),
        (HEAP32[(t + 4) >> 2] = o.getUTCMinutes()),
        (HEAP32[(t + 8) >> 2] = o.getUTCHours()),
        (HEAP32[(t + 12) >> 2] = o.getUTCDate()),
        (HEAP32[(t + 16) >> 2] = o.getUTCMonth()),
        (HEAP32[(t + 20) >> 2] = o.getUTCFullYear() - 1900),
        (HEAP32[(t + 24) >> 2] = o.getUTCDay());
      var r = Date.UTC(o.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
        n = ((o.getTime() - r) / 864e5) | 0;
      HEAP32[(t + 28) >> 2] = n;
    }
    var isLeapYear = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0),
      MONTH_DAYS_LEAP_CUMULATIVE = [
        0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335,
      ],
      MONTH_DAYS_REGULAR_CUMULATIVE = [
        0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334,
      ],
      ydayFromDate = (e) =>
        (isLeapYear(e.getFullYear())
          ? MONTH_DAYS_LEAP_CUMULATIVE
          : MONTH_DAYS_REGULAR_CUMULATIVE)[e.getMonth()] +
        e.getDate() -
        1;
    function __localtime_js(e, t) {
      e = bigintToI53Checked(e);
      var o = new Date(1e3 * e);
      (HEAP32[t >> 2] = o.getSeconds()),
        (HEAP32[(t + 4) >> 2] = o.getMinutes()),
        (HEAP32[(t + 8) >> 2] = o.getHours()),
        (HEAP32[(t + 12) >> 2] = o.getDate()),
        (HEAP32[(t + 16) >> 2] = o.getMonth()),
        (HEAP32[(t + 20) >> 2] = o.getFullYear() - 1900),
        (HEAP32[(t + 24) >> 2] = o.getDay());
      var r = 0 | ydayFromDate(o);
      (HEAP32[(t + 28) >> 2] = r),
        (HEAP32[(t + 36) >> 2] = -60 * o.getTimezoneOffset());
      var n = new Date(o.getFullYear(), 0, 1),
        i = new Date(o.getFullYear(), 6, 1).getTimezoneOffset(),
        a = n.getTimezoneOffset(),
        s = 0 | (i != a && o.getTimezoneOffset() == Math.min(a, i));
      HEAP32[(t + 32) >> 2] = s;
    }
    var __tzset_js = (e, t, o, r) => {
        var n = new Date().getFullYear(),
          i = new Date(n, 0, 1),
          a = new Date(n, 6, 1),
          s = i.getTimezoneOffset(),
          d = a.getTimezoneOffset(),
          l = Math.max(s, d);
        (HEAPU32[e >> 2] = 60 * l), (HEAP32[t >> 2] = Number(s != d));
        var u = (e) => {
            var t = e >= 0 ? "-" : "+",
              o = Math.abs(e);
            return `UTC${t}${String(Math.floor(o / 60)).padStart(
              2,
              "0"
            )}${String(o % 60).padStart(2, "0")}`;
          },
          c = u(s),
          _ = u(d);
        assert(c),
          assert(_),
          assert(
            lengthBytesUTF8(c) <= 16,
            `timezone name truncated to fit in TZNAME_MAX (${c})`
          ),
          assert(
            lengthBytesUTF8(_) <= 16,
            `timezone name truncated to fit in TZNAME_MAX (${_})`
          ),
          d < s
            ? (stringToUTF8(c, o, 17), stringToUTF8(_, r, 17))
            : (stringToUTF8(c, r, 17), stringToUTF8(_, o, 17));
      },
      runtimeKeepaliveCounter = 0,
      runtimeKeepalivePush = () => {
        runtimeKeepaliveCounter += 1;
      },
      _emscripten_set_main_loop_timing = (e, t) => {
        if (
          ((Browser.mainLoop.timingMode = e),
          (Browser.mainLoop.timingValue = t),
          !Browser.mainLoop.func)
        )
          return (
            err(
              "emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up."
            ),
            1
          );
        if (
          (Browser.mainLoop.running ||
            (runtimeKeepalivePush(), (Browser.mainLoop.running = !0)),
          0 == e)
        )
          (Browser.mainLoop.scheduler = function () {
            var e =
              0 |
              Math.max(
                0,
                Browser.mainLoop.tickStartTime + t - _emscripten_get_now()
              );
            setTimeout(Browser.mainLoop.runner, e);
          }),
            (Browser.mainLoop.method = "timeout");
        else if (1 == e)
          (Browser.mainLoop.scheduler = function () {
            Browser.requestAnimationFrame(Browser.mainLoop.runner);
          }),
            (Browser.mainLoop.method = "rAF");
        else if (2 == e) {
          if (void 0 === Browser.setImmediate)
            if ("undefined" == typeof setImmediate) {
              var o = [],
                r = "setimmediate";
              addEventListener(
                "message",
                (e) => {
                  (e.data !== r && e.data.target !== r) ||
                    (e.stopPropagation(), o.shift()());
                },
                !0
              ),
                (Browser.setImmediate = function (e) {
                  o.push(e),
                    ENVIRONMENT_IS_WORKER
                      ? ((Module.setImmediates ??= []),
                        Module.setImmediates.push(e),
                        postMessage({ target: r }))
                      : postMessage(r, "*");
                });
            } else Browser.setImmediate = setImmediate;
          (Browser.mainLoop.scheduler = function () {
            Browser.setImmediate(Browser.mainLoop.runner);
          }),
            (Browser.mainLoop.method = "immediate");
        }
        return 0;
      },
      _emscripten_get_now;
    _emscripten_get_now = () => performance.now();
    var webgl_enable_ANGLE_instanced_arrays = (e) => {
        var t = e.getExtension("ANGLE_instanced_arrays");
        if (t)
          return (
            (e.vertexAttribDivisor = (e, o) =>
              t.vertexAttribDivisorANGLE(e, o)),
            (e.drawArraysInstanced = (e, o, r, n) =>
              t.drawArraysInstancedANGLE(e, o, r, n)),
            (e.drawElementsInstanced = (e, o, r, n, i) =>
              t.drawElementsInstancedANGLE(e, o, r, n, i)),
            1
          );
      },
      webgl_enable_OES_vertex_array_object = (e) => {
        var t = e.getExtension("OES_vertex_array_object");
        if (t)
          return (
            (e.createVertexArray = () => t.createVertexArrayOES()),
            (e.deleteVertexArray = (e) => t.deleteVertexArrayOES(e)),
            (e.bindVertexArray = (e) => t.bindVertexArrayOES(e)),
            (e.isVertexArray = (e) => t.isVertexArrayOES(e)),
            1
          );
      },
      webgl_enable_WEBGL_draw_buffers = (e) => {
        var t = e.getExtension("WEBGL_draw_buffers");
        if (t) return (e.drawBuffers = (e, o) => t.drawBuffersWEBGL(e, o)), 1;
      },
      webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = (e) =>
        !!(e.dibvbi = e.getExtension(
          "WEBGL_draw_instanced_base_vertex_base_instance"
        )),
      webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = (e) =>
        !!(e.mdibvbi = e.getExtension(
          "WEBGL_multi_draw_instanced_base_vertex_base_instance"
        )),
      webgl_enable_WEBGL_multi_draw = (e) =>
        !!(e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw")),
      getEmscriptenSupportedExtensions = (e) => {
        var t = [
          "ANGLE_instanced_arrays",
          "EXT_blend_minmax",
          "EXT_disjoint_timer_query",
          "EXT_frag_depth",
          "EXT_shader_texture_lod",
          "EXT_sRGB",
          "OES_element_index_uint",
          "OES_fbo_render_mipmap",
          "OES_standard_derivatives",
          "OES_texture_float",
          "OES_texture_half_float",
          "OES_texture_half_float_linear",
          "OES_vertex_array_object",
          "WEBGL_color_buffer_float",
          "WEBGL_depth_texture",
          "WEBGL_draw_buffers",
          "EXT_color_buffer_float",
          "EXT_conservative_depth",
          "EXT_disjoint_timer_query_webgl2",
          "EXT_texture_norm16",
          "NV_shader_noperspective_interpolation",
          "WEBGL_clip_cull_distance",
          "EXT_color_buffer_half_float",
          "EXT_depth_clamp",
          "EXT_float_blend",
          "EXT_texture_compression_bptc",
          "EXT_texture_compression_rgtc",
          "EXT_texture_filter_anisotropic",
          "KHR_parallel_shader_compile",
          "OES_texture_float_linear",
          "WEBGL_blend_func_extended",
          "WEBGL_compressed_texture_astc",
          "WEBGL_compressed_texture_etc",
          "WEBGL_compressed_texture_etc1",
          "WEBGL_compressed_texture_s3tc",
          "WEBGL_compressed_texture_s3tc_srgb",
          "WEBGL_debug_renderer_info",
          "WEBGL_debug_shaders",
          "WEBGL_lose_context",
          "WEBGL_multi_draw",
        ];
        return (e.getSupportedExtensions() || []).filter((e) => t.includes(e));
      },
      GL = {
        counter: 1,
        buffers: [],
        programs: [],
        framebuffers: [],
        renderbuffers: [],
        textures: [],
        shaders: [],
        vaos: [],
        contexts: [],
        offscreenCanvases: {},
        queries: [],
        samplers: [],
        transformFeedbacks: [],
        syncs: [],
        stringCache: {},
        stringiCache: {},
        unpackAlignment: 4,
        unpackRowLength: 0,
        recordError: (e) => {
          GL.lastError || (GL.lastError = e);
        },
        getNewId: (e) => {
          for (var t = GL.counter++, o = e.length; o < t; o++) e[o] = null;
          return t;
        },
        genObject: (e, t, o, r) => {
          for (var n = 0; n < e; n++) {
            var i = GLctx[o](),
              a = i && GL.getNewId(r);
            i ? ((i.name = a), (r[a] = i)) : GL.recordError(1282),
              (HEAP32[(t + 4 * n) >> 2] = a);
          }
        },
        getSource: (e, t, o, r) => {
          for (var n = "", i = 0; i < t; ++i) {
            var a = r ? HEAPU32[(r + 4 * i) >> 2] : void 0;
            n += UTF8ToString(HEAPU32[(o + 4 * i) >> 2], a);
          }
          return n;
        },
        createContext: (e, t) => {
          t.renderViaOffscreenBackBuffer && (t.preserveDrawingBuffer = !0);
          var o =
            t.majorVersion > 1
              ? e.getContext("webgl2", t)
              : e.getContext("webgl", t);
          return o ? GL.registerContext(o, t) : 0;
        },
        enableOffscreenFramebufferAttributes: (e) => {
          (e.renderViaOffscreenBackBuffer = !0), (e.preserveDrawingBuffer = !0);
        },
        createOffscreenFramebuffer: (e) => {
          var t = e.GLctx,
            o = t.createFramebuffer();
          t.bindFramebuffer(36160, o),
            (e.defaultFbo = o),
            (e.defaultFboForbidBlitFramebuffer = !1),
            t.getContextAttributes().antialias &&
              (e.defaultFboForbidBlitFramebuffer = !0),
            (e.defaultColorTarget = t.createTexture()),
            (e.defaultDepthTarget = t.createRenderbuffer()),
            GL.resizeOffscreenFramebuffer(e),
            t.bindTexture(3553, e.defaultColorTarget),
            t.texParameteri(3553, 10241, 9728),
            t.texParameteri(3553, 10240, 9728),
            t.texParameteri(3553, 10242, 33071),
            t.texParameteri(3553, 10243, 33071),
            t.texImage2D(
              3553,
              0,
              6408,
              t.canvas.width,
              t.canvas.height,
              0,
              6408,
              5121,
              null
            ),
            t.framebufferTexture2D(36160, 36064, 3553, e.defaultColorTarget, 0),
            t.bindTexture(3553, null);
          t.createRenderbuffer();
          t.bindRenderbuffer(36161, e.defaultDepthTarget),
            t.renderbufferStorage(
              36161,
              33189,
              t.canvas.width,
              t.canvas.height
            ),
            t.framebufferRenderbuffer(
              36160,
              36096,
              36161,
              e.defaultDepthTarget
            ),
            t.bindRenderbuffer(36161, null);
          var r = t.createBuffer();
          t.bindBuffer(34962, r),
            t.bufferData(
              34962,
              new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]),
              35044
            ),
            t.bindBuffer(34962, null),
            (e.blitVB = r);
          var n = t.createShader(35633);
          t.shaderSource(
            n,
            "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }"
          ),
            t.compileShader(n);
          var i = t.createShader(35632);
          t.shaderSource(
            i,
            "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }"
          ),
            t.compileShader(i);
          var a = t.createProgram();
          t.attachShader(a, n),
            t.attachShader(a, i),
            t.linkProgram(a),
            (e.blitProgram = a),
            (e.blitPosLoc = t.getAttribLocation(a, "pos")),
            t.useProgram(a),
            t.uniform1i(t.getUniformLocation(a, "sampler"), 0),
            t.useProgram(null),
            (e.defaultVao = void 0),
            t.createVertexArray &&
              ((e.defaultVao = t.createVertexArray()),
              t.bindVertexArray(e.defaultVao),
              t.enableVertexAttribArray(e.blitPosLoc),
              t.bindVertexArray(null));
        },
        resizeOffscreenFramebuffer: (e) => {
          var t = e.GLctx;
          if (e.defaultColorTarget) {
            var o = t.getParameter(32873);
            t.bindTexture(3553, e.defaultColorTarget),
              t.texImage2D(
                3553,
                0,
                6408,
                t.drawingBufferWidth,
                t.drawingBufferHeight,
                0,
                6408,
                5121,
                null
              ),
              t.bindTexture(3553, o);
          }
          if (e.defaultDepthTarget) {
            var r = t.getParameter(36007);
            t.bindRenderbuffer(36161, e.defaultDepthTarget),
              t.renderbufferStorage(
                36161,
                33189,
                t.drawingBufferWidth,
                t.drawingBufferHeight
              ),
              t.bindRenderbuffer(36161, r);
          }
        },
        blitOffscreenFramebuffer: (e) => {
          var t = e.GLctx,
            o = t.getParameter(3089);
          o && t.disable(3089);
          var r = t.getParameter(36006);
          if (t.blitFramebuffer && !e.defaultFboForbidBlitFramebuffer)
            t.bindFramebuffer(36008, e.defaultFbo),
              t.bindFramebuffer(36009, null),
              t.blitFramebuffer(
                0,
                0,
                t.canvas.width,
                t.canvas.height,
                0,
                0,
                t.canvas.width,
                t.canvas.height,
                16384,
                9728
              );
          else {
            t.bindFramebuffer(36160, null);
            var n = t.getParameter(35725);
            t.useProgram(e.blitProgram);
            var i = t.getParameter(34964);
            t.bindBuffer(34962, e.blitVB);
            var a = t.getParameter(34016);
            t.activeTexture(33984);
            var s = t.getParameter(32873);
            t.bindTexture(3553, e.defaultColorTarget);
            var d = t.getParameter(3042);
            d && t.disable(3042);
            var l = t.getParameter(2884);
            l && t.disable(2884);
            var u = t.getParameter(2929);
            u && t.disable(2929);
            var c = t.getParameter(2960);
            function _() {
              t.vertexAttribPointer(e.blitPosLoc, 2, 5126, !1, 0, 0),
                t.drawArrays(5, 0, 4);
            }
            if ((c && t.disable(2960), e.defaultVao)) {
              var f = t.getParameter(34229);
              t.bindVertexArray(e.defaultVao), _(), t.bindVertexArray(f);
            } else {
              for (
                var g = {
                    buffer: t.getVertexAttrib(e.blitPosLoc, 34975),
                    size: t.getVertexAttrib(e.blitPosLoc, 34339),
                    stride: t.getVertexAttrib(e.blitPosLoc, 34340),
                    type: t.getVertexAttrib(e.blitPosLoc, 34341),
                    normalized: t.getVertexAttrib(e.blitPosLoc, 34922),
                    pointer: t.getVertexAttribOffset(e.blitPosLoc, 34373),
                  },
                  m = t.getParameter(34921),
                  p = [],
                  h = 0;
                h < m;
                ++h
              ) {
                var b = t.getVertexAttrib(h, 34338),
                  S = h == e.blitPosLoc;
                b && !S && t.disableVertexAttribArray(h),
                  !b && S && t.enableVertexAttribArray(h),
                  (p[h] = b);
              }
              _();
              for (h = 0; h < m; ++h) {
                b = p[h];
                var v = h == e.blitPosLoc;
                b && !v && t.enableVertexAttribArray(h),
                  !b && v && t.disableVertexAttribArray(h);
              }
              t.bindBuffer(34962, g.buffer),
                t.vertexAttribPointer(
                  e.blitPosLoc,
                  g.size,
                  g.type,
                  g.normalized,
                  g.stride,
                  g.offset
                );
            }
            c && t.enable(2960),
              u && t.enable(2929),
              l && t.enable(2884),
              d && t.enable(3042),
              t.bindTexture(3553, s),
              t.activeTexture(a),
              t.bindBuffer(34962, i),
              t.useProgram(n);
          }
          t.bindFramebuffer(36160, r), o && t.enable(3089);
        },
        registerContext: (e, t) => {
          var o = GL.getNewId(GL.contexts),
            r = { handle: o, attributes: t, version: t.majorVersion, GLctx: e };
          return (
            e.canvas && (e.canvas.GLctxObject = r),
            (GL.contexts[o] = r),
            (void 0 === t.enableExtensionsByDefault ||
              t.enableExtensionsByDefault) &&
              GL.initExtensions(r),
            t.renderViaOffscreenBackBuffer && GL.createOffscreenFramebuffer(r),
            o
          );
        },
        makeContextCurrent: (e) => (
          (GL.currentContext = GL.contexts[e]),
          (Module.ctx = GLctx = GL.currentContext?.GLctx),
          !(e && !GLctx)
        ),
        getContext: (e) => GL.contexts[e],
        deleteContext: (e) => {
          GL.currentContext === GL.contexts[e] && (GL.currentContext = null),
            "object" == typeof JSEvents &&
              JSEvents.removeAllHandlersOnTarget(GL.contexts[e].GLctx.canvas),
            GL.contexts[e] &&
              GL.contexts[e].GLctx.canvas &&
              (GL.contexts[e].GLctx.canvas.GLctxObject = void 0),
            (GL.contexts[e] = null);
        },
        initExtensions: (e) => {
          if (((e ||= GL.currentContext), !e.initExtensionsDone)) {
            e.initExtensionsDone = !0;
            var t = e.GLctx;
            webgl_enable_ANGLE_instanced_arrays(t),
              webgl_enable_OES_vertex_array_object(t),
              webgl_enable_WEBGL_draw_buffers(t),
              webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(t),
              webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(
                t
              ),
              e.version >= 2 &&
                (t.disjointTimerQueryExt = t.getExtension(
                  "EXT_disjoint_timer_query_webgl2"
                )),
              (e.version < 2 || !t.disjointTimerQueryExt) &&
                (t.disjointTimerQueryExt = t.getExtension(
                  "EXT_disjoint_timer_query"
                )),
              webgl_enable_WEBGL_multi_draw(t),
              getEmscriptenSupportedExtensions(t).forEach((e) => {
                e.includes("lose_context") ||
                  e.includes("debug") ||
                  t.getExtension(e);
              });
          }
        },
      },
      _emscripten_webgl_do_commit_frame = () =>
        GL.currentContext && GL.currentContext.GLctx
          ? GL.currentContext.defaultFbo
            ? (GL.blitOffscreenFramebuffer(GL.currentContext), 0)
            : GL.currentContext.attributes.explicitSwapControl
            ? 0
            : -3
          : -3,
      _emscripten_webgl_commit_frame = _emscripten_webgl_do_commit_frame,
      keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0,
      _proc_exit = (e) => {
        (EXITSTATUS = e),
          keepRuntimeAlive() || (Module.onExit?.(e), (ABORT = !0)),
          quit_(e, new ExitStatus(e));
      },
      exitJS = (e, t) => {
        if (
          ((EXITSTATUS = e),
          keepRuntimeAlive() || exitRuntime(),
          keepRuntimeAlive() && !t)
        ) {
          var o = `program exited (with status: ${e}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
          readyPromiseReject(o), err(o);
        }
        _proc_exit(e);
      },
      _exit = exitJS,
      handleException = (e) => {
        if (e instanceof ExitStatus || "unwind" == e) return EXITSTATUS;
        checkStackCookie(),
          e instanceof WebAssembly.RuntimeError &&
            _emscripten_stack_get_current() <= 0 &&
            err(
              "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)"
            ),
          quit_(1, e);
      },
      maybeExit = () => {
        if (!runtimeExited && !keepRuntimeAlive())
          try {
            _exit(EXITSTATUS);
          } catch (e) {
            handleException(e);
          }
      },
      runtimeKeepalivePop = () => {
        assert(runtimeKeepaliveCounter > 0), (runtimeKeepaliveCounter -= 1);
      },
      setMainLoop = (e, t, o, r, n) => {
        assert(
          !Browser.mainLoop.func,
          "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
        ),
          (Browser.mainLoop.func = e),
          (Browser.mainLoop.arg = r);
        var i = Browser.mainLoop.currentlyRunningMainloop;
        function a() {
          return (
            !(i < Browser.mainLoop.currentlyRunningMainloop) ||
            (runtimeKeepalivePop(), maybeExit(), !1)
          );
        }
        if (
          ((Browser.mainLoop.running = !1),
          (Browser.mainLoop.runner = function () {
            if (!ABORT)
              if (Browser.mainLoop.queue.length > 0) {
                Date.now();
                var t = Browser.mainLoop.queue.shift();
                if ((t.func(t.arg), Browser.mainLoop.remainingBlockers)) {
                  var o = Browser.mainLoop.remainingBlockers,
                    r = o % 1 == 0 ? o - 1 : Math.floor(o);
                  t.counted
                    ? (Browser.mainLoop.remainingBlockers = r)
                    : ((r += 0.5),
                      (Browser.mainLoop.remainingBlockers = (8 * o + r) / 9));
                }
                if ((Browser.mainLoop.updateStatus(), !a())) return;
                setTimeout(Browser.mainLoop.runner, 0);
              } else
                a() &&
                  ((Browser.mainLoop.currentFrameNumber =
                    (Browser.mainLoop.currentFrameNumber + 1) | 0),
                  1 == Browser.mainLoop.timingMode &&
                  Browser.mainLoop.timingValue > 1 &&
                  Browser.mainLoop.currentFrameNumber %
                    Browser.mainLoop.timingValue !=
                    0
                    ? Browser.mainLoop.scheduler()
                    : (0 == Browser.mainLoop.timingMode &&
                        (Browser.mainLoop.tickStartTime =
                          _emscripten_get_now()),
                      "timeout" === Browser.mainLoop.method &&
                        Module.ctx &&
                        (warnOnce(
                          "Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"
                        ),
                        (Browser.mainLoop.method = "")),
                      Browser.mainLoop.runIter(e),
                      checkStackCookie(),
                      a() &&
                        ("object" == typeof SDL &&
                          SDL.audio?.queueNewAudioData?.(),
                        Browser.mainLoop.scheduler())));
          }),
          n ||
            (t && t > 0
              ? _emscripten_set_main_loop_timing(0, 1e3 / t)
              : _emscripten_set_main_loop_timing(1, 1),
            Browser.mainLoop.scheduler()),
          o)
        )
          throw "unwind";
      },
      callUserCallback = (e) => {
        if (runtimeExited || ABORT)
          err(
            "user callback triggered after runtime exited or application aborted.  Ignoring."
          );
        else
          try {
            e(), maybeExit();
          } catch (e) {
            handleException(e);
          }
      },
      safeSetTimeout = (e, t) => (
        runtimeKeepalivePush(),
        setTimeout(() => {
          runtimeKeepalivePop(), callUserCallback(e);
        }, t)
      ),
      Browser = {
        mainLoop: {
          running: !1,
          scheduler: null,
          method: "",
          currentlyRunningMainloop: 0,
          func: null,
          arg: 0,
          timingMode: 0,
          timingValue: 0,
          currentFrameNumber: 0,
          queue: [],
          pause() {
            (Browser.mainLoop.scheduler = null),
              Browser.mainLoop.currentlyRunningMainloop++;
          },
          resume() {
            Browser.mainLoop.currentlyRunningMainloop++;
            var e = Browser.mainLoop.timingMode,
              t = Browser.mainLoop.timingValue,
              o = Browser.mainLoop.func;
            (Browser.mainLoop.func = null),
              setMainLoop(o, 0, !1, Browser.mainLoop.arg, !0),
              _emscripten_set_main_loop_timing(e, t),
              Browser.mainLoop.scheduler();
          },
          updateStatus() {
            if (Module.setStatus) {
              var e = Module.statusMessage || "Please wait...",
                t = Browser.mainLoop.remainingBlockers,
                o = Browser.mainLoop.expectedBlockers;
              t
                ? t < o
                  ? Module.setStatus(
                      "{message} ({expected - remaining}/{expected})"
                    )
                  : Module.setStatus(e)
                : Module.setStatus("");
            }
          },
          runIter(e) {
            if (!ABORT) {
              if (Module.preMainLoop) if (!1 === Module.preMainLoop()) return;
              callUserCallback(e), Module.postMainLoop?.();
            }
          },
        },
        isFullscreen: !1,
        pointerLock: !1,
        moduleContextCreatedCallbacks: [],
        workers: [],
        init() {
          if (!Browser.initted) {
            Browser.initted = !0;
            var e = {
              canHandle: function (e) {
                return (
                  !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                );
              },
              handle: function (e, t, o, r) {
                var n = new Blob([e], { type: Browser.getMimetype(t) });
                n.size !== e.length &&
                  (n = new Blob([new Uint8Array(e).buffer], {
                    type: Browser.getMimetype(t),
                  }));
                var i = URL.createObjectURL(n);
                assert(
                  "string" == typeof i,
                  "createObjectURL must return a url as a string"
                );
                var a = new Image();
                (a.onload = () => {
                  assert(a.complete, `Image ${t} could not be decoded`);
                  var r = document.createElement("canvas");
                  (r.width = a.width),
                    (r.height = a.height),
                    r.getContext("2d").drawImage(a, 0, 0),
                    (preloadedImages[t] = r),
                    URL.revokeObjectURL(i),
                    o?.(e);
                }),
                  (a.onerror = (e) => {
                    err(`Image ${i} could not be decoded`), r?.();
                  }),
                  (a.src = i);
              },
            };
            preloadPlugins.push(e);
            var t = {
              canHandle: function (e) {
                return (
                  !Module.noAudioDecoding &&
                  e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 }
                );
              },
              handle: function (e, t, o, r) {
                var n = !1;
                function i(r) {
                  n || ((n = !0), (preloadedAudios[t] = r), o?.(e));
                }
                var a = new Blob([e], { type: Browser.getMimetype(t) }),
                  s = URL.createObjectURL(a);
                assert(
                  "string" == typeof s,
                  "createObjectURL must return a url as a string"
                );
                var d = new Audio();
                d.addEventListener("canplaythrough", () => i(d), !1),
                  (d.onerror = function (o) {
                    n ||
                      (err(
                        `warning: browser could not fully decode audio ${t}, trying slower base64 approach`
                      ),
                      (d.src =
                        "data:audio/x-" +
                        t.substr(-3) +
                        ";base64," +
                        (function (e) {
                          for (
                            var t =
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                              o = "",
                              r = 0,
                              n = 0,
                              i = 0;
                            i < e.length;
                            i++
                          )
                            for (r = (r << 8) | e[i], n += 8; n >= 6; ) {
                              var a = (r >> (n - 6)) & 63;
                              (n -= 6), (o += t[a]);
                            }
                          return (
                            2 == n
                              ? ((o += t[(3 & r) << 4]), (o += "=="))
                              : 4 == n && ((o += t[(15 & r) << 2]), (o += "=")),
                            o
                          );
                        })(e)),
                      i(d));
                  }),
                  (d.src = s),
                  safeSetTimeout(() => {
                    i(d);
                  }, 1e4);
              },
            };
            preloadPlugins.push(t);
            var o = Module.canvas;
            o &&
              ((o.requestPointerLock =
                o.requestPointerLock ||
                o.mozRequestPointerLock ||
                o.webkitRequestPointerLock ||
                o.msRequestPointerLock ||
                (() => {})),
              (o.exitPointerLock =
                document.exitPointerLock ||
                document.mozExitPointerLock ||
                document.webkitExitPointerLock ||
                document.msExitPointerLock ||
                (() => {})),
              (o.exitPointerLock = o.exitPointerLock.bind(document)),
              document.addEventListener("pointerlockchange", r, !1),
              document.addEventListener("mozpointerlockchange", r, !1),
              document.addEventListener("webkitpointerlockchange", r, !1),
              document.addEventListener("mspointerlockchange", r, !1),
              Module.elementPointerLock &&
                o.addEventListener(
                  "click",
                  (e) => {
                    !Browser.pointerLock &&
                      Module.canvas.requestPointerLock &&
                      (Module.canvas.requestPointerLock(), e.preventDefault());
                  },
                  !1
                ));
          }
          function r() {
            Browser.pointerLock =
              document.pointerLockElement === Module.canvas ||
              document.mozPointerLockElement === Module.canvas ||
              document.webkitPointerLockElement === Module.canvas ||
              document.msPointerLockElement === Module.canvas;
          }
        },
        createContext(e, t, o, r) {
          if (t && Module.ctx && e == Module.canvas) return Module.ctx;
          var n, i;
          if (t) {
            var a = {
              antialias: !1,
              alpha: !1,
              majorVersion:
                "undefined" != typeof WebGL2RenderingContext ? 2 : 1,
            };
            if (r) for (var s in r) a[s] = r[s];
            void 0 !== GL &&
              (i = GL.createContext(e, a)) &&
              (n = GL.getContext(i).GLctx);
          } else n = e.getContext("2d");
          return n
            ? (o &&
                (t ||
                  assert(
                    void 0 === GLctx,
                    "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"
                  ),
                (Module.ctx = n),
                t && GL.makeContextCurrent(i),
                (Module.useWebGL = t),
                Browser.moduleContextCreatedCallbacks.forEach((e) => e()),
                Browser.init()),
              n)
            : null;
        },
        destroyContext(e, t, o) {},
        fullscreenHandlersInstalled: !1,
        lockPointer: void 0,
        resizeCanvas: void 0,
        requestFullscreen(e, t) {
          (Browser.lockPointer = e),
            (Browser.resizeCanvas = t),
            void 0 === Browser.lockPointer && (Browser.lockPointer = !0),
            void 0 === Browser.resizeCanvas && (Browser.resizeCanvas = !1);
          var o = Module.canvas;
          function r() {
            Browser.isFullscreen = !1;
            var e = o.parentNode;
            (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement ||
              document.webkitFullscreenElement ||
              document.webkitCurrentFullScreenElement) === e
              ? ((o.exitFullscreen = Browser.exitFullscreen),
                Browser.lockPointer && o.requestPointerLock(),
                (Browser.isFullscreen = !0),
                Browser.resizeCanvas
                  ? Browser.setFullscreenCanvasSize()
                  : Browser.updateCanvasDimensions(o))
              : (e.parentNode.insertBefore(o, e),
                e.parentNode.removeChild(e),
                Browser.resizeCanvas
                  ? Browser.setWindowedCanvasSize()
                  : Browser.updateCanvasDimensions(o)),
              Module.onFullScreen?.(Browser.isFullscreen),
              Module.onFullscreen?.(Browser.isFullscreen);
          }
          Browser.fullscreenHandlersInstalled ||
            ((Browser.fullscreenHandlersInstalled = !0),
            document.addEventListener("fullscreenchange", r, !1),
            document.addEventListener("mozfullscreenchange", r, !1),
            document.addEventListener("webkitfullscreenchange", r, !1),
            document.addEventListener("MSFullscreenChange", r, !1));
          var n = document.createElement("div");
          o.parentNode.insertBefore(n, o),
            n.appendChild(o),
            (n.requestFullscreen =
              n.requestFullscreen ||
              n.mozRequestFullScreen ||
              n.msRequestFullscreen ||
              (n.webkitRequestFullscreen
                ? () => n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                : null) ||
              (n.webkitRequestFullScreen
                ? () => n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                : null)),
            n.requestFullscreen();
        },
        requestFullScreen() {
          abort(
            "Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)"
          );
        },
        exitFullscreen: () =>
          !!Browser.isFullscreen &&
          ((
            document.exitFullscreen ||
            document.cancelFullScreen ||
            document.mozCancelFullScreen ||
            document.msExitFullscreen ||
            document.webkitCancelFullScreen ||
            (() => {})
          ).apply(document, []),
          !0),
        nextRAF: 0,
        fakeRequestAnimationFrame(e) {
          var t = Date.now();
          if (0 === Browser.nextRAF) Browser.nextRAF = t + 1e3 / 60;
          else for (; t + 2 >= Browser.nextRAF; ) Browser.nextRAF += 1e3 / 60;
          var o = Math.max(Browser.nextRAF - t, 0);
          setTimeout(e, o);
        },
        requestAnimationFrame(e) {
          "function" != typeof requestAnimationFrame
            ? (0, Browser.fakeRequestAnimationFrame)(e)
            : requestAnimationFrame(e);
        },
        safeSetTimeout: (e, t) => safeSetTimeout(e, t),
        safeRequestAnimationFrame: (e) => (
          runtimeKeepalivePush(),
          Browser.requestAnimationFrame(() => {
            runtimeKeepalivePop(), callUserCallback(e);
          })
        ),
        getMimetype: (e) =>
          ({
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            bmp: "image/bmp",
            ogg: "audio/ogg",
            wav: "audio/wav",
            mp3: "audio/mpeg",
          }[e.substr(e.lastIndexOf(".") + 1)]),
        getUserMedia(e) {
          (window.getUserMedia ||=
            navigator.getUserMedia || navigator.mozGetUserMedia),
            window.getUserMedia(e);
        },
        getMovementX: (e) =>
          e.movementX || e.mozMovementX || e.webkitMovementX || 0,
        getMovementY: (e) =>
          e.movementY || e.mozMovementY || e.webkitMovementY || 0,
        getMouseWheelDelta(e) {
          var t = 0;
          switch (e.type) {
            case "DOMMouseScroll":
              t = e.detail / 3;
              break;
            case "mousewheel":
              t = e.wheelDelta / 120;
              break;
            case "wheel":
              switch (((t = e.deltaY), e.deltaMode)) {
                case 0:
                  t /= 100;
                  break;
                case 1:
                  t /= 3;
                  break;
                case 2:
                  t *= 80;
                  break;
                default:
                  throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
              }
              break;
            default:
              throw "unrecognized mouse wheel event: " + e.type;
          }
          return t;
        },
        mouseX: 0,
        mouseY: 0,
        mouseMovementX: 0,
        mouseMovementY: 0,
        touches: {},
        lastTouches: {},
        calculateMouseCoords(e, t) {
          var o = Module.canvas.getBoundingClientRect(),
            r = Module.canvas.width,
            n = Module.canvas.height,
            i = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
            a = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
          assert(
            void 0 !== i && void 0 !== a,
            "Unable to retrieve scroll position, mouse positions likely broken."
          );
          var s = e - (i + o.left),
            d = t - (a + o.top);
          return { x: (s *= r / o.width), y: (d *= n / o.height) };
        },
        setMouseCoords(e, t) {
          const { x: o, y: r } = Browser.calculateMouseCoords(e, t);
          (Browser.mouseMovementX = o - Browser.mouseX),
            (Browser.mouseMovementY = r - Browser.mouseY),
            (Browser.mouseX = o),
            (Browser.mouseY = r);
        },
        calculateMouseEvent(e) {
          if (Browser.pointerLock)
            "mousemove" != e.type && "mozMovementX" in e
              ? (Browser.mouseMovementX = Browser.mouseMovementY = 0)
              : ((Browser.mouseMovementX = Browser.getMovementX(e)),
                (Browser.mouseMovementY = Browser.getMovementY(e))),
              (Browser.mouseX += Browser.mouseMovementX),
              (Browser.mouseY += Browser.mouseMovementY);
          else {
            if (
              "touchstart" === e.type ||
              "touchend" === e.type ||
              "touchmove" === e.type
            ) {
              var t = e.touch;
              if (void 0 === t) return;
              var o = Browser.calculateMouseCoords(t.pageX, t.pageY);
              if ("touchstart" === e.type)
                (Browser.lastTouches[t.identifier] = o),
                  (Browser.touches[t.identifier] = o);
              else if ("touchend" === e.type || "touchmove" === e.type) {
                var r = Browser.touches[t.identifier];
                (r ||= o),
                  (Browser.lastTouches[t.identifier] = r),
                  (Browser.touches[t.identifier] = o);
              }
              return;
            }
            Browser.setMouseCoords(e.pageX, e.pageY);
          }
        },
        resizeListeners: [],
        updateResizeListeners() {
          var e = Module.canvas;
          Browser.resizeListeners.forEach((t) => t(e.width, e.height));
        },
        setCanvasSize(e, t, o) {
          var r = Module.canvas;
          Browser.updateCanvasDimensions(r, e, t),
            o || Browser.updateResizeListeners();
        },
        windowedWidth: 0,
        windowedHeight: 0,
        setFullscreenCanvasSize() {
          if ("undefined" != typeof SDL) {
            var e = HEAPU32[SDL.screen >> 2];
            (e |= 8388608), (HEAP32[SDL.screen >> 2] = e);
          }
          Browser.updateCanvasDimensions(Module.canvas),
            Browser.updateResizeListeners();
        },
        setWindowedCanvasSize() {
          if ("undefined" != typeof SDL) {
            var e = HEAPU32[SDL.screen >> 2];
            (e &= -8388609), (HEAP32[SDL.screen >> 2] = e);
          }
          Browser.updateCanvasDimensions(Module.canvas),
            Browser.updateResizeListeners();
        },
        updateCanvasDimensions(e, t, o) {
          t && o
            ? ((e.widthNative = t), (e.heightNative = o))
            : ((t = e.widthNative), (o = e.heightNative));
          var r = t,
            n = o;
          if (
            (Module.forcedAspectRatio &&
              Module.forcedAspectRatio > 0 &&
              (r / n < Module.forcedAspectRatio
                ? (r = Math.round(n * Module.forcedAspectRatio))
                : (n = Math.round(r / Module.forcedAspectRatio))),
            (document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement ||
              document.webkitFullscreenElement ||
              document.webkitCurrentFullScreenElement) === e.parentNode &&
              "undefined" != typeof screen)
          ) {
            var i = Math.min(screen.width / r, screen.height / n);
            (r = Math.round(r * i)), (n = Math.round(n * i));
          }
          Browser.resizeCanvas
            ? (e.width != r && (e.width = r),
              e.height != n && (e.height = n),
              void 0 !== e.style &&
                (e.style.removeProperty("width"),
                e.style.removeProperty("height")))
            : (e.width != t && (e.width = t),
              e.height != o && (e.height = o),
              void 0 !== e.style &&
                (r != t || n != o
                  ? (e.style.setProperty("width", r + "px", "important"),
                    e.style.setProperty("height", n + "px", "important"))
                  : (e.style.removeProperty("width"),
                    e.style.removeProperty("height"))));
        },
      },
      _emscripten_cancel_main_loop = () => {
        Browser.mainLoop.pause(), (Browser.mainLoop.func = null);
      },
      _emscripten_date_now = () => Date.now(),
      _emscripten_err = (e) => err(UTF8ToString(e)),
      _emscripten_force_exit = (e) => {
        __emscripten_runtime_keepalive_clear(), _exit(e);
      },
      getHeapMax = () => 2147483648,
      _emscripten_get_heap_max = () => getHeapMax(),
      growMemory = (e) => {
        var t = wasmMemory.buffer,
          o = (e - t.byteLength + 65535) / 65536;
        try {
          return wasmMemory.grow(o), updateMemoryViews(), 1;
        } catch (o) {
          err(
            `growMemory: Attempted to grow heap from ${t.byteLength} bytes to ${e} bytes, but got error: ${o}`
          );
        }
      },
      _emscripten_resize_heap = (e) => {
        var t = HEAPU8.length;
        assert((e >>>= 0) > t);
        var o = getHeapMax();
        if (e > o)
          return (
            err(
              `Cannot enlarge memory, requested ${e} bytes, but the limit is ${o} bytes!`
            ),
            !1
          );
        for (var r, n, i = 1; i <= 4; i *= 2) {
          var a = t * (1 + 0.2 / i);
          a = Math.min(a, e + 100663296);
          var s = Math.min(
            o,
            (r = Math.max(e, a)) + (((n = 65536) - (r % n)) % n)
          );
          if (growMemory(s)) return !0;
        }
        return (
          err(
            `Failed to grow the heap from ${t} bytes to ${s} bytes, not enough memory!`
          ),
          !1
        );
      },
      JSEvents = {
        removeAllEventListeners() {
          for (; JSEvents.eventHandlers.length; )
            JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
          JSEvents.deferredCalls = [];
        },
        registerRemoveEventListeners() {
          JSEvents.removeEventListenersRegistered ||
            (__ATEXIT__.push(JSEvents.removeAllEventListeners),
            (JSEvents.removeEventListenersRegistered = !0));
        },
        inEventHandler: 0,
        deferredCalls: [],
        deferCall(e, t, o) {
          function r(e, t) {
            if (e.length != t.length) return !1;
            for (var o in e) if (e[o] != t[o]) return !1;
            return !0;
          }
          for (var n of JSEvents.deferredCalls)
            if (n.targetFunction == e && r(n.argsList, o)) return;
          JSEvents.deferredCalls.push({
            targetFunction: e,
            precedence: t,
            argsList: o,
          }),
            JSEvents.deferredCalls.sort((e, t) => e.precedence < t.precedence);
        },
        removeDeferredCalls(e) {
          JSEvents.deferredCalls = JSEvents.deferredCalls.filter(
            (t) => t.targetFunction != e
          );
        },
        canPerformEventHandlerRequests: () =>
          navigator.userActivation
            ? navigator.userActivation.isActive
            : JSEvents.inEventHandler &&
              JSEvents.currentEventHandler.allowsDeferredCalls,
        runDeferredCalls() {
          if (JSEvents.canPerformEventHandlerRequests()) {
            var e = JSEvents.deferredCalls;
            for (var t of ((JSEvents.deferredCalls = []), e))
              t.targetFunction(...t.argsList);
          }
        },
        eventHandlers: [],
        removeAllHandlersOnTarget: (e, t) => {
          for (var o = 0; o < JSEvents.eventHandlers.length; ++o)
            JSEvents.eventHandlers[o].target != e ||
              (t && t != JSEvents.eventHandlers[o].eventTypeString) ||
              JSEvents._removeHandler(o--);
        },
        _removeHandler(e) {
          var t = JSEvents.eventHandlers[e];
          t.target.removeEventListener(
            t.eventTypeString,
            t.eventListenerFunc,
            t.useCapture
          ),
            JSEvents.eventHandlers.splice(e, 1);
        },
        registerOrRemoveHandler(e) {
          if (!e.target)
            return (
              err(
                "registerOrRemoveHandler: the target element for event handler registration does not exist, when processing the following event handler registration:"
              ),
              console.dir(e),
              -4
            );
          if (e.callbackfunc)
            (e.eventListenerFunc = function (t) {
              ++JSEvents.inEventHandler,
                (JSEvents.currentEventHandler = e),
                JSEvents.runDeferredCalls(),
                e.handlerFunc(t),
                JSEvents.runDeferredCalls(),
                --JSEvents.inEventHandler;
            }),
              e.target.addEventListener(
                e.eventTypeString,
                e.eventListenerFunc,
                e.useCapture
              ),
              JSEvents.eventHandlers.push(e),
              JSEvents.registerRemoveEventListeners();
          else
            for (var t = 0; t < JSEvents.eventHandlers.length; ++t)
              JSEvents.eventHandlers[t].target == e.target &&
                JSEvents.eventHandlers[t].eventTypeString ==
                  e.eventTypeString &&
                JSEvents._removeHandler(t--);
          return 0;
        },
        getNodeNameForTarget: (e) =>
          e
            ? e == window
              ? "#window"
              : e == screen
              ? "#screen"
              : e?.nodeName || ""
            : "",
        fullscreenEnabled: () =>
          document.fullscreenEnabled || document.webkitFullscreenEnabled,
      },
      maybeCStringToJsString = (e) => (e > 2 ? UTF8ToString(e) : e),
      specialHTMLTargets = [
        0,
        "undefined" != typeof document ? document : 0,
        "undefined" != typeof window ? window : 0,
      ],
      findEventTarget = (e) => (
        (e = maybeCStringToJsString(e)),
        specialHTMLTargets[e] ||
          ("undefined" != typeof document ? document.querySelector(e) : void 0)
      ),
      findCanvasEventTarget = findEventTarget,
      _emscripten_set_canvas_element_size = (e, t, o) => {
        var r = findCanvasEventTarget(e);
        return r
          ? ((r.width = t),
            (r.height = o),
            r.GLctxObject && GL.resizeOffscreenFramebuffer(r.GLctxObject),
            0)
          : -4;
      },
      _emscripten_set_main_loop = (e, t, o) => {
        var r = getWasmTableEntry(e);
        setMainLoop(r, t, o);
      },
      webglPowerPreferences = ["default", "low-power", "high-performance"],
      _emscripten_webgl_do_create_context = (e, t) => {
        assert(t);
        var o = t >> 2,
          r = HEAP32[o + 2],
          n = {
            alpha: !!HEAP8[t + 0],
            depth: !!HEAP8[t + 1],
            stencil: !!HEAP8[t + 2],
            antialias: !!HEAP8[t + 3],
            premultipliedAlpha: !!HEAP8[t + 4],
            preserveDrawingBuffer: !!HEAP8[t + 5],
            powerPreference: webglPowerPreferences[r],
            failIfMajorPerformanceCaveat: !!HEAP8[t + 12],
            majorVersion: HEAP32[o + 4],
            minorVersion: HEAP32[o + 5],
            enableExtensionsByDefault: HEAP8[t + 24],
            explicitSwapControl: HEAP8[t + 25],
            proxyContextToMainThread: HEAP32[o + 7],
            renderViaOffscreenBackBuffer: HEAP8[t + 32],
          },
          i = findCanvasEventTarget(e);
        return i
          ? (n.explicitSwapControl &&
              !n.renderViaOffscreenBackBuffer &&
              (n.renderViaOffscreenBackBuffer = !0),
            GL.createContext(i, n))
          : 0;
      },
      _emscripten_webgl_create_context = _emscripten_webgl_do_create_context,
      _emscripten_webgl_destroy_context = (e) => {
        GL.currentContext == e && (GL.currentContext = 0), GL.deleteContext(e);
      },
      _emscripten_webgl_enable_extension = (e, t) => {
        var o = GL.getContext(e),
          r = UTF8ToString(t);
        return (
          r.startsWith("GL_") && (r = r.substr(3)),
          "ANGLE_instanced_arrays" == r &&
            webgl_enable_ANGLE_instanced_arrays(GLctx),
          "OES_vertex_array_object" == r &&
            webgl_enable_OES_vertex_array_object(GLctx),
          "WEBGL_draw_buffers" == r && webgl_enable_WEBGL_draw_buffers(GLctx),
          "WEBGL_draw_instanced_base_vertex_base_instance" == r &&
            webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx),
          "WEBGL_multi_draw_instanced_base_vertex_base_instance" == r &&
            webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(
              GLctx
            ),
          "WEBGL_multi_draw" == r && webgl_enable_WEBGL_multi_draw(GLctx),
          !!o.GLctx.getExtension(r)
        );
      },
      stringToNewUTF8 = (e) => {
        var t = lengthBytesUTF8(e) + 1,
          o = _malloc(t);
        return o && stringToUTF8(e, o, t), o;
      },
      _emscripten_webgl_get_supported_extensions = () =>
        stringToNewUTF8(GLctx.getSupportedExtensions().join(" ")),
      _emscripten_webgl_make_context_current = (e) =>
        GL.makeContextCurrent(e) ? 0 : -5,
      ENV = {},
      getExecutableName = () => thisProgram || "./this.program",
      getEnvStrings = () => {
        if (!getEnvStrings.strings) {
          var e = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG:
              (
                ("object" == typeof navigator &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8",
            _: getExecutableName(),
          };
          for (var t in ENV) void 0 === ENV[t] ? delete e[t] : (e[t] = ENV[t]);
          var o = [];
          for (var t in e) o.push(`${t}=${e[t]}`);
          getEnvStrings.strings = o;
        }
        return getEnvStrings.strings;
      },
      stringToAscii = (e, t) => {
        for (var o = 0; o < e.length; ++o)
          assert(e.charCodeAt(o) === (255 & e.charCodeAt(o))),
            (HEAP8[t++] = e.charCodeAt(o));
        HEAP8[t] = 0;
      },
      _environ_get = (e, t) => {
        var o = 0;
        return (
          getEnvStrings().forEach((r, n) => {
            var i = t + o;
            (HEAPU32[(e + 4 * n) >> 2] = i),
              stringToAscii(r, i),
              (o += r.length + 1);
          }),
          0
        );
      },
      _environ_sizes_get = (e, t) => {
        var o = getEnvStrings();
        HEAPU32[e >> 2] = o.length;
        var r = 0;
        return o.forEach((e) => (r += e.length + 1)), (HEAPU32[t >> 2] = r), 0;
      };
    function _fd_close(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return FS.close(t), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return e.errno;
      }
    }
    function _fd_fdstat_get(e, t) {
      try {
        var o = SYSCALLS.getStreamFromFD(e),
          r = o.tty ? 2 : FS.isDir(o.mode) ? 3 : FS.isLink(o.mode) ? 7 : 4;
        return (
          (HEAP8[t] = r),
          (HEAP16[(t + 2) >> 1] = 0),
          (HEAP64[(t + 8) >> 3] = BigInt(0)),
          (HEAP64[(t + 16) >> 3] = BigInt(0)),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return e.errno;
      }
    }
    var doReadv = (e, t, o, r) => {
      for (var n = 0, i = 0; i < o; i++) {
        var a = HEAPU32[t >> 2],
          s = HEAPU32[(t + 4) >> 2];
        t += 8;
        var d = FS.read(e, HEAP8, a, s, r);
        if (d < 0) return -1;
        if (((n += d), d < s)) break;
        void 0 !== r && (r += d);
      }
      return n;
    };
    function _fd_read(e, t, o, r) {
      try {
        var n = SYSCALLS.getStreamFromFD(e),
          i = doReadv(n, t, o);
        return (HEAPU32[r >> 2] = i), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return e.errno;
      }
    }
    function _fd_seek(e, t, o, r) {
      t = bigintToI53Checked(t);
      try {
        if (isNaN(t)) return 61;
        var n = SYSCALLS.getStreamFromFD(e);
        return (
          FS.llseek(n, t, o),
          (HEAP64[r >> 3] = BigInt(n.position)),
          n.getdents && 0 === t && 0 === o && (n.getdents = null),
          0
        );
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return e.errno;
      }
    }
    var doWritev = (e, t, o, r) => {
      for (var n = 0, i = 0; i < o; i++) {
        var a = HEAPU32[t >> 2],
          s = HEAPU32[(t + 4) >> 2];
        t += 8;
        var d = FS.write(e, HEAP8, a, s, r);
        if (d < 0) return -1;
        (n += d), void 0 !== r && (r += d);
      }
      return n;
    };
    function _fd_write(e, t, o, r) {
      try {
        var n = SYSCALLS.getStreamFromFD(e),
          i = doWritev(n, t, o);
        return (HEAPU32[r >> 2] = i), 0;
      } catch (e) {
        if (void 0 === FS || "ErrnoError" !== e.name) throw e;
        return e.errno;
      }
    }
    var _glActiveTexture = (e) => GLctx.activeTexture(e),
      _glAttachShader = (e, t) => {
        GLctx.attachShader(GL.programs[e], GL.shaders[t]);
      },
      _glBeginTransformFeedback = (e) => GLctx.beginTransformFeedback(e),
      _glBindBuffer = (e, t) => {
        35051 == e
          ? (GLctx.currentPixelPackBufferBinding = t)
          : 35052 == e && (GLctx.currentPixelUnpackBufferBinding = t),
          GLctx.bindBuffer(e, GL.buffers[t]);
      },
      _glBindBufferBase = (e, t, o) => {
        GLctx.bindBufferBase(e, t, GL.buffers[o]);
      },
      _glBindBufferRange = (e, t, o, r, n) => {
        GLctx.bindBufferRange(e, t, GL.buffers[o], r, n);
      },
      _glBindFramebuffer = (e, t) => {
        GLctx.bindFramebuffer(
          e,
          t ? GL.framebuffers[t] : GL.currentContext.defaultFbo
        );
      },
      _glBindRenderbuffer = (e, t) => {
        GLctx.bindRenderbuffer(e, GL.renderbuffers[t]);
      },
      _glBindTexture = (e, t) => {
        GLctx.bindTexture(e, GL.textures[t]);
      },
      _glBindVertexArray = (e) => {
        GLctx.bindVertexArray(GL.vaos[e]);
      },
      _glBlendColor = (e, t, o, r) => GLctx.blendColor(e, t, o, r),
      _glBlendEquation = (e) => GLctx.blendEquation(e),
      _glBlendFunc = (e, t) => GLctx.blendFunc(e, t),
      _glBlendFuncSeparate = (e, t, o, r) =>
        GLctx.blendFuncSeparate(e, t, o, r),
      _glBlitFramebuffer = (e, t, o, r, n, i, a, s, d, l) =>
        GLctx.blitFramebuffer(e, t, o, r, n, i, a, s, d, l),
      _glBufferData = (e, t, o, r) => {
        GL.currentContext.version >= 2
          ? o && t
            ? GLctx.bufferData(e, HEAPU8, r, o, t)
            : GLctx.bufferData(e, t, r)
          : GLctx.bufferData(e, o ? HEAPU8.subarray(o, o + t) : t, r);
      },
      _glBufferSubData = (e, t, o, r) => {
        GL.currentContext.version >= 2
          ? o && GLctx.bufferSubData(e, t, HEAPU8, r, o)
          : GLctx.bufferSubData(e, t, HEAPU8.subarray(r, r + o));
      },
      _glCheckFramebufferStatus = (e) => GLctx.checkFramebufferStatus(e),
      _glClear = (e) => GLctx.clear(e),
      _glClearBufferfv = (e, t, o) => {
        GLctx.clearBufferfv(e, t, HEAPF32, o >> 2);
      },
      _glClearColor = (e, t, o, r) => GLctx.clearColor(e, t, o, r),
      _glClearDepthf = (e) => GLctx.clearDepth(e),
      _glColorMask = (e, t, o, r) => {
        GLctx.colorMask(!!e, !!t, !!o, !!r);
      },
      _glCompileShader = (e) => {
        GLctx.compileShader(GL.shaders[e]);
      },
      _glCompressedTexImage2D = (e, t, o, r, n, i, a, s) => {
        if (GL.currentContext.version >= 2)
          return GLctx.currentPixelUnpackBufferBinding || !a
            ? void GLctx.compressedTexImage2D(e, t, o, r, n, i, a, s)
            : void GLctx.compressedTexImage2D(e, t, o, r, n, i, HEAPU8, s, a);
        GLctx.compressedTexImage2D(
          e,
          t,
          o,
          r,
          n,
          i,
          s ? HEAPU8.subarray(s, s + a) : null
        );
      },
      _glCompressedTexImage3D = (e, t, o, r, n, i, a, s, d) => {
        GLctx.currentPixelUnpackBufferBinding
          ? GLctx.compressedTexImage3D(e, t, o, r, n, i, a, s, d)
          : GLctx.compressedTexImage3D(e, t, o, r, n, i, a, HEAPU8, d, s);
      },
      _glCompressedTexSubImage3D = (e, t, o, r, n, i, a, s, d, l, u) => {
        GLctx.currentPixelUnpackBufferBinding
          ? GLctx.compressedTexSubImage3D(e, t, o, r, n, i, a, s, d, l, u)
          : GLctx.compressedTexSubImage3D(
              e,
              t,
              o,
              r,
              n,
              i,
              a,
              s,
              d,
              HEAPU8,
              u,
              l
            );
      },
      _glCopyBufferSubData = (e, t, o, r, n) =>
        GLctx.copyBufferSubData(e, t, o, r, n),
      _glCreateProgram = () => {
        var e = GL.getNewId(GL.programs),
          t = GLctx.createProgram();
        return (
          (t.name = e),
          (t.maxUniformLength =
            t.maxAttributeLength =
            t.maxUniformBlockNameLength =
              0),
          (t.uniformIdCounter = 1),
          (GL.programs[e] = t),
          e
        );
      },
      _glCreateShader = (e) => {
        var t = GL.getNewId(GL.shaders);
        return (GL.shaders[t] = GLctx.createShader(e)), t;
      },
      _glCullFace = (e) => GLctx.cullFace(e),
      _glDeleteBuffers = (e, t) => {
        for (var o = 0; o < e; o++) {
          var r = HEAP32[(t + 4 * o) >> 2],
            n = GL.buffers[r];
          n &&
            (GLctx.deleteBuffer(n),
            (n.name = 0),
            (GL.buffers[r] = null),
            r == GLctx.currentPixelPackBufferBinding &&
              (GLctx.currentPixelPackBufferBinding = 0),
            r == GLctx.currentPixelUnpackBufferBinding &&
              (GLctx.currentPixelUnpackBufferBinding = 0));
        }
      },
      _glDeleteFramebuffers = (e, t) => {
        for (var o = 0; o < e; ++o) {
          var r = HEAP32[(t + 4 * o) >> 2],
            n = GL.framebuffers[r];
          n &&
            (GLctx.deleteFramebuffer(n),
            (n.name = 0),
            (GL.framebuffers[r] = null));
        }
      },
      _glDeleteProgram = (e) => {
        if (e) {
          var t = GL.programs[e];
          t
            ? (GLctx.deleteProgram(t), (t.name = 0), (GL.programs[e] = null))
            : GL.recordError(1281);
        }
      },
      _glDeleteQueries = (e, t) => {
        for (var o = 0; o < e; o++) {
          var r = HEAP32[(t + 4 * o) >> 2],
            n = GL.queries[r];
          n && (GLctx.deleteQuery(n), (GL.queries[r] = null));
        }
      },
      _glDeleteRenderbuffers = (e, t) => {
        for (var o = 0; o < e; o++) {
          var r = HEAP32[(t + 4 * o) >> 2],
            n = GL.renderbuffers[r];
          n &&
            (GLctx.deleteRenderbuffer(n),
            (n.name = 0),
            (GL.renderbuffers[r] = null));
        }
      },
      _glDeleteShader = (e) => {
        if (e) {
          var t = GL.shaders[e];
          t
            ? (GLctx.deleteShader(t), (GL.shaders[e] = null))
            : GL.recordError(1281);
        }
      },
      _glDeleteSync = (e) => {
        if (e) {
          var t = GL.syncs[e];
          t
            ? (GLctx.deleteSync(t), (t.name = 0), (GL.syncs[e] = null))
            : GL.recordError(1281);
        }
      },
      _glDeleteTextures = (e, t) => {
        for (var o = 0; o < e; o++) {
          var r = HEAP32[(t + 4 * o) >> 2],
            n = GL.textures[r];
          n && (GLctx.deleteTexture(n), (n.name = 0), (GL.textures[r] = null));
        }
      },
      _glDeleteVertexArrays = (e, t) => {
        for (var o = 0; o < e; o++) {
          var r = HEAP32[(t + 4 * o) >> 2];
          GLctx.deleteVertexArray(GL.vaos[r]), (GL.vaos[r] = null);
        }
      },
      _glDepthFunc = (e) => GLctx.depthFunc(e),
      _glDepthMask = (e) => {
        GLctx.depthMask(!!e);
      },
      _glDisable = (e) => GLctx.disable(e),
      _glDisableVertexAttribArray = (e) => {
        GLctx.disableVertexAttribArray(e);
      },
      _glDrawArrays = (e, t, o) => {
        GLctx.drawArrays(e, t, o);
      },
      _glDrawArraysInstanced = (e, t, o, r) => {
        GLctx.drawArraysInstanced(e, t, o, r);
      },
      tempFixedLengthArray = [],
      _glDrawBuffers = (e, t) => {
        for (var o = tempFixedLengthArray[e], r = 0; r < e; r++)
          o[r] = HEAP32[(t + 4 * r) >> 2];
        GLctx.drawBuffers(o);
      },
      _glDrawElements = (e, t, o, r) => {
        GLctx.drawElements(e, t, o, r);
      },
      _glDrawElementsInstanced = (e, t, o, r, n) => {
        GLctx.drawElementsInstanced(e, t, o, r, n);
      },
      _glEnable = (e) => GLctx.enable(e),
      _glEnableVertexAttribArray = (e) => {
        GLctx.enableVertexAttribArray(e);
      },
      _glEndTransformFeedback = () => GLctx.endTransformFeedback(),
      _glFenceSync = (e, t) => {
        var o = GLctx.fenceSync(e, t);
        if (o) {
          var r = GL.getNewId(GL.syncs);
          return (o.name = r), (GL.syncs[r] = o), r;
        }
        return 0;
      },
      _glFinish = () => GLctx.finish(),
      _glFramebufferRenderbuffer = (e, t, o, r) => {
        GLctx.framebufferRenderbuffer(e, t, o, GL.renderbuffers[r]);
      },
      _glFramebufferTexture2D = (e, t, o, r, n) => {
        GLctx.framebufferTexture2D(e, t, o, GL.textures[r], n);
      },
      _glFramebufferTextureLayer = (e, t, o, r, n) => {
        GLctx.framebufferTextureLayer(e, t, GL.textures[o], r, n);
      },
      _glFrontFace = (e) => GLctx.frontFace(e),
      _glGenBuffers = (e, t) => {
        GL.genObject(e, t, "createBuffer", GL.buffers);
      },
      _glGenFramebuffers = (e, t) => {
        GL.genObject(e, t, "createFramebuffer", GL.framebuffers);
      },
      _glGenQueries = (e, t) => {
        GL.genObject(e, t, "createQuery", GL.queries);
      },
      _glGenRenderbuffers = (e, t) => {
        GL.genObject(e, t, "createRenderbuffer", GL.renderbuffers);
      },
      _glGenTextures = (e, t) => {
        GL.genObject(e, t, "createTexture", GL.textures);
      },
      _glGenVertexArrays = (e, t) => {
        GL.genObject(e, t, "createVertexArray", GL.vaos);
      },
      _glGenerateMipmap = (e) => GLctx.generateMipmap(e),
      readI53FromI64 = (e) =>
        HEAPU32[e >> 2] + 4294967296 * HEAP32[(e + 4) >> 2],
      readI53FromU64 = (e) =>
        HEAPU32[e >> 2] + 4294967296 * HEAPU32[(e + 4) >> 2],
      writeI53ToI64 = (e, t) => {
        HEAPU32[e >> 2] = t;
        var o = HEAPU32[e >> 2];
        HEAPU32[(e + 4) >> 2] = (t - o) / 4294967296;
        var r = t >= 0 ? readI53FromU64(e) : readI53FromI64(e),
          n = e >> 2;
        r != t &&
          warnOnce(
            `writeI53ToI64() out of range: serialized JS Number ${t} to Wasm heap as bytes lo=${ptrToString(
              HEAPU32[n]
            )}, hi=${ptrToString(
              HEAPU32[n + 1]
            )}, which deserializes back to ${r} instead!`
          );
      },
      webglGetExtensions = function () {
        var e = getEmscriptenSupportedExtensions(GLctx);
        return (e = e.concat(e.map((e) => "GL_" + e)));
      },
      emscriptenWebGLGet = (e, t, o) => {
        if (t) {
          var r = void 0;
          switch (e) {
            case 36346:
              r = 1;
              break;
            case 36344:
              return void (0 != o && 1 != o && GL.recordError(1280));
            case 34814:
            case 36345:
              r = 0;
              break;
            case 34466:
              var n = GLctx.getParameter(34467);
              r = n ? n.length : 0;
              break;
            case 33309:
              if (GL.currentContext.version < 2)
                return void GL.recordError(1282);
              r = webglGetExtensions().length;
              break;
            case 33307:
            case 33308:
              if (GL.currentContext.version < 2)
                return void GL.recordError(1280);
              r = 33307 == e ? 3 : 0;
          }
          if (void 0 === r) {
            var i = GLctx.getParameter(e);
            switch (typeof i) {
              case "number":
                r = i;
                break;
              case "boolean":
                r = i ? 1 : 0;
                break;
              case "string":
                return void GL.recordError(1280);
              case "object":
                if (null === i)
                  switch (e) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 36662:
                    case 36663:
                    case 35053:
                    case 35055:
                    case 36010:
                    case 35097:
                    case 35869:
                    case 32874:
                    case 36389:
                    case 35983:
                    case 35368:
                    case 34068:
                      r = 0;
                      break;
                    default:
                      return void GL.recordError(1280);
                  }
                else {
                  if (
                    i instanceof Float32Array ||
                    i instanceof Uint32Array ||
                    i instanceof Int32Array ||
                    i instanceof Array
                  ) {
                    for (var a = 0; a < i.length; ++a)
                      switch (o) {
                        case 0:
                          HEAP32[(t + 4 * a) >> 2] = i[a];
                          break;
                        case 2:
                          HEAPF32[(t + 4 * a) >> 2] = i[a];
                          break;
                        case 4:
                          HEAP8[t + a] = i[a] ? 1 : 0;
                      }
                    return;
                  }
                  try {
                    r = 0 | i.name;
                  } catch (t) {
                    return (
                      GL.recordError(1280),
                      void err(
                        `GL_INVALID_ENUM in glGet${o}v: Unknown object returned from WebGL getParameter(${e})! (error: ${t})`
                      )
                    );
                  }
                }
                break;
              default:
                return (
                  GL.recordError(1280),
                  void err(
                    `GL_INVALID_ENUM in glGet${o}v: Native code calling glGet${o}v(${e}) and it returns ${i} of type ${typeof i}!`
                  )
                );
            }
          }
          switch (o) {
            case 1:
              writeI53ToI64(t, r);
              break;
            case 0:
              HEAP32[t >> 2] = r;
              break;
            case 2:
              HEAPF32[t >> 2] = r;
              break;
            case 4:
              HEAP8[t] = r ? 1 : 0;
          }
        } else GL.recordError(1281);
      },
      _glGetFloatv = (e, t) => emscriptenWebGLGet(e, t, 2),
      _glGetInteger64v = (e, t) => {
        emscriptenWebGLGet(e, t, 1);
      },
      _glGetIntegerv = (e, t) => emscriptenWebGLGet(e, t, 0),
      _glGetProgramInfoLog = (e, t, o, r) => {
        var n = GLctx.getProgramInfoLog(GL.programs[e]);
        null === n && (n = "(unknown error)");
        var i = t > 0 && r ? stringToUTF8(n, r, t) : 0;
        o && (HEAP32[o >> 2] = i);
      },
      _glGetProgramiv = (e, t, o) => {
        if (o)
          if (e >= GL.counter) GL.recordError(1281);
          else if (((e = GL.programs[e]), 35716 == t)) {
            var r = GLctx.getProgramInfoLog(e);
            null === r && (r = "(unknown error)"),
              (HEAP32[o >> 2] = r.length + 1);
          } else if (35719 == t) {
            if (!e.maxUniformLength)
              for (var n = 0; n < GLctx.getProgramParameter(e, 35718); ++n)
                e.maxUniformLength = Math.max(
                  e.maxUniformLength,
                  GLctx.getActiveUniform(e, n).name.length + 1
                );
            HEAP32[o >> 2] = e.maxUniformLength;
          } else if (35722 == t) {
            if (!e.maxAttributeLength)
              for (n = 0; n < GLctx.getProgramParameter(e, 35721); ++n)
                e.maxAttributeLength = Math.max(
                  e.maxAttributeLength,
                  GLctx.getActiveAttrib(e, n).name.length + 1
                );
            HEAP32[o >> 2] = e.maxAttributeLength;
          } else if (35381 == t) {
            if (!e.maxUniformBlockNameLength)
              for (n = 0; n < GLctx.getProgramParameter(e, 35382); ++n)
                e.maxUniformBlockNameLength = Math.max(
                  e.maxUniformBlockNameLength,
                  GLctx.getActiveUniformBlockName(e, n).length + 1
                );
            HEAP32[o >> 2] = e.maxUniformBlockNameLength;
          } else HEAP32[o >> 2] = GLctx.getProgramParameter(e, t);
        else GL.recordError(1281);
      },
      _glGetShaderInfoLog = (e, t, o, r) => {
        var n = GLctx.getShaderInfoLog(GL.shaders[e]);
        null === n && (n = "(unknown error)");
        var i = t > 0 && r ? stringToUTF8(n, r, t) : 0;
        o && (HEAP32[o >> 2] = i);
      },
      _glGetShaderiv = (e, t, o) => {
        if (o)
          if (35716 == t) {
            var r = GLctx.getShaderInfoLog(GL.shaders[e]);
            null === r && (r = "(unknown error)");
            var n = r ? r.length + 1 : 0;
            HEAP32[o >> 2] = n;
          } else if (35720 == t) {
            var i = GLctx.getShaderSource(GL.shaders[e]),
              a = i ? i.length + 1 : 0;
            HEAP32[o >> 2] = a;
          } else HEAP32[o >> 2] = GLctx.getShaderParameter(GL.shaders[e], t);
        else GL.recordError(1281);
      },
      _glGetString = (e) => {
        var t = GL.stringCache[e];
        if (!t) {
          switch (e) {
            case 7939:
              t = stringToNewUTF8(webglGetExtensions().join(" "));
              break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
              var o = GLctx.getParameter(e);
              o || GL.recordError(1280), (t = o ? stringToNewUTF8(o) : 0);
              break;
            case 7938:
              var r = GLctx.getParameter(7938);
              (r =
                GL.currentContext.version >= 2
                  ? `OpenGL ES 3.0 (${r})`
                  : `OpenGL ES 2.0 (${r})`),
                (t = stringToNewUTF8(r));
              break;
            case 35724:
              var n = GLctx.getParameter(35724),
                i = n.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
              null !== i &&
                (3 == i[1].length && (i[1] = i[1] + "0"),
                (n = `OpenGL ES GLSL ES ${i[1]} (${n})`)),
                (t = stringToNewUTF8(n));
              break;
            default:
              GL.recordError(1280);
          }
          GL.stringCache[e] = t;
        }
        return t;
      },
      _glGetSynciv = (e, t, o, r, n) => {
        if (o < 0) GL.recordError(1281);
        else if (n) {
          var i = GLctx.getSyncParameter(GL.syncs[e], t);
          null !== i && ((HEAP32[n >> 2] = i), r && (HEAP32[r >> 2] = 1));
        } else GL.recordError(1281);
      },
      _glGetUniformBlockIndex = (e, t) =>
        GLctx.getUniformBlockIndex(GL.programs[e], UTF8ToString(t)),
      jstoi_q = (e) => parseInt(e),
      webglGetLeftBracePos = (e) => "]" == e.slice(-1) && e.lastIndexOf("["),
      webglPrepareUniformLocationsBeforeFirstUse = (e) => {
        var t,
          o,
          r = e.uniformLocsById,
          n = e.uniformSizeAndIdsByName;
        if (!r)
          for (
            e.uniformLocsById = r = {}, e.uniformArrayNamesById = {}, t = 0;
            t < GLctx.getProgramParameter(e, 35718);
            ++t
          ) {
            var i = GLctx.getActiveUniform(e, t),
              a = i.name,
              s = i.size,
              d = webglGetLeftBracePos(a),
              l = d > 0 ? a.slice(0, d) : a,
              u = e.uniformIdCounter;
            for (e.uniformIdCounter += s, n[l] = [s, u], o = 0; o < s; ++o)
              (r[u] = o), (e.uniformArrayNamesById[u++] = l);
          }
      },
      _glGetUniformLocation = (e, t) => {
        if (((t = UTF8ToString(t)), (e = GL.programs[e]))) {
          webglPrepareUniformLocationsBeforeFirstUse(e);
          var o = e.uniformLocsById,
            r = 0,
            n = t,
            i = webglGetLeftBracePos(t);
          i > 0 && ((r = jstoi_q(t.slice(i + 1)) >>> 0), (n = t.slice(0, i)));
          var a = e.uniformSizeAndIdsByName[n];
          if (
            a &&
            r < a[0] &&
            (o[(r += a[1])] = o[r] || GLctx.getUniformLocation(e, t))
          )
            return r;
        } else GL.recordError(1281);
        return -1;
      },
      _glLinkProgram = (e) => {
        (e = GL.programs[e]),
          GLctx.linkProgram(e),
          (e.uniformLocsById = 0),
          (e.uniformSizeAndIdsByName = {});
      },
      _glPixelStorei = (e, t) => {
        3317 == e
          ? (GL.unpackAlignment = t)
          : 3314 == e && (GL.unpackRowLength = t),
          GLctx.pixelStorei(e, t);
      },
      _glReadBuffer = (e) => GLctx.readBuffer(e),
      computeUnpackAlignedImageSize = (e, t, o) => {
        var r,
          n,
          i = (GL.unpackRowLength || e) * o;
        return t * ((r = i), (n = GL.unpackAlignment), (r + n - 1) & -n);
      },
      colorChannelsInGlTextureFormat = (e) =>
        ({
          5: 3,
          6: 4,
          8: 2,
          29502: 3,
          29504: 4,
          26917: 2,
          26918: 2,
          29846: 3,
          29847: 4,
        }[e - 6402] || 1),
      heapObjectForWebGLType = (e) =>
        0 == (e -= 5120)
          ? HEAP8
          : 1 == e
          ? HEAPU8
          : 2 == e
          ? HEAP16
          : 4 == e
          ? HEAP32
          : 6 == e
          ? HEAPF32
          : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
          ? HEAPU32
          : HEAPU16,
      toTypedArrayIndex = (e, t) =>
        e >>> (31 - Math.clz32(t.BYTES_PER_ELEMENT)),
      emscriptenWebGLGetTexPixelData = (e, t, o, r, n, i) => {
        var a = heapObjectForWebGLType(e),
          s = colorChannelsInGlTextureFormat(t) * a.BYTES_PER_ELEMENT,
          d = computeUnpackAlignedImageSize(o, r, s);
        return a.subarray(toTypedArrayIndex(n, a), toTypedArrayIndex(n + d, a));
      },
      _glReadPixels = (e, t, o, r, n, i, a) => {
        if (GL.currentContext.version >= 2) {
          if (GLctx.currentPixelPackBufferBinding)
            return void GLctx.readPixels(e, t, o, r, n, i, a);
          var s = heapObjectForWebGLType(i),
            d = toTypedArrayIndex(a, s);
          GLctx.readPixels(e, t, o, r, n, i, s, d);
        } else {
          var l = emscriptenWebGLGetTexPixelData(i, n, o, r, a, n);
          l ? GLctx.readPixels(e, t, o, r, n, i, l) : GL.recordError(1280);
        }
      },
      _glRenderbufferStorage = (e, t, o, r) =>
        GLctx.renderbufferStorage(e, t, o, r),
      _glRenderbufferStorageMultisample = (e, t, o, r, n) =>
        GLctx.renderbufferStorageMultisample(e, t, o, r, n),
      _glScissor = (e, t, o, r) => GLctx.scissor(e, t, o, r),
      _glShaderSource = (e, t, o, r) => {
        var n = GL.getSource(e, t, o, r);
        GLctx.shaderSource(GL.shaders[e], n);
      },
      _glTexImage2D = (e, t, o, r, n, i, a, s, d) => {
        if (GL.currentContext.version >= 2) {
          if (GLctx.currentPixelUnpackBufferBinding)
            return void GLctx.texImage2D(e, t, o, r, n, i, a, s, d);
          if (d) {
            var l = heapObjectForWebGLType(s),
              u = toTypedArrayIndex(d, l);
            return void GLctx.texImage2D(e, t, o, r, n, i, a, s, l, u);
          }
        }
        var c = d ? emscriptenWebGLGetTexPixelData(s, a, r, n, d, o) : null;
        GLctx.texImage2D(e, t, o, r, n, i, a, s, c);
      },
      _glTexImage3D = (e, t, o, r, n, i, a, s, d, l) => {
        if (GLctx.currentPixelUnpackBufferBinding)
          GLctx.texImage3D(e, t, o, r, n, i, a, s, d, l);
        else if (l) {
          var u = heapObjectForWebGLType(d);
          GLctx.texImage3D(
            e,
            t,
            o,
            r,
            n,
            i,
            a,
            s,
            d,
            u,
            toTypedArrayIndex(l, u)
          );
        } else GLctx.texImage3D(e, t, o, r, n, i, a, s, d, null);
      },
      _glTexParameterf = (e, t, o) => GLctx.texParameterf(e, t, o),
      _glTexParameteri = (e, t, o) => GLctx.texParameteri(e, t, o),
      _glTexStorage2D = (e, t, o, r, n) => GLctx.texStorage2D(e, t, o, r, n),
      _glTexSubImage3D = (e, t, o, r, n, i, a, s, d, l, u) => {
        if (GLctx.currentPixelUnpackBufferBinding)
          GLctx.texSubImage3D(e, t, o, r, n, i, a, s, d, l, u);
        else if (u) {
          var c = heapObjectForWebGLType(l);
          GLctx.texSubImage3D(
            e,
            t,
            o,
            r,
            n,
            i,
            a,
            s,
            d,
            l,
            c,
            toTypedArrayIndex(u, c)
          );
        } else GLctx.texSubImage3D(e, t, o, r, n, i, a, s, d, l, null);
      },
      _glTransformFeedbackVaryings = (e, t, o, r) => {
        e = GL.programs[e];
        for (var n = [], i = 0; i < t; i++)
          n.push(UTF8ToString(HEAP32[(o + 4 * i) >> 2]));
        GLctx.transformFeedbackVaryings(e, n, r);
      },
      webglGetUniformLocation = (e) => {
        var t = GLctx.currentProgram;
        if (t) {
          var o = t.uniformLocsById[e];
          return (
            "number" == typeof o &&
              (t.uniformLocsById[e] = o =
                GLctx.getUniformLocation(
                  t,
                  t.uniformArrayNamesById[e] + (o > 0 ? `[${o}]` : "")
                )),
            o
          );
        }
        GL.recordError(1282);
      },
      _glUniform1f = (e, t) => {
        GLctx.uniform1f(webglGetUniformLocation(e), t);
      },
      _glUniform1i = (e, t) => {
        GLctx.uniform1i(webglGetUniformLocation(e), t);
      },
      miniTempWebGLIntBuffers = [],
      _glUniform1iv = (e, t, o) => {
        if (GL.currentContext.version >= 2)
          t && GLctx.uniform1iv(webglGetUniformLocation(e), HEAP32, o >> 2, t);
        else {
          if (t <= 288)
            for (var r = miniTempWebGLIntBuffers[t], n = 0; n < t; ++n)
              r[n] = HEAP32[(o + 4 * n) >> 2];
          else r = HEAP32.subarray(o >> 2, (o + 4 * t) >> 2);
          GLctx.uniform1iv(webglGetUniformLocation(e), r);
        }
      },
      _glUniform1ui = (e, t) => {
        GLctx.uniform1ui(webglGetUniformLocation(e), t);
      },
      _glUniform1uiv = (e, t, o) => {
        t && GLctx.uniform1uiv(webglGetUniformLocation(e), HEAPU32, o >> 2, t);
      },
      _glUniform2f = (e, t, o) => {
        GLctx.uniform2f(webglGetUniformLocation(e), t, o);
      },
      miniTempWebGLFloatBuffers = [],
      _glUniform2fv = (e, t, o) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniform2fv(
              webglGetUniformLocation(e),
              HEAPF32,
              o >> 2,
              2 * t
            );
        else {
          if (t <= 144)
            for (
              var r = miniTempWebGLFloatBuffers[2 * t], n = 0;
              n < 2 * t;
              n += 2
            )
              (r[n] = HEAPF32[(o + 4 * n) >> 2]),
                (r[n + 1] = HEAPF32[(o + (4 * n + 4)) >> 2]);
          else r = HEAPF32.subarray(o >> 2, (o + 8 * t) >> 2);
          GLctx.uniform2fv(webglGetUniformLocation(e), r);
        }
      },
      _glUniform2iv = (e, t, o) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniform2iv(webglGetUniformLocation(e), HEAP32, o >> 2, 2 * t);
        else {
          if (t <= 144)
            for (
              var r = miniTempWebGLIntBuffers[2 * t], n = 0;
              n < 2 * t;
              n += 2
            )
              (r[n] = HEAP32[(o + 4 * n) >> 2]),
                (r[n + 1] = HEAP32[(o + (4 * n + 4)) >> 2]);
          else r = HEAP32.subarray(o >> 2, (o + 8 * t) >> 2);
          GLctx.uniform2iv(webglGetUniformLocation(e), r);
        }
      },
      _glUniform3fv = (e, t, o) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniform3fv(
              webglGetUniformLocation(e),
              HEAPF32,
              o >> 2,
              3 * t
            );
        else {
          if (t <= 96)
            for (
              var r = miniTempWebGLFloatBuffers[3 * t], n = 0;
              n < 3 * t;
              n += 3
            )
              (r[n] = HEAPF32[(o + 4 * n) >> 2]),
                (r[n + 1] = HEAPF32[(o + (4 * n + 4)) >> 2]),
                (r[n + 2] = HEAPF32[(o + (4 * n + 8)) >> 2]);
          else r = HEAPF32.subarray(o >> 2, (o + 12 * t) >> 2);
          GLctx.uniform3fv(webglGetUniformLocation(e), r);
        }
      },
      _glUniform4f = (e, t, o, r, n) => {
        GLctx.uniform4f(webglGetUniformLocation(e), t, o, r, n);
      },
      _glUniform4fv = (e, t, o) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniform4fv(
              webglGetUniformLocation(e),
              HEAPF32,
              o >> 2,
              4 * t
            );
        else {
          if (t <= 72) {
            var r = miniTempWebGLFloatBuffers[4 * t],
              n = HEAPF32;
            o >>= 2;
            for (var i = 0; i < 4 * t; i += 4) {
              var a = o + i;
              (r[i] = n[a]),
                (r[i + 1] = n[a + 1]),
                (r[i + 2] = n[a + 2]),
                (r[i + 3] = n[a + 3]);
            }
          } else r = HEAPF32.subarray(o >> 2, (o + 16 * t) >> 2);
          GLctx.uniform4fv(webglGetUniformLocation(e), r);
        }
      },
      _glUniformBlockBinding = (e, t, o) => {
        (e = GL.programs[e]), GLctx.uniformBlockBinding(e, t, o);
      },
      _glUniformMatrix3fv = (e, t, o, r) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniformMatrix3fv(
              webglGetUniformLocation(e),
              !!o,
              HEAPF32,
              r >> 2,
              9 * t
            );
        else {
          if (t <= 32)
            for (
              var n = miniTempWebGLFloatBuffers[9 * t], i = 0;
              i < 9 * t;
              i += 9
            )
              (n[i] = HEAPF32[(r + 4 * i) >> 2]),
                (n[i + 1] = HEAPF32[(r + (4 * i + 4)) >> 2]),
                (n[i + 2] = HEAPF32[(r + (4 * i + 8)) >> 2]),
                (n[i + 3] = HEAPF32[(r + (4 * i + 12)) >> 2]),
                (n[i + 4] = HEAPF32[(r + (4 * i + 16)) >> 2]),
                (n[i + 5] = HEAPF32[(r + (4 * i + 20)) >> 2]),
                (n[i + 6] = HEAPF32[(r + (4 * i + 24)) >> 2]),
                (n[i + 7] = HEAPF32[(r + (4 * i + 28)) >> 2]),
                (n[i + 8] = HEAPF32[(r + (4 * i + 32)) >> 2]);
          else n = HEAPF32.subarray(r >> 2, (r + 36 * t) >> 2);
          GLctx.uniformMatrix3fv(webglGetUniformLocation(e), !!o, n);
        }
      },
      _glUniformMatrix4fv = (e, t, o, r) => {
        if (GL.currentContext.version >= 2)
          t &&
            GLctx.uniformMatrix4fv(
              webglGetUniformLocation(e),
              !!o,
              HEAPF32,
              r >> 2,
              16 * t
            );
        else {
          if (t <= 18) {
            var n = miniTempWebGLFloatBuffers[16 * t],
              i = HEAPF32;
            r >>= 2;
            for (var a = 0; a < 16 * t; a += 16) {
              var s = r + a;
              (n[a] = i[s]),
                (n[a + 1] = i[s + 1]),
                (n[a + 2] = i[s + 2]),
                (n[a + 3] = i[s + 3]),
                (n[a + 4] = i[s + 4]),
                (n[a + 5] = i[s + 5]),
                (n[a + 6] = i[s + 6]),
                (n[a + 7] = i[s + 7]),
                (n[a + 8] = i[s + 8]),
                (n[a + 9] = i[s + 9]),
                (n[a + 10] = i[s + 10]),
                (n[a + 11] = i[s + 11]),
                (n[a + 12] = i[s + 12]),
                (n[a + 13] = i[s + 13]),
                (n[a + 14] = i[s + 14]),
                (n[a + 15] = i[s + 15]);
            }
          } else n = HEAPF32.subarray(r >> 2, (r + 64 * t) >> 2);
          GLctx.uniformMatrix4fv(webglGetUniformLocation(e), !!o, n);
        }
      },
      _glUseProgram = (e) => {
        (e = GL.programs[e]), GLctx.useProgram(e), (GLctx.currentProgram = e);
      },
      _glVertexAttrib4f = (e, t, o, r, n) =>
        GLctx.vertexAttrib4f(e, t, o, r, n),
      _glVertexAttribDivisor = (e, t) => {
        GLctx.vertexAttribDivisor(e, t);
      },
      _glVertexAttribI4ui = (e, t, o, r, n) =>
        GLctx.vertexAttribI4ui(e, t, o, r, n),
      _glVertexAttribIPointer = (e, t, o, r, n) => {
        GLctx.vertexAttribIPointer(e, t, o, r, n);
      },
      _glVertexAttribPointer = (e, t, o, r, n, i) => {
        GLctx.vertexAttribPointer(e, t, o, !!r, n, i);
      },
      _glViewport = (e, t, o, r) => GLctx.viewport(e, t, o, r),
      GodotRuntime = {
        get_func: function (e) {
          return wasmTable.get(e);
        },
        error: function () {
          err.apply(null, Array.from(arguments));
        },
        print: function () {
          out.apply(null, Array.from(arguments));
        },
        malloc: function (e) {
          return _malloc(e);
        },
        free: function (e) {
          _free(e);
        },
        getHeapValue: function (e, t) {
          return getValue(e, t);
        },
        setHeapValue: function (e, t, o) {
          setValue(e, t, o);
        },
        heapSub: function (e, t, o) {
          const r = e.BYTES_PER_ELEMENT;
          return e.subarray(t / r, t / r + o);
        },
        heapSlice: function (e, t, o) {
          const r = e.BYTES_PER_ELEMENT;
          return e.slice(t / r, t / r + o);
        },
        heapCopy: function (e, t, o) {
          const r = t.BYTES_PER_ELEMENT;
          return e.set(t, o / r);
        },
        parseString: function (e) {
          return UTF8ToString(e);
        },
        parseStringArray: function (e, t) {
          const o = [];
          return (
            GodotRuntime.heapSub(HEAP32, e, t).forEach(function (e) {
              o.push(GodotRuntime.parseString(e));
            }),
            o
          );
        },
        strlen: function (e) {
          return lengthBytesUTF8(e);
        },
        allocString: function (e) {
          const t = GodotRuntime.strlen(e) + 1,
            o = GodotRuntime.malloc(t);
          return stringToUTF8(e, o, t), o;
        },
        allocStringArray: function (e) {
          const t = e.length,
            o = GodotRuntime.malloc(4 * t);
          for (let r = 0; r < t; r++)
            HEAP32[(o >> 2) + r] = GodotRuntime.allocString(e[r]);
          return o;
        },
        freeStringArray: function (e, t) {
          for (let o = 0; o < t; o++) GodotRuntime.free(HEAP32[(e >> 2) + o]);
          GodotRuntime.free(e);
        },
        stringToHeap: function (e, t, o) {
          return stringToUTF8Array(e, HEAP8, t, o);
        },
      },
      GodotConfig = {
        canvas: null,
        locale: "en",
        canvas_resize_policy: 2,
        virtual_keyboard: !1,
        persistent_drops: !1,
        on_execute: null,
        on_exit: null,
        init_config: function (e) {
          (GodotConfig.canvas_resize_policy = e.canvasResizePolicy),
            (GodotConfig.canvas = e.canvas),
            (GodotConfig.locale = e.locale || GodotConfig.locale),
            (GodotConfig.virtual_keyboard = e.virtualKeyboard),
            (GodotConfig.persistent_drops = !!e.persistentDrops),
            (GodotConfig.on_execute = e.onExecute),
            (GodotConfig.on_exit = e.onExit),
            e.focusCanvas && GodotConfig.canvas.focus();
        },
        locate_file: function (e) {
          return Module.locateFile(e);
        },
        clear: function () {
          (GodotConfig.canvas = null),
            (GodotConfig.locale = "en"),
            (GodotConfig.canvas_resize_policy = 2),
            (GodotConfig.virtual_keyboard = !1),
            (GodotConfig.persistent_drops = !1),
            (GodotConfig.on_execute = null),
            (GodotConfig.on_exit = null);
        },
      },
      GodotFS = {
        ENOENT: 44,
        _idbfs: !1,
        _syncing: !1,
        _mount_points: [],
        is_persistent: function () {
          return GodotFS._idbfs ? 1 : 0;
        },
        init: function (e) {
          if (((GodotFS._idbfs = !1), !Array.isArray(e)))
            return Promise.reject(
              new Error("Persistent paths must be an array")
            );
          if (!e.length) return Promise.resolve();
          return (
            (GodotFS._mount_points = e.slice()),
            GodotFS._mount_points.forEach(function (e) {
              !(function (e) {
                try {
                  FS.stat(e);
                } catch (t) {
                  t.errno !== GodotFS.ENOENT && GodotRuntime.error(t),
                    FS.mkdirTree(e);
                }
              })(e),
                FS.mount(IDBFS, {}, e);
            }),
            new Promise(function (e, t) {
              FS.syncfs(!0, function (t) {
                t
                  ? ((GodotFS._mount_points = []),
                    (GodotFS._idbfs = !1),
                    GodotRuntime.print(`IndexedDB not available: ${t.message}`))
                  : (GodotFS._idbfs = !0),
                  e(t);
              });
            })
          );
        },
        deinit: function () {
          GodotFS._mount_points.forEach(function (e) {
            try {
              FS.unmount(e);
            } catch (e) {
              GodotRuntime.print("Already unmounted", e);
            }
            GodotFS._idbfs &&
              IDBFS.dbs[e] &&
              (IDBFS.dbs[e].close(), delete IDBFS.dbs[e]);
          }),
            (GodotFS._mount_points = []),
            (GodotFS._idbfs = !1),
            (GodotFS._syncing = !1);
        },
        sync: function () {
          return GodotFS._syncing
            ? (GodotRuntime.error("Already syncing!"), Promise.resolve())
            : ((GodotFS._syncing = !0),
              new Promise(function (e, t) {
                FS.syncfs(!1, function (t) {
                  t &&
                    GodotRuntime.error(
                      `Failed to save IDB file system: ${t.message}`
                    ),
                    (GodotFS._syncing = !1),
                    e(t);
                });
              }));
        },
        copy_to_fs: function (e, t) {
          const o = e.lastIndexOf("/");
          let r = "/";
          o > 0 && (r = e.slice(0, o));
          try {
            FS.stat(r);
          } catch (e) {
            e.errno !== GodotFS.ENOENT && GodotRuntime.error(e),
              FS.mkdirTree(r);
          }
          FS.writeFile(e, new Uint8Array(t));
        },
      },
      GodotOS = {
        request_quit: function () {},
        _async_cbs: [],
        _fs_sync_promise: null,
        atexit: function (e) {
          GodotOS._async_cbs.push(e);
        },
        cleanup: function (e) {
          const t = GodotConfig.on_exit;
          GodotFS.deinit(), GodotConfig.clear(), t && t(e);
        },
        finish_async: function (e) {
          GodotOS._fs_sync_promise
            .then(function (e) {
              const t = [];
              return (
                GodotOS._async_cbs.forEach(function (e) {
                  t.push(new Promise(e));
                }),
                Promise.all(t)
              );
            })
            .then(function () {
              return GodotFS.sync();
            })
            .then(function (t) {
              setTimeout(function () {
                e();
              }, 0);
            });
        },
      },
      GodotAudio = {
        MAX_VOLUME_CHANNELS: 8,
        GodotChannel: {
          CHANNEL_L: 0,
          CHANNEL_R: 1,
          CHANNEL_C: 3,
          CHANNEL_LFE: 4,
          CHANNEL_RL: 5,
          CHANNEL_RR: 6,
          CHANNEL_SL: 7,
          CHANNEL_SR: 8,
        },
        WebChannel: {
          CHANNEL_L: 0,
          CHANNEL_R: 1,
          CHANNEL_SL: 2,
          CHANNEL_SR: 3,
          CHANNEL_C: 4,
          CHANNEL_LFE: 5,
        },
        samples: null,
        Sample: class {
          static getSample(e) {
            if (!GodotAudio.samples.has(e))
              throw new ReferenceError(`Could not find sample "${e}"`);
            return GodotAudio.samples.get(e);
          }
          static getSampleOrNull(e) {
            return GodotAudio.samples.get(e) ?? null;
          }
          static create(e, t = {}) {
            const o = new GodotAudio.Sample(e, t);
            return GodotAudio.samples.set(e.id, o), o;
          }
          static delete(e) {
            GodotAudio.samples.delete(e);
          }
          constructor(e, t = {}) {
            (this.id = e.id),
              (this._audioBuffer = null),
              (this.numberOfChannels = t.numberOfChannels ?? 2),
              (this.sampleRate = t.sampleRate ?? 44100),
              (this.loopMode = t.loopMode ?? "disabled"),
              (this.loopBegin = t.loopBegin ?? 0),
              (this.loopEnd = t.loopEnd ?? 0),
              this.setAudioBuffer(e.audioBuffer);
          }
          getAudioBuffer() {
            return this._duplicateAudioBuffer();
          }
          setAudioBuffer(e) {
            this._audioBuffer = e;
          }
          clear() {
            this.setAudioBuffer(null), GodotAudio.Sample.delete(this.id);
          }
          _duplicateAudioBuffer() {
            if (null == this._audioBuffer)
              throw new Error("couldn't duplicate a null audioBuffer");
            const e = new Array(this._audioBuffer.numberOfChannels);
            for (let t = 0; t < this._audioBuffer.numberOfChannels; t++) {
              const o = new Float32Array(this._audioBuffer.getChannelData(t));
              e[t] = o;
            }
            const t = GodotAudio.ctx.createBuffer(
              this.numberOfChannels,
              this._audioBuffer.length,
              this._audioBuffer.sampleRate
            );
            for (let o = 0; o < e.length; o++) t.copyToChannel(e[o], o, 0);
            return t;
          }
        },
        SampleNodeBus: class {
          static create(e) {
            return new GodotAudio.SampleNodeBus(e);
          }
          constructor(e) {
            (this._bus = e),
              (this._channelSplitter = GodotAudio.ctx.createChannelSplitter(6)),
              (this._l = GodotAudio.ctx.createGain()),
              (this._r = GodotAudio.ctx.createGain()),
              (this._sl = GodotAudio.ctx.createGain()),
              (this._sr = GodotAudio.ctx.createGain()),
              (this._c = GodotAudio.ctx.createGain()),
              (this._lfe = GodotAudio.ctx.createGain()),
              (this._channelMerger = GodotAudio.ctx.createChannelMerger(6)),
              this._channelSplitter
                .connect(this._l, GodotAudio.WebChannel.CHANNEL_L)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_L
                ),
              this._channelSplitter
                .connect(this._r, GodotAudio.WebChannel.CHANNEL_R)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_R
                ),
              this._channelSplitter
                .connect(this._sl, GodotAudio.WebChannel.CHANNEL_SL)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_SL
                ),
              this._channelSplitter
                .connect(this._sr, GodotAudio.WebChannel.CHANNEL_SR)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_SR
                ),
              this._channelSplitter
                .connect(this._c, GodotAudio.WebChannel.CHANNEL_C)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_C
                ),
              this._channelSplitter
                .connect(this._lfe, GodotAudio.WebChannel.CHANNEL_L)
                .connect(
                  this._channelMerger,
                  GodotAudio.WebChannel.CHANNEL_L,
                  GodotAudio.WebChannel.CHANNEL_LFE
                ),
              this._channelMerger.connect(this._bus.getInputNode());
          }
          getInputNode() {
            return this._channelSplitter;
          }
          getOutputNode() {
            return this._channelMerger;
          }
          setVolume(e) {
            if (e.length !== GodotAudio.MAX_VOLUME_CHANNELS)
              throw new Error(
                `Volume length isn't "${GodotAudio.MAX_VOLUME_CHANNELS}", is ${e.length} instead`
              );
            (this._l.gain.value = e[GodotAudio.GodotChannel.CHANNEL_L] ?? 0),
              (this._r.gain.value = e[GodotAudio.GodotChannel.CHANNEL_R] ?? 0),
              (this._sl.gain.value =
                e[GodotAudio.GodotChannel.CHANNEL_SL] ?? 0),
              (this._sr.gain.value =
                e[GodotAudio.GodotChannel.CHANNEL_SR] ?? 0),
              (this._c.gain.value = e[GodotAudio.GodotChannel.CHANNEL_C] ?? 0),
              (this._lfe.gain.value =
                e[GodotAudio.GodotChannel.CHANNEL_LFE] ?? 0);
          }
          clear() {
            (this._bus = null),
              this._channelSplitter.disconnect(),
              (this._channelSplitter = null),
              this._l.disconnect(),
              (this._l = null),
              this._r.disconnect(),
              (this._r = null),
              this._sl.disconnect(),
              (this._sl = null),
              this._sr.disconnect(),
              (this._sr = null),
              this._c.disconnect(),
              (this._c = null),
              this._lfe.disconnect(),
              (this._lfe = null),
              this._channelMerger.disconnect(),
              (this._channelMerger = null);
          }
        },
        sampleNodes: null,
        SampleNode: class {
          static getSampleNode(e) {
            if (!GodotAudio.sampleNodes.has(e))
              throw new ReferenceError(`Could not find sample node "${e}"`);
            return GodotAudio.sampleNodes.get(e);
          }
          static getSampleNodeOrNull(e) {
            return GodotAudio.sampleNodes.get(e) ?? null;
          }
          static stopSampleNode(e) {
            const t = GodotAudio.SampleNode.getSampleNodeOrNull(e);
            null != t && t.stop();
          }
          static pauseSampleNode(e, t) {
            const o = GodotAudio.SampleNode.getSampleNodeOrNull(e);
            null != o && o.pause(t);
          }
          static create(e, t = {}) {
            const o = new GodotAudio.SampleNode(e, t);
            return GodotAudio.sampleNodes.set(e.id, o), o;
          }
          static delete(e) {
            GodotAudio.sampleNodes.delete(e);
          }
          constructor(e, t = {}) {
            (this.id = e.id),
              (this.streamObjectId = e.streamObjectId),
              (this.offset = t.offset ?? 0),
              (this._playbackPosition = t.offset),
              (this.startTime = t.startTime ?? 0),
              (this.isPaused = !1),
              (this.isStarted = !1),
              (this.isCanceled = !1),
              (this.pauseTime = 0),
              (this._playbackRate = 44100),
              (this.loopMode =
                t.loopMode ?? this.getSample().loopMode ?? "disabled"),
              (this._pitchScale = t.pitchScale ?? 1),
              (this._sourceStartTime = 0),
              (this._sampleNodeBuses = new Map()),
              (this._source = GodotAudio.ctx.createBufferSource()),
              (this._onended = null),
              (this._positionWorklet = null),
              this.setPlaybackRate(t.playbackRate ?? 44100),
              (this._source.buffer = this.getSample().getAudioBuffer()),
              this._addEndedListener();
            const o = GodotAudio.Bus.getBus(e.busIndex);
            this.getSampleNodeBus(o).setVolume(t.volume),
              this.connectPositionWorklet(t.start).catch((e) => {
                const t = new Error("Failed to create PositionWorklet.");
                (t.cause = e), GodotRuntime.error(t);
              });
          }
          getPlaybackRate() {
            return this._playbackRate;
          }
          getPlaybackPosition() {
            return this._playbackPosition;
          }
          setPlaybackRate(e) {
            (this._playbackRate = e), this._syncPlaybackRate();
          }
          getPitchScale() {
            return this._pitchScale;
          }
          setPitchScale(e) {
            (this._pitchScale = e), this._syncPlaybackRate();
          }
          getSample() {
            return GodotAudio.Sample.getSample(this.streamObjectId);
          }
          getOutputNode() {
            return this._source;
          }
          start() {
            this.isStarted ||
              (this._resetSourceStartTime(),
              this._source.start(this.startTime, this.offset),
              (this.isStarted = !0));
          }
          stop() {
            this.clear();
          }
          restart() {
            (this.isPaused = !1),
              (this.pauseTime = 0),
              this._resetSourceStartTime(),
              this._restart();
          }
          pause(e = !0) {
            e ? this._pause() : this._unpause();
          }
          connect(e) {
            return this.getOutputNode().connect(e);
          }
          setVolumes(e, t) {
            for (let o = 0; o < e.length; o++) {
              this.getSampleNodeBus(e[o]).setVolume(
                t.slice(
                  o * GodotAudio.MAX_VOLUME_CHANNELS,
                  o * GodotAudio.MAX_VOLUME_CHANNELS +
                    GodotAudio.MAX_VOLUME_CHANNELS
                )
              );
            }
          }
          getSampleNodeBus(e) {
            if (!this._sampleNodeBuses.has(e)) {
              const t = GodotAudio.SampleNodeBus.create(e);
              this._sampleNodeBuses.set(e, t),
                this._source.connect(t.getInputNode());
            }
            return this._sampleNodeBuses.get(e);
          }
          async connectPositionWorklet(e) {
            await GodotAudio.audioPositionWorkletPromise,
              this.isCanceled ||
                (this._source.connect(this.getPositionWorklet()),
                e && this.start());
          }
          getPositionWorklet() {
            return (
              null != this._positionWorklet ||
                ((this._positionWorklet = new AudioWorkletNode(
                  GodotAudio.ctx,
                  "godot-position-reporting-processor"
                )),
                (this._positionWorklet.port.onmessage = (e) => {
                  if ("position" === e.data.type)
                    this._playbackPosition =
                      parseInt(e.data.data, 10) / this.getSample().sampleRate +
                      this.offset;
                })),
              this._positionWorklet
            );
          }
          clear() {
            (this.isCanceled = !0),
              (this.isPaused = !1),
              (this.pauseTime = 0),
              null != this._source &&
                (this._source.removeEventListener("ended", this._onended),
                (this._onended = null),
                this.isStarted && this._source.stop(),
                this._source.disconnect(),
                (this._source = null));
            for (const e of this._sampleNodeBuses.values()) e.clear();
            this._sampleNodeBuses.clear(),
              this._positionWorklet &&
                (this._positionWorklet.disconnect(),
                (this._positionWorklet.port.onmessage = null),
                this._positionWorklet.port.postMessage({ type: "ended" }),
                (this._positionWorklet = null)),
              GodotAudio.SampleNode.delete(this.id);
          }
          _resetSourceStartTime() {
            this._sourceStartTime = GodotAudio.ctx.currentTime;
          }
          _syncPlaybackRate() {
            this._source.playbackRate.value =
              this.getPlaybackRate() * this.getPitchScale();
          }
          _restart() {
            null != this._source && this._source.disconnect(),
              (this._source = GodotAudio.ctx.createBufferSource()),
              (this._source.buffer = this.getSample().getAudioBuffer());
            for (const e of this._sampleNodeBuses.values())
              this.connect(e.getInputNode());
            this._addEndedListener();
            const e = this.isPaused ? this.pauseTime : 0;
            null != this._positionWorklet &&
              (this._positionWorklet.port.postMessage({ type: "clear" }),
              this._source.connect(this._positionWorklet)),
              this._source.start(this.startTime, this.offset + e),
              (this.isStarted = !0);
          }
          _pause() {
            this.isStarted &&
              ((this.isPaused = !0),
              (this.pauseTime =
                (GodotAudio.ctx.currentTime - this._sourceStartTime) /
                this.getPlaybackRate()),
              this._source.stop());
          }
          _unpause() {
            this._restart(), (this.isPaused = !1), (this.pauseTime = 0);
          }
          _addEndedListener() {
            null != this._onended &&
              this._source.removeEventListener("ended", this._onended);
            const e = this;
            (this._onended = (t) => {
              if (!e.isPaused)
                switch (e.getSample().loopMode) {
                  case "disabled":
                    {
                      const t = this.id;
                      if (
                        (e.stop(), null != GodotAudio.sampleFinishedCallback)
                      ) {
                        const e = GodotRuntime.allocString(t);
                        GodotAudio.sampleFinishedCallback(e),
                          GodotRuntime.free(e);
                      }
                    }
                    break;
                  case "forward":
                  case "backward":
                    e.restart();
                }
            }),
              this._source.addEventListener("ended", this._onended);
          }
        },
        buses: null,
        busSolo: null,
        Bus: class {
          static getCount() {
            return GodotAudio.buses.length;
          }
          static setCount(e) {
            const t = GodotAudio.buses;
            if (e !== t.length)
              if (e < t.length) {
                const o = t.slice(e);
                for (let e = 0; e < o.length; e++) {
                  o[e].clear();
                }
                GodotAudio.buses = t.slice(0, e);
              } else
                for (let t = GodotAudio.buses.length; t < e; t++)
                  GodotAudio.Bus.create();
          }
          static getBus(e) {
            if (e < 0 || e >= GodotAudio.buses.length)
              throw new ReferenceError(`invalid bus index "${e}"`);
            return GodotAudio.buses[e];
          }
          static getBusOrNull(e) {
            return e < 0 || e >= GodotAudio.buses.length
              ? null
              : GodotAudio.buses[e];
          }
          static move(e, t) {
            const o = GodotAudio.Bus.getBusOrNull(e);
            if (null == o) return;
            const r = GodotAudio.buses.filter((t, o) => o !== e);
            r.splice(t - 1, 0, o), (GodotAudio.buses = r);
          }
          static addAt(e) {
            const t = GodotAudio.Bus.create();
            e !== t.getId() && GodotAudio.Bus.move(t.getId(), e);
          }
          static create() {
            const e = new GodotAudio.Bus(),
              t = 0 === GodotAudio.buses.length;
            return (
              GodotAudio.buses.push(e),
              t ? e.setSend(null) : e.setSend(GodotAudio.Bus.getBus(0)),
              e
            );
          }
          constructor() {
            (this._sampleNodes = new Set()),
              (this.isSolo = !1),
              (this._send = null),
              (this._gainNode = GodotAudio.ctx.createGain()),
              (this._soloNode = GodotAudio.ctx.createGain()),
              (this._muteNode = GodotAudio.ctx.createGain()),
              this._gainNode.connect(this._soloNode).connect(this._muteNode);
          }
          getId() {
            return GodotAudio.buses.indexOf(this);
          }
          getVolumeDb() {
            return GodotAudio.linear_to_db(this._gainNode.gain.value);
          }
          setVolumeDb(e) {
            const t = GodotAudio.db_to_linear(e);
            isFinite(t) && (this._gainNode.gain.value = t);
          }
          getSend() {
            return this._send;
          }
          setSend(e) {
            if (((this._send = e), null == e)) {
              if (0 == this.getId())
                return void this.getOutputNode().connect(
                  GodotAudio.ctx.destination
                );
              throw new Error(
                `Cannot send to "${e}" without the bus being at index 0 (current index: ${this.getId()})`
              );
            }
            this.connect(e);
          }
          getInputNode() {
            return this._gainNode;
          }
          getOutputNode() {
            return this._muteNode;
          }
          mute(e) {
            this._muteNode.gain.value = e ? 0 : 1;
          }
          solo(e) {
            if (this.isSolo !== e)
              return e
                ? (null != GodotAudio.busSolo &&
                    GodotAudio.busSolo !== this &&
                    GodotAudio.busSolo._disableSolo(),
                  void this._enableSolo())
                : void this._disableSolo();
          }
          addSampleNode(e) {
            this._sampleNodes.add(e),
              e.getOutputNode().connect(this.getInputNode());
          }
          removeSampleNode(e) {
            this._sampleNodes.delete(e), e.getOutputNode().disconnect();
          }
          connect(e) {
            if (null == e) throw new Error("cannot connect to null bus");
            return (
              this.getOutputNode().disconnect(),
              this.getOutputNode().connect(e.getInputNode()),
              e
            );
          }
          clear() {
            GodotAudio.buses = GodotAudio.buses.filter((e) => e !== this);
          }
          _syncSampleNodes() {
            const e = Array.from(this._sampleNodes);
            for (let t = 0; t < e.length; t++) {
              const o = e[t];
              o.getOutputNode().disconnect(),
                o.getOutputNode().connect(this.getInputNode());
            }
          }
          _enableSolo() {
            (this.isSolo = !0),
              (GodotAudio.busSolo = this),
              (this._soloNode.gain.value = 1);
            const e = GodotAudio.buses.filter((e) => e !== this);
            for (let t = 0; t < e.length; t++) {
              e[t]._soloNode.gain.value = 0;
            }
          }
          _disableSolo() {
            (this.isSolo = !1),
              (GodotAudio.busSolo = null),
              (this._soloNode.gain.value = 1);
            const e = GodotAudio.buses.filter((e) => e !== this);
            for (let t = 0; t < e.length; t++) {
              e[t]._soloNode.gain.value = 1;
            }
          }
        },
        sampleFinishedCallback: null,
        ctx: null,
        input: null,
        driver: null,
        interval: 0,
        audioPositionWorkletPromise: null,
        linear_to_db: function (e) {
          return 8.685889638065037 * Math.log(e);
        },
        db_to_linear: function (e) {
          return Math.exp(0.11512925464970228 * e);
        },
        init: function (e, t, o, r) {
          (GodotAudio.samples = new Map()),
            (GodotAudio.sampleNodes = new Map()),
            (GodotAudio.buses = []),
            (GodotAudio.busSolo = null);
          const n = {};
          e && ((GodotAudio.sampleRate = e), (n.sampleRate = e));
          const i = new (window.AudioContext || window.webkitAudioContext)(n);
          (GodotAudio.ctx = i),
            (i.onstatechange = function () {
              let e = 0;
              switch (i.state) {
                case "suspended":
                  e = 0;
                  break;
                case "running":
                  e = 1;
                  break;
                case "closed":
                  e = 2;
              }
              o(e);
            }),
            i.onstatechange(),
            (GodotAudio.interval = setInterval(function () {
              let e = 0;
              i.baseLatency && (e += GodotAudio.ctx.baseLatency),
                i.outputLatency && (e += GodotAudio.ctx.outputLatency),
                r(e);
            }, 1e3)),
            GodotOS.atexit(GodotAudio.close_async);
          const a = GodotConfig.locate_file("godot.audio.position.worklet.js");
          return (
            (GodotAudio.audioPositionWorkletPromise =
              i.audioWorklet.addModule(a)),
            i.destination.channelCount
          );
        },
        create_input: function (e) {
          if (GodotAudio.input) return 0;
          function t(t) {
            try {
              (GodotAudio.input = GodotAudio.ctx.createMediaStreamSource(t)),
                e(GodotAudio.input);
            } catch (e) {
              GodotRuntime.error("Failed creating input.", e);
            }
          }
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
            navigator.mediaDevices
              .getUserMedia({ audio: !0 })
              .then(t, function (e) {
                GodotRuntime.error("Error getting user media.", e);
              });
          else {
            if (
              (navigator.getUserMedia ||
                (navigator.getUserMedia =
                  navigator.webkitGetUserMedia || navigator.mozGetUserMedia),
              !navigator.getUserMedia)
            )
              return GodotRuntime.error("getUserMedia not available."), 1;
            navigator.getUserMedia({ audio: !0 }, t, function (e) {
              GodotRuntime.print(e);
            });
          }
          return 0;
        },
        close_async: function (e, t) {
          const o = GodotAudio.ctx;
          if (((GodotAudio.ctx = null), !o)) return void e();
          GodotAudio.interval &&
            (clearInterval(GodotAudio.interval), (GodotAudio.interval = 0)),
            GodotAudio.input &&
              (GodotAudio.input.disconnect(), (GodotAudio.input = null));
          let r = Promise.resolve();
          GodotAudio.driver && (r = GodotAudio.driver.close()),
            r
              .then(function () {
                return o.close();
              })
              .then(function () {
                (o.onstatechange = null), e();
              })
              .catch(function (t) {
                (o.onstatechange = null),
                  GodotRuntime.error("Error closing AudioContext", t),
                  e();
              });
        },
        start_sample: function (e, t, o, r) {
          GodotAudio.SampleNode.stopSampleNode(e),
            GodotAudio.SampleNode.create(
              { busIndex: o, id: e, streamObjectId: t },
              r
            );
        },
        stop_sample: function (e) {
          GodotAudio.SampleNode.stopSampleNode(e);
        },
        sample_set_pause: function (e, t) {
          GodotAudio.SampleNode.pauseSampleNode(e, t);
        },
        update_sample_pitch_scale: function (e, t) {
          const o = GodotAudio.SampleNode.getSampleNodeOrNull(e);
          null != o && o.setPitchScale(t);
        },
        sample_set_volumes_linear: function (e, t, o) {
          const r = GodotAudio.SampleNode.getSampleNodeOrNull(e);
          if (null == r) return;
          const n = t.map((e) => GodotAudio.Bus.getBus(e));
          r.setVolumes(n, o);
        },
        set_sample_bus_count: function (e) {
          GodotAudio.Bus.setCount(e);
        },
        remove_sample_bus: function (e) {
          const t = GodotAudio.Bus.getBusOrNull(e);
          null != t && t.clear();
        },
        add_sample_bus: function (e) {
          GodotAudio.Bus.addAt(e);
        },
        move_sample_bus: function (e, t) {
          GodotAudio.Bus.move(e, t);
        },
        set_sample_bus_send: function (e, t) {
          const o = GodotAudio.Bus.getBusOrNull(e);
          if (null == o) return;
          let r = GodotAudio.Bus.getBusOrNull(t);
          null == r && (r = GodotAudio.Bus.getBus(0)), o.setSend(r);
        },
        set_sample_bus_volume_db: function (e, t) {
          const o = GodotAudio.Bus.getBusOrNull(e);
          null != o && o.setVolumeDb(t);
        },
        set_sample_bus_solo: function (e, t) {
          const o = GodotAudio.Bus.getBusOrNull(e);
          null != o && o.solo(t);
        },
        set_sample_bus_mute: function (e, t) {
          const o = GodotAudio.Bus.getBusOrNull(e);
          null != o && o.mute(t);
        },
      };
    function _godot_audio_get_sample_playback_position(e) {
      const t = GodotRuntime.parseString(e),
        o = GodotAudio.SampleNode.getSampleNodeOrNull(t);
      return null == o ? 0 : o.getPlaybackPosition();
    }
    function _godot_audio_has_script_processor() {
      return GodotAudio.ctx && GodotAudio.ctx.createScriptProcessor ? 1 : 0;
    }
    function _godot_audio_has_worklet() {
      return GodotAudio.ctx && GodotAudio.ctx.audioWorklet ? 1 : 0;
    }
    function _godot_audio_init(e, t, o, r) {
      const n = GodotRuntime.get_func(o),
        i = GodotRuntime.get_func(r),
        a = GodotRuntime.getHeapValue(e, "i32"),
        s = GodotAudio.init(a, t, n, i);
      return GodotRuntime.setHeapValue(e, GodotAudio.ctx.sampleRate, "i32"), s;
    }
    function _godot_audio_input_start() {
      return GodotAudio.create_input(function (e) {
        e.connect(GodotAudio.driver.get_node());
      });
    }
    function _godot_audio_input_stop() {
      if (GodotAudio.input) {
        const e = GodotAudio.input.mediaStream.getTracks();
        for (let t = 0; t < e.length; t++) e[t].stop();
        GodotAudio.input.disconnect(), (GodotAudio.input = null);
      }
    }
    function _godot_audio_is_available() {
      return window.AudioContext || window.webkitAudioContext ? 1 : 0;
    }
    function _godot_audio_resume() {
      GodotAudio.ctx &&
        "running" !== GodotAudio.ctx.state &&
        GodotAudio.ctx.resume();
    }
    function _godot_audio_sample_bus_add(e) {
      GodotAudio.add_sample_bus(e);
    }
    function _godot_audio_sample_bus_move(e, t) {
      GodotAudio.move_sample_bus(e, t);
    }
    function _godot_audio_sample_bus_remove(e) {
      GodotAudio.remove_sample_bus(e);
    }
    function _godot_audio_sample_bus_set_count(e) {
      GodotAudio.set_sample_bus_count(e);
    }
    function _godot_audio_sample_bus_set_mute(e, t) {
      GodotAudio.set_sample_bus_mute(e, Boolean(t));
    }
    function _godot_audio_sample_bus_set_send(e, t) {
      GodotAudio.set_sample_bus_send(e, t);
    }
    function _godot_audio_sample_bus_set_solo(e, t) {
      GodotAudio.set_sample_bus_solo(e, Boolean(t));
    }
    function _godot_audio_sample_bus_set_volume_db(e, t) {
      GodotAudio.set_sample_bus_volume_db(e, t);
    }
    function _godot_audio_sample_is_active(e) {
      const t = GodotRuntime.parseString(e);
      return Number(GodotAudio.sampleNodes.has(t));
    }
    function _godot_audio_sample_register_stream(e, t, o, r, n, i) {
      const a = GodotRuntime.parseString(e),
        s = GodotRuntime.parseString(r),
        d = GodotAudio.ctx.sampleRate,
        l = GodotRuntime.heapSub(HEAPF32, t, o),
        u = GodotRuntime.heapSub(HEAPF32, t + 4 * o, o),
        c = GodotAudio.ctx.createBuffer(2, o, d);
      c.copyToChannel(new Float32Array(l), 0, 0),
        c.copyToChannel(new Float32Array(u), 1, 0),
        GodotAudio.Sample.create(
          { id: a, audioBuffer: c },
          {
            loopBegin: n,
            loopEnd: i,
            loopMode: s,
            numberOfChannels: 2,
            sampleRate: d,
          }
        );
    }
    function _godot_audio_sample_set_finished_callback(e) {
      GodotAudio.sampleFinishedCallback = GodotRuntime.get_func(e);
    }
    function _godot_audio_sample_set_pause(e, t) {
      const o = GodotRuntime.parseString(e);
      GodotAudio.sample_set_pause(o, Boolean(t));
    }
    function _godot_audio_sample_set_volumes_linear(e, t, o, r, n) {
      const i = GodotRuntime.parseString(e),
        a = GodotRuntime.heapSub(HEAP32, t, o),
        s = GodotRuntime.heapSub(HEAPF32, r, n);
      GodotAudio.sample_set_volumes_linear(i, Array.from(a), s);
    }
    function _godot_audio_sample_start(e, t, o, r, n, i) {
      const a = GodotRuntime.parseString(e),
        s = GodotRuntime.parseString(t),
        d = {
          offset: r,
          volume: GodotRuntime.heapSub(HEAPF32, i, 8),
          playbackRate: 1,
          pitchScale: n,
          start: !0,
        };
      GodotAudio.start_sample(a, s, o, d);
    }
    function _godot_audio_sample_stop(e) {
      const t = GodotRuntime.parseString(e);
      GodotAudio.stop_sample(t);
    }
    function _godot_audio_sample_stream_is_registered(e) {
      const t = GodotRuntime.parseString(e);
      return Number(null != GodotAudio.Sample.getSampleOrNull(t));
    }
    function _godot_audio_sample_unregister_stream(e) {
      const t = GodotRuntime.parseString(e),
        o = GodotAudio.Sample.getSampleOrNull(t);
      null != o && o.clear();
    }
    function _godot_audio_sample_update_pitch_scale(e, t) {
      const o = GodotRuntime.parseString(e);
      GodotAudio.update_sample_pitch_scale(o, t);
    }
    var GodotAudioScript = {
      script: null,
      create: function (e, t) {
        return (
          (GodotAudioScript.script = GodotAudio.ctx.createScriptProcessor(
            e,
            2,
            t
          )),
          (GodotAudio.driver = GodotAudioScript),
          GodotAudioScript.script.bufferSize
        );
      },
      start: function (e, t, o, r, n) {
        (GodotAudioScript.script.onaudioprocess = function (i) {
          const a = GodotRuntime.heapSub(HEAPF32, e, t),
            s = i.inputBuffer;
          if (GodotAudio.input) {
            const e = s.getChannelData(0).length;
            for (let t = 0; t < 2; t++) {
              const o = s.getChannelData(t);
              for (let r = 0; r < e; r++) a[2 * r + t] = o[r];
            }
          }
          n();
          const d = GodotRuntime.heapSub(HEAPF32, o, r),
            l = i.outputBuffer,
            u = l.numberOfChannels;
          for (let e = 0; e < u; e++) {
            const t = l.getChannelData(e);
            for (let o = 0; o < t.length; o++) t[o] = d[o * u + e];
          }
        }),
          GodotAudioScript.script.connect(GodotAudio.ctx.destination);
      },
      get_node: function () {
        return GodotAudioScript.script;
      },
      close: function () {
        return new Promise(function (e, t) {
          GodotAudioScript.script.disconnect(),
            (GodotAudioScript.script.onaudioprocess = null),
            (GodotAudioScript.script = null),
            e();
        });
      },
    };
    function _godot_audio_script_create(e, t) {
      const o = GodotRuntime.getHeapValue(e, "i32");
      try {
        const r = GodotAudioScript.create(o, t);
        GodotRuntime.setHeapValue(e, r, "i32");
      } catch (e) {
        return (
          GodotRuntime.error("Error starting AudioDriverScriptProcessor", e), 1
        );
      }
      return 0;
    }
    function _godot_audio_script_start(e, t, o, r, n) {
      const i = GodotRuntime.get_func(n);
      GodotAudioScript.start(e, t, o, r, i);
    }
    var GodotAudioWorklet = {
      promise: null,
      worklet: null,
      ring_buffer: null,
      create: function (e) {
        const t = GodotConfig.locate_file("godot.audio.worklet.js");
        (GodotAudioWorklet.promise = GodotAudio.ctx.audioWorklet
          .addModule(t)
          .then(function () {
            return (
              (GodotAudioWorklet.worklet = new AudioWorkletNode(
                GodotAudio.ctx,
                "godot-processor",
                { outputChannelCount: [e] }
              )),
              Promise.resolve()
            );
          })),
          (GodotAudio.driver = GodotAudioWorklet);
      },
      start: function (e, t, o) {
        GodotAudioWorklet.promise.then(function () {
          const r = GodotAudioWorklet.worklet;
          r.connect(GodotAudio.ctx.destination),
            r.port.postMessage({ cmd: "start", data: [o, e, t] }),
            (r.port.onmessage = function (e) {
              GodotRuntime.error(e.data);
            });
        });
      },
      start_no_threads: function (e, t, o, r, n, i) {
        (GodotAudioWorklet.ring_buffer = new (function () {
          let a = 0,
            s = 0,
            d = 0;
          const l = new Float32Array(t);
          (this.receive = function (e) {
            const t = GodotRuntime.heapSub(HEAPF32, r, n),
              o = s;
            let a = e.length,
              d = 0;
            s + a >= n &&
              ((d = n - s), t.set(e.subarray(0, d), s), (a -= d), (s = 0)),
              a && t.set(e.subarray(d, a), s),
              i(o, e.length),
              (s += a);
          }),
            (this.consumed = function (r, n) {
              (d += r),
                (function (r) {
                  if (0 === d) return;
                  const n = GodotRuntime.heapSub(HEAPF32, e, t),
                    i = n.length,
                    s = d;
                  if ((o(a, d), a + d >= i)) {
                    const e = i - a;
                    l.set(n.subarray(a, i)), (d -= e), (a = 0);
                  }
                  d > 0 && l.set(n.subarray(a, a + d), s - d),
                    r.postMessage({ cmd: "chunk", data: l.subarray(0, s) }),
                    (a += d),
                    (d = 0);
                })(n);
            });
        })()),
          GodotAudioWorklet.promise.then(function () {
            const o = GodotAudioWorklet.worklet,
              r = GodotRuntime.heapSlice(HEAPF32, e, t);
            o.connect(GodotAudio.ctx.destination),
              o.port.postMessage({ cmd: "start_nothreads", data: [r, n] }),
              (o.port.onmessage = function (e) {
                if (GodotAudioWorklet.worklet)
                  if ("read" === e.data.cmd) {
                    const t = e.data.data;
                    GodotAudioWorklet.ring_buffer.consumed(
                      t,
                      GodotAudioWorklet.worklet.port
                    );
                  } else if ("input" === e.data.cmd) {
                    const t = e.data.data;
                    if (t.length > n)
                      return void GodotRuntime.error("Input chunk is too big");
                    GodotAudioWorklet.ring_buffer.receive(t);
                  } else GodotRuntime.error(e.data);
              });
          });
      },
      get_node: function () {
        return GodotAudioWorklet.worklet;
      },
      close: function () {
        return new Promise(function (e, t) {
          if (null === GodotAudioWorklet.promise) return;
          GodotAudioWorklet.promise
            .then(function () {
              GodotAudioWorklet.worklet.port.postMessage({
                cmd: "stop",
                data: null,
              }),
                GodotAudioWorklet.worklet.disconnect(),
                (GodotAudioWorklet.worklet.port.onmessage = null),
                (GodotAudioWorklet.worklet = null),
                (GodotAudioWorklet.promise = null),
                e();
            })
            .catch(function (e) {
              GodotRuntime.error(e);
            });
        });
      },
    };
    function _godot_audio_worklet_create(e) {
      try {
        GodotAudioWorklet.create(e);
      } catch (e) {
        return GodotRuntime.error("Error starting AudioDriverWorklet", e), 1;
      }
      return 0;
    }
    function _godot_audio_worklet_start_no_threads(e, t, o, r, n, i) {
      const a = GodotRuntime.get_func(o),
        s = GodotRuntime.get_func(i);
      GodotAudioWorklet.start_no_threads(e, t, a, r, n, s);
    }
    function _godot_js_config_canvas_id_get(e, t) {
      GodotRuntime.stringToHeap(`#${GodotConfig.canvas.id}`, e, t);
    }
    function _godot_js_config_locale_get(e, t) {
      GodotRuntime.stringToHeap(GodotConfig.locale, e, t);
    }
    var GodotDisplayCursor = {
        shape: "default",
        visible: !0,
        cursors: {},
        set_style: function (e) {
          GodotConfig.canvas.style.cursor = e;
        },
        set_shape: function (e) {
          GodotDisplayCursor.shape = e;
          let t = e;
          if (e in GodotDisplayCursor.cursors) {
            const o = GodotDisplayCursor.cursors[e];
            t = `url("${o.url}") ${o.x} ${o.y}, default`;
          }
          GodotDisplayCursor.visible && GodotDisplayCursor.set_style(t);
        },
        clear: function () {
          GodotDisplayCursor.set_style(""),
            (GodotDisplayCursor.shape = "default"),
            (GodotDisplayCursor.visible = !0),
            Object.keys(GodotDisplayCursor.cursors).forEach(function (e) {
              URL.revokeObjectURL(GodotDisplayCursor.cursors[e]),
                delete GodotDisplayCursor.cursors[e];
            });
        },
        lockPointer: function () {
          const e = GodotConfig.canvas;
          e.requestPointerLock && e.requestPointerLock();
        },
        releasePointer: function () {
          document.exitPointerLock && document.exitPointerLock();
        },
        isPointerLocked: function () {
          return document.pointerLockElement === GodotConfig.canvas;
        },
      },
      GodotEventListeners = {
        handlers: [],
        has: function (e, t, o, r) {
          return (
            -1 !==
            GodotEventListeners.handlers.findIndex(function (n) {
              return (
                n.target === e &&
                n.event === t &&
                n.method === o &&
                n.capture === r
              );
            })
          );
        },
        add: function (e, t, o, r) {
          GodotEventListeners.has(e, t, o, r) ||
            (GodotEventListeners.handlers.push(
              new (function (e, t, o, r) {
                (this.target = e),
                  (this.event = t),
                  (this.method = o),
                  (this.capture = r);
              })(e, t, o, r)
            ),
            e.addEventListener(t, o, r));
        },
        clear: function () {
          GodotEventListeners.handlers.forEach(function (e) {
            e.target.removeEventListener(e.event, e.method, e.capture);
          }),
            (GodotEventListeners.handlers.length = 0);
        },
      },
      _emscripten_webgl_do_get_current_context = () =>
        GL.currentContext ? GL.currentContext.handle : 0,
      _emscripten_webgl_get_current_context =
        _emscripten_webgl_do_get_current_context,
      GodotDisplayScreen = {
        desired_size: [0, 0],
        hidpi: !0,
        getPixelRatio: function () {
          return (GodotDisplayScreen.hidpi && window.devicePixelRatio) || 1;
        },
        isFullscreen: function () {
          const e =
            document.fullscreenElement ||
            document.mozFullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
          return e
            ? e === GodotConfig.canvas
            : document.fullscreen ||
                document.mozFullScreen ||
                document.webkitIsFullscreen;
        },
        hasFullscreen: function () {
          return (
            document.fullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.webkitFullscreenEnabled
          );
        },
        requestFullscreen: function () {
          if (!GodotDisplayScreen.hasFullscreen()) return 1;
          const e = GodotConfig.canvas;
          try {
            const t = (
              e.requestFullscreen ||
              e.msRequestFullscreen ||
              e.mozRequestFullScreen ||
              e.mozRequestFullscreen ||
              e.webkitRequestFullscreen
            ).call(e);
            t && t.catch(function () {});
          } catch (e) {
            return 1;
          }
          return 0;
        },
        exitFullscreen: function () {
          if (!GodotDisplayScreen.isFullscreen()) return 0;
          try {
            const e = document.exitFullscreen();
            e && e.catch(function () {});
          } catch (e) {
            return 1;
          }
          return 0;
        },
        _updateGL: function () {
          const e = _emscripten_webgl_get_current_context(),
            t = GL.getContext(e);
          t && GL.resizeOffscreenFramebuffer(t);
        },
        updateSize: function () {
          const e = GodotDisplayScreen.isFullscreen(),
            t = 2 === GodotConfig.canvas_resize_policy,
            o = 0 === GodotConfig.canvas_resize_policy,
            r = GodotDisplayScreen.desired_size[0],
            n = GodotDisplayScreen.desired_size[1],
            i = GodotConfig.canvas;
          let a = r,
            s = n;
          if (o)
            return i.width !== a || i.height !== s
              ? ((GodotDisplayScreen.desired_size = [i.width, i.height]),
                GodotDisplayScreen._updateGL(),
                1)
              : 0;
          const d = GodotDisplayScreen.getPixelRatio();
          (e || t) &&
            ((a = window.innerWidth * d), (s = window.innerHeight * d));
          const l = a / d + "px",
            u = s / d + "px";
          return i.style.width !== l ||
            i.style.height !== u ||
            i.width !== a ||
            i.height !== s
            ? ((i.width = a),
              (i.height = s),
              (i.style.width = l),
              (i.style.height = u),
              GodotDisplayScreen._updateGL(),
              1)
            : 0;
        },
      },
      GodotDisplayVK = {
        textinput: null,
        textarea: null,
        available: function () {
          return GodotConfig.virtual_keyboard && "ontouchstart" in window;
        },
        init: function (e) {
          function t(t) {
            const o = document.createElement(t);
            return (
              (o.style.display = "none"),
              (o.style.position = "absolute"),
              (o.style.zIndex = "-1"),
              (o.style.background = "transparent"),
              (o.style.padding = "0px"),
              (o.style.margin = "0px"),
              (o.style.overflow = "hidden"),
              (o.style.width = "0px"),
              (o.style.height = "0px"),
              (o.style.border = "0px"),
              (o.style.outline = "none"),
              (o.readonly = !0),
              (o.disabled = !0),
              GodotEventListeners.add(
                o,
                "input",
                function (t) {
                  const r = GodotRuntime.allocString(o.value);
                  e(r, o.selectionEnd), GodotRuntime.free(r);
                },
                !1
              ),
              GodotEventListeners.add(
                o,
                "blur",
                function (e) {
                  (o.style.display = "none"),
                    (o.readonly = !0),
                    (o.disabled = !0);
                },
                !1
              ),
              GodotConfig.canvas.insertAdjacentElement("beforebegin", o),
              o
            );
          }
          (GodotDisplayVK.textinput = t("input")),
            (GodotDisplayVK.textarea = t("textarea")),
            GodotDisplayVK.updateSize();
        },
        show: function (e, t, o, r) {
          if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
          ("" === GodotDisplayVK.textinput.style.display &&
            "" === GodotDisplayVK.textarea.style.display) ||
            GodotDisplayVK.hide(),
            GodotDisplayVK.updateSize();
          let n = GodotDisplayVK.textinput;
          switch (t) {
            case 0:
            default:
              (n.type = "text"), (n.inputmode = "");
              break;
            case 1:
              n = GodotDisplayVK.textarea;
              break;
            case 2:
              (n.type = "text"), (n.inputmode = "numeric");
              break;
            case 3:
              (n.type = "text"), (n.inputmode = "decimal");
              break;
            case 4:
              (n.type = "tel"), (n.inputmode = "");
              break;
            case 5:
              (n.type = "email"), (n.inputmode = "");
              break;
            case 6:
              (n.type = "password"), (n.inputmode = "");
              break;
            case 7:
              (n.type = "url"), (n.inputmode = "");
          }
          (n.readonly = !1),
            (n.disabled = !1),
            (n.value = e),
            (n.style.display = "block"),
            n.focus(),
            n.setSelectionRange(o, r);
        },
        hide: function () {
          GodotDisplayVK.textinput &&
            GodotDisplayVK.textarea &&
            [GodotDisplayVK.textinput, GodotDisplayVK.textarea].forEach(
              function (e) {
                e.blur(), (e.style.display = "none"), (e.value = "");
              }
            );
        },
        updateSize: function () {
          if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) return;
          const e = GodotConfig.canvas.getBoundingClientRect();
          function t(t) {
            (t.style.left = `${e.left}px`),
              (t.style.top = `${e.top}px`),
              (t.style.width = `${e.width}px`),
              (t.style.height = `${e.height}px`);
          }
          t(GodotDisplayVK.textinput), t(GodotDisplayVK.textarea);
        },
        clear: function () {
          GodotDisplayVK.textinput &&
            (GodotDisplayVK.textinput.remove(),
            (GodotDisplayVK.textinput = null)),
            GodotDisplayVK.textarea &&
              (GodotDisplayVK.textarea.remove(),
              (GodotDisplayVK.textarea = null));
        },
      },
      GodotDisplay = {
        window_icon: "",
        getDPI: function () {
          const e = Math.round(96 * window.devicePixelRatio);
          return e >= 96 ? e : 96;
        },
      };
    function _godot_js_display_alert(e) {
      window.alert(GodotRuntime.parseString(e));
    }
    function _godot_js_display_canvas_focus() {
      GodotConfig.canvas.focus();
    }
    function _godot_js_display_canvas_is_focused() {
      return document.activeElement === GodotConfig.canvas;
    }
    function _godot_js_display_clipboard_get(e) {
      const t = GodotRuntime.get_func(e);
      try {
        navigator.clipboard
          .readText()
          .then(function (e) {
            const o = GodotRuntime.allocString(e);
            t(o), GodotRuntime.free(o);
          })
          .catch(function (e) {});
      } catch (e) {}
    }
    function _godot_js_display_clipboard_set(e) {
      const t = GodotRuntime.parseString(e);
      return navigator.clipboard && navigator.clipboard.writeText
        ? (navigator.clipboard.writeText(t).catch(function (e) {
            GodotRuntime.error(
              "Setting OS clipboard is only possible from an input callback for the Web platform. Exception:",
              e
            );
          }),
          0)
        : 1;
    }
    function _godot_js_display_cursor_is_hidden() {
      return !GodotDisplayCursor.visible;
    }
    function _godot_js_display_cursor_is_locked() {
      return GodotDisplayCursor.isPointerLocked() ? 1 : 0;
    }
    function _godot_js_display_cursor_lock_set(e) {
      e
        ? GodotDisplayCursor.lockPointer()
        : GodotDisplayCursor.releasePointer();
    }
    function _godot_js_display_cursor_set_custom_shape(e, t, o, r, n) {
      const i = GodotRuntime.parseString(e),
        a = GodotDisplayCursor.cursors[i];
      if (o > 0) {
        const e = new Blob([GodotRuntime.heapSlice(HEAPU8, t, o)], {
            type: "image/png",
          }),
          a = URL.createObjectURL(e);
        GodotDisplayCursor.cursors[i] = { url: a, x: r, y: n };
      } else delete GodotDisplayCursor.cursors[i];
      i === GodotDisplayCursor.shape &&
        GodotDisplayCursor.set_shape(GodotDisplayCursor.shape),
        a && URL.revokeObjectURL(a.url);
    }
    function _godot_js_display_cursor_set_shape(e) {
      GodotDisplayCursor.set_shape(GodotRuntime.parseString(e));
    }
    function _godot_js_display_cursor_set_visible(e) {
      const t = 0 !== e;
      t !== GodotDisplayCursor.visible &&
        ((GodotDisplayCursor.visible = t),
        t
          ? GodotDisplayCursor.set_shape(GodotDisplayCursor.shape)
          : GodotDisplayCursor.set_style("none"));
    }
    function _godot_js_display_desired_size_set(e, t) {
      (GodotDisplayScreen.desired_size = [e, t]),
        GodotDisplayScreen.updateSize();
    }
    function _godot_js_display_fullscreen_cb(e) {
      const t = GodotConfig.canvas,
        o = GodotRuntime.get_func(e);
      function r(e) {
        e.target === t && o(GodotDisplayScreen.isFullscreen());
      }
      GodotEventListeners.add(document, "fullscreenchange", r, !1),
        GodotEventListeners.add(document, "mozfullscreenchange", r, !1),
        GodotEventListeners.add(document, "webkitfullscreenchange", r, !1);
    }
    function _godot_js_display_fullscreen_exit() {
      return GodotDisplayScreen.exitFullscreen();
    }
    function _godot_js_display_fullscreen_request() {
      return GodotDisplayScreen.requestFullscreen();
    }
    function _godot_js_display_has_webgl(e) {
      if (1 !== e && 2 !== e) return !1;
      try {
        return !!document
          .createElement("canvas")
          .getContext(2 === e ? "webgl2" : "webgl");
      } catch (e) {}
      return !1;
    }
    function _godot_js_display_is_swap_ok_cancel() {
      const e = navigator.platform || "";
      return -1 !== ["Windows", "Win64", "Win32", "WinCE"].indexOf(e) ? 1 : 0;
    }
    function _godot_js_display_notification_cb(e, t, o, r, n) {
      const i = GodotConfig.canvas,
        a = GodotRuntime.get_func(e),
        s = [t, o, r, n];
      ["mouseover", "mouseleave", "focus", "blur"].forEach(function (e, t) {
        GodotEventListeners.add(
          i,
          e,
          function () {
            a(s[t]);
          },
          !0
        );
      });
    }
    function _godot_js_display_pixel_ratio_get() {
      return GodotDisplayScreen.getPixelRatio();
    }
    function _godot_js_display_screen_dpi_get() {
      return GodotDisplay.getDPI();
    }
    function _godot_js_display_screen_size_get(e, t) {
      const o = GodotDisplayScreen.getPixelRatio();
      GodotRuntime.setHeapValue(e, window.screen.width * o, "i32"),
        GodotRuntime.setHeapValue(t, window.screen.height * o, "i32");
    }
    function _godot_js_display_setup_canvas(e, t, o, r) {
      const n = GodotConfig.canvas;
      switch (
        (GodotEventListeners.add(
          n,
          "contextmenu",
          function (e) {
            e.preventDefault();
          },
          !1
        ),
        GodotEventListeners.add(
          n,
          "webglcontextlost",
          function (e) {
            alert("WebGL context lost, please reload the page"),
              e.preventDefault();
          },
          !1
        ),
        (GodotDisplayScreen.hidpi = !!r),
        GodotConfig.canvas_resize_policy)
      ) {
        case 0:
          GodotDisplayScreen.desired_size = [n.width, n.height];
          break;
        case 1:
          GodotDisplayScreen.desired_size = [e, t];
          break;
        default:
          (n.style.position = "absolute"),
            (n.style.top = 0),
            (n.style.left = 0);
      }
      GodotDisplayScreen.updateSize(),
        o && GodotDisplayScreen.requestFullscreen();
    }
    function _godot_js_display_size_update() {
      const e = GodotDisplayScreen.updateSize();
      return e && GodotDisplayVK.updateSize(), e;
    }
    function _godot_js_display_touchscreen_is_available() {
      return "ontouchstart" in window;
    }
    function _godot_js_display_tts_available() {
      return "speechSynthesis" in window;
    }
    function _godot_js_display_vk_available() {
      return GodotDisplayVK.available();
    }
    function _godot_js_display_vk_cb(e) {
      const t = GodotRuntime.get_func(e);
      GodotDisplayVK.available() && GodotDisplayVK.init(t);
    }
    function _godot_js_display_vk_hide() {
      GodotDisplayVK.hide();
    }
    function _godot_js_display_vk_show(e, t, o, r) {
      const n = GodotRuntime.parseString(e),
        i = o > 0 ? o : 0,
        a = r > 0 ? r : i;
      GodotDisplayVK.show(n, t, i, a);
    }
    function _godot_js_display_window_blur_cb(e) {
      const t = GodotRuntime.get_func(e);
      GodotEventListeners.add(
        window,
        "blur",
        function () {
          t();
        },
        !1
      );
    }
    function _godot_js_display_window_icon_set(e, t) {
      let o = document.getElementById("-gd-engine-icon");
      const r = GodotDisplay.window_icon;
      if (e) {
        null === o &&
          ((o = document.createElement("link")),
          (o.rel = "icon"),
          (o.id = "-gd-engine-icon"));
        const r = new Blob([GodotRuntime.heapSlice(HEAPU8, e, t)], {
          type: "image/png",
        });
        (GodotDisplay.window_icon = URL.createObjectURL(r)),
          (o.href = GodotDisplay.window_icon);
      } else o && o.remove(), (GodotDisplay.window_icon = null);
      r && URL.revokeObjectURL(r);
    }
    function _godot_js_display_window_size_get(e, t) {
      GodotRuntime.setHeapValue(e, GodotConfig.canvas.width, "i32"),
        GodotRuntime.setHeapValue(t, GodotConfig.canvas.height, "i32");
    }
    function _godot_js_display_window_title_set(e) {
    //   document.title = GodotRuntime.parseString(e);
    }
    function _godot_js_eval(
      p_js,
      p_use_global_ctx,
      p_union_ptr,
      p_byte_arr,
      p_byte_arr_write,
      p_callback
    ) {
      const js_code = GodotRuntime.parseString(p_js);
      let eval_ret = null;
      try {
        if (p_use_global_ctx) {
          const e = eval;
          eval_ret = e(js_code);
        } else eval_ret = eval(js_code);
      } catch (e) {
        GodotRuntime.error(e);
      }
      switch (typeof eval_ret) {
        case "boolean":
          return GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "i32"), 1;
        case "number":
          return GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "double"), 3;
        case "string":
          return (
            GodotRuntime.setHeapValue(
              p_union_ptr,
              GodotRuntime.allocString(eval_ret),
              "*"
            ),
            4
          );
        case "object":
          if (null === eval_ret) break;
          if (
            (!ArrayBuffer.isView(eval_ret) || eval_ret instanceof Uint8Array
              ? eval_ret instanceof ArrayBuffer &&
                (eval_ret = new Uint8Array(eval_ret))
              : (eval_ret = new Uint8Array(eval_ret.buffer)),
            eval_ret instanceof Uint8Array)
          ) {
            const e = GodotRuntime.get_func(p_callback),
              t = e(p_byte_arr, p_byte_arr_write, eval_ret.length);
            return HEAPU8.set(eval_ret, t), 29;
          }
      }
      return 0;
    }
    var IDHandler = {
        _last_id: 0,
        _references: {},
        get: function (e) {
          return IDHandler._references[e];
        },
        add: function (e) {
          const t = ++IDHandler._last_id;
          return (IDHandler._references[t] = e), t;
        },
        remove: function (e) {
          delete IDHandler._references[e];
        },
      },
      GodotFetch = {
        onread: function (e, t) {
          const o = IDHandler.get(e);
          o &&
            (t.value && o.chunks.push(t.value),
            (o.reading = !1),
            (o.done = t.done));
        },
        onresponse: function (e, t) {
          const o = IDHandler.get(e);
          if (!o) return;
          let r = !1;
          t.headers.forEach(function (e, t) {
            const o = e.toLowerCase().trim();
            "transfer-encoding" === t.toLowerCase().trim() &&
              "chunked" === o &&
              (r = !0);
          }),
            (o.status = t.status),
            (o.response = t),
            (o.reader = t.body?.getReader()),
            (o.chunked = r);
        },
        onerror: function (e, t) {
          GodotRuntime.error(t);
          const o = IDHandler.get(e);
          o && (o.error = t);
        },
        create: function (e, t, o, r) {
          const n = {
              request: null,
              response: null,
              reader: null,
              error: null,
              done: !1,
              reading: !1,
              status: 0,
              chunks: [],
            },
            i = IDHandler.add(n),
            a = { method: e, headers: o, body: r };
          return (
            (n.request = fetch(t, a)),
            n.request
              .then(GodotFetch.onresponse.bind(null, i))
              .catch(GodotFetch.onerror.bind(null, i)),
            i
          );
        },
        free: function (e) {
          const t = IDHandler.get(e);
          t &&
            (IDHandler.remove(e),
            t.request &&
              t.request
                .then(function (e) {
                  e.abort();
                })
                .catch(function (e) {}));
        },
        read: function (e) {
          const t = IDHandler.get(e);
          if (t)
            if (t.reader && !t.reading) {
              if (t.done) return void (t.reader = null);
              (t.reading = !0),
                t.reader
                  .read()
                  .then(GodotFetch.onread.bind(null, e))
                  .catch(GodotFetch.onerror.bind(null, e));
            } else
              null == t.reader &&
                null == t.response.body &&
                ((t.reading = !0),
                GodotFetch.onread(e, { value: void 0, done: !0 }));
        },
      };
    function _godot_js_fetch_create(e, t, o, r, n, i) {
      const a = GodotRuntime.parseString(e),
        s = GodotRuntime.parseString(t),
        d = GodotRuntime.parseStringArray(o, r),
        l = i ? GodotRuntime.heapSlice(HEAP8, n, i) : null;
      return GodotFetch.create(
        a,
        s,
        d
          .map(function (e) {
            const t = e.indexOf(":");
            return t <= 0 ? [] : [e.slice(0, t).trim(), e.slice(t + 1).trim()];
          })
          .filter(function (e) {
            return 2 === e.length;
          }),
        l
      );
    }
    function _godot_js_fetch_free(e) {
      GodotFetch.free(e);
    }
    function _godot_js_fetch_http_status_get(e) {
      const t = IDHandler.get(e);
      return t && t.response ? t.status : 0;
    }
    function _godot_js_fetch_is_chunked(e) {
      const t = IDHandler.get(e);
      return t && t.response ? (t.chunked ? 1 : 0) : -1;
    }
    function _godot_js_fetch_read_chunk(e, t, o) {
      const r = IDHandler.get(e);
      if (!r || !r.response) return 0;
      let n = o;
      const i = r.chunks;
      for (; n && i.length; ) {
        const e = r.chunks[0];
        e.length > n
          ? (GodotRuntime.heapCopy(HEAP8, e.slice(0, n), t),
            (i[0] = e.slice(n)),
            (n = 0))
          : (GodotRuntime.heapCopy(HEAP8, e, t), (n -= e.length), i.pop());
      }
      return i.length || GodotFetch.read(e), o - n;
    }
    function _godot_js_fetch_read_headers(e, t, o) {
      const r = IDHandler.get(e);
      if (!r || !r.response) return 1;
      const n = GodotRuntime.get_func(t),
        i = [];
      r.response.headers.forEach(function (e, t) {
        i.push(`${t}:${e}`);
      });
      const a = GodotRuntime.allocStringArray(i);
      return n(i.length, a, o), GodotRuntime.freeStringArray(a, i.length), 0;
    }
    function _godot_js_fetch_state_get(e) {
      const t = IDHandler.get(e);
      return t
        ? t.error
          ? -1
          : t.response
          ? t.reader || (null == t.response.body && !t.done)
            ? 1
            : t.done
            ? 2
            : -1
          : 0
        : -1;
    }
    var GodotInputGamepads = {
        samples: [],
        get_pads: function () {
          try {
            const e = navigator.getGamepads();
            return e || [];
          } catch (e) {
            return [];
          }
        },
        get_samples: function () {
          return GodotInputGamepads.samples;
        },
        get_sample: function (e) {
          const t = GodotInputGamepads.samples;
          return e < t.length ? t[e] : null;
        },
        sample: function () {
          const e = GodotInputGamepads.get_pads(),
            t = [];
          for (let o = 0; o < e.length; o++) {
            const r = e[o];
            if (!r) {
              t.push(null);
              continue;
            }
            const n = {
              standard: "standard" === r.mapping,
              buttons: [],
              axes: [],
              connected: r.connected,
            };
            for (let e = 0; e < r.buttons.length; e++)
              n.buttons.push(r.buttons[e].value);
            for (let e = 0; e < r.axes.length; e++) n.axes.push(r.axes[e]);
            t.push(n);
          }
          GodotInputGamepads.samples = t;
        },
        init: function (e) {
          function t(t) {
            const o = GodotInputGamepads.get_guid(t),
              r = GodotRuntime.allocString(t.id),
              n = GodotRuntime.allocString(o);
            e(t.index, 1, r, n), GodotRuntime.free(r), GodotRuntime.free(n);
          }
          GodotInputGamepads.samples = [];
          const o = GodotInputGamepads.get_pads();
          for (let e = 0; e < o.length; e++) o[e] && t(o[e]);
          GodotEventListeners.add(
            window,
            "gamepadconnected",
            function (e) {
              e.gamepad && t(e.gamepad);
            },
            !1
          ),
            GodotEventListeners.add(
              window,
              "gamepaddisconnected",
              function (t) {
                t.gamepad && e(t.gamepad.index, 0);
              },
              !1
            );
        },
        get_guid: function (e) {
          if (e.mapping) return e.mapping;
          const t = navigator.userAgent;
          let o = "Unknown";
          t.indexOf("Android") >= 0
            ? (o = "Android")
            : t.indexOf("Linux") >= 0
            ? (o = "Linux")
            : t.indexOf("iPhone") >= 0
            ? (o = "iOS")
            : t.indexOf("Macintosh") >= 0
            ? (o = "MacOSX")
            : t.indexOf("Windows") >= 0 && (o = "Windows");
          const r = e.id,
            n = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i,
            i = /^([0-9a-f]+)-([0-9a-f]+)-/i;
          let a = "",
            s = "";
          if (n.test(r)) {
            const e = n.exec(r);
            (a = e[1].padStart(4, "0")), (s = e[2].padStart(4, "0"));
          } else if (i.test(r)) {
            const e = i.exec(r);
            (a = e[1].padStart(4, "0")), (s = e[2].padStart(4, "0"));
          }
          return a && s ? o + a + s : `${o}Unknown`;
        },
      },
      GodotInputDragDrop = {
        promises: [],
        pending_files: [],
        add_entry: function (e) {
          e.isDirectory
            ? GodotInputDragDrop.add_dir(e)
            : e.isFile
            ? GodotInputDragDrop.add_file(e)
            : GodotRuntime.error("Unrecognized entry...", e);
        },
        add_dir: function (e) {
          GodotInputDragDrop.promises.push(
            new Promise(function (t, o) {
              e.createReader().readEntries(function (e) {
                for (let t = 0; t < e.length; t++)
                  GodotInputDragDrop.add_entry(e[t]);
                t();
              });
            })
          );
        },
        add_file: function (e) {
          GodotInputDragDrop.promises.push(
            new Promise(function (t, o) {
              e.file(
                function (e) {
                  const r = new FileReader();
                  (r.onload = function () {
                    const o = {
                      path: e.relativePath || e.webkitRelativePath,
                      name: e.name,
                      type: e.type,
                      size: e.size,
                      data: r.result,
                    };
                    o.path || (o.path = o.name),
                      GodotInputDragDrop.pending_files.push(o),
                      t();
                  }),
                    (r.onerror = function () {
                      GodotRuntime.print("Error reading file"), o();
                    }),
                    r.readAsArrayBuffer(e);
                },
                function (e) {
                  GodotRuntime.print("Error!"), o();
                }
              );
            })
          );
        },
        process: function (e, t) {
          0 !== GodotInputDragDrop.promises.length
            ? GodotInputDragDrop.promises.pop().then(function () {
                setTimeout(function () {
                  GodotInputDragDrop.process(e, t);
                }, 0);
              })
            : e();
        },
        _process_event: function (e, t) {
          if ((e.preventDefault(), e.dataTransfer.items))
            for (let t = 0; t < e.dataTransfer.items.length; t++) {
              const o = e.dataTransfer.items[t];
              let r = null;
              "getAsEntry" in o
                ? (r = o.getAsEntry())
                : "webkitGetAsEntry" in o && (r = o.webkitGetAsEntry()),
                r && GodotInputDragDrop.add_entry(r);
            }
          else GodotRuntime.error("File upload not supported");
          new Promise(GodotInputDragDrop.process).then(function () {
            const e = `/tmp/drop-${parseInt(Math.random() * (1 << 30), 10)}/`,
              o = [],
              r = [];
            FS.mkdir(e.slice(0, -1)),
              GodotInputDragDrop.pending_files.forEach((t) => {
                const n = t.path;
                GodotFS.copy_to_fs(e + n, t.data);
                let i = n.indexOf("/");
                if (-1 === i) o.push(e + n);
                else {
                  const t = n.substr(0, i);
                  (i = t.indexOf("/")),
                    i < 0 && -1 === o.indexOf(e + t) && o.push(e + t);
                }
                r.push(e + n);
              }),
              (GodotInputDragDrop.promises = []),
              (GodotInputDragDrop.pending_files = []),
              t(o),
              GodotConfig.persistent_drops
                ? GodotOS.atexit(function (t, o) {
                    GodotInputDragDrop.remove_drop(r, e), t();
                  })
                : GodotInputDragDrop.remove_drop(r, e);
          });
        },
        remove_drop: function (e, t) {
          const o = [t.substr(0, t.length - 1)];
          e.forEach(function (e) {
            FS.unlink(e);
            let r = e.replace(t, ""),
              n = r.lastIndexOf("/");
            for (; n > 0; )
              (r = r.substr(0, n)),
                -1 === o.indexOf(t + r) && o.push(t + r),
                (n = r.lastIndexOf("/"));
          }),
            o
              .sort(function (e, t) {
                const o = (e.match(/\//g) || []).length,
                  r = (t.match(/\//g) || []).length;
                return o > r ? -1 : o < r ? 1 : 0;
              })
              .forEach(function (e) {
                FS.rmdir(e);
              });
        },
        handler: function (e) {
          return function (t) {
            GodotInputDragDrop._process_event(t, e);
          };
        },
      },
      GodotIME = {
        ime: null,
        active: !1,
        focusTimerIntervalId: -1,
        getModifiers: function (e) {
          return (
            e.shiftKey +
            0 +
            ((e.altKey + 0) << 1) +
            ((e.ctrlKey + 0) << 2) +
            ((e.metaKey + 0) << 3)
          );
        },
        ime_active: function (e) {
          function t() {
            clearInterval(GodotIME.focusTimerIntervalId),
              (GodotIME.focusTimerIntervalId = -1);
          }
          GodotIME.focusTimerIntervalId > -1 && t(),
            null != GodotIME.ime &&
              ((GodotIME.active = e),
              e
                ? ((GodotIME.ime.style.display = "block"),
                  (GodotIME.focusTimerIntervalId = setInterval(function () {
                    null != GodotIME.ime ? GodotIME.ime.focus() : t();
                  }, 100)))
                : ((GodotIME.ime.style.display = "none"),
                  GodotConfig.canvas.focus()));
        },
        ime_position: function (e, t) {
          if (null == GodotIME.ime) return;
          const o = GodotConfig.canvas,
            r = o.getBoundingClientRect(),
            n = o.width / r.width,
            i = o.height / r.height,
            a = e / n + r.x,
            s = t / i + r.y;
          (GodotIME.ime.style.left = `${a}px`),
            (GodotIME.ime.style.top = `${s}px`);
        },
        init: function (e, t, o, r) {
          function n(e, n) {
            const i = GodotIME.getModifiers(n);
            GodotRuntime.stringToHeap(n.code, o, 32),
              GodotRuntime.stringToHeap(n.key, r, 32),
              t(e, n.repeat, i),
              n.preventDefault();
          }
          function i(t) {
            if (null != GodotIME.ime)
              switch (t.type) {
                case "compositionstart":
                  e(0, null), (GodotIME.ime.innerHTML = "");
                  break;
                case "compositionupdate":
                  {
                    const o = GodotRuntime.allocString(t.data);
                    e(1, o), GodotRuntime.free(o);
                  }
                  break;
                case "compositionend": {
                  const o = GodotRuntime.allocString(t.data);
                  e(2, o), GodotRuntime.free(o), (GodotIME.ime.innerHTML = "");
                }
              }
          }
          const a = document.createElement("div");
          (a.className = "ime"),
            (a.style.background = "none"),
            (a.style.opacity = 0),
            (a.style.position = "fixed"),
            (a.style.textAlign = "left"),
            (a.style.fontSize = "1px"),
            (a.style.left = "0px"),
            (a.style.top = "0px"),
            (a.style.width = "100%"),
            (a.style.height = "40px"),
            (a.style.pointerEvents = "none"),
            (a.style.display = "none"),
            (a.contentEditable = "true"),
            GodotEventListeners.add(a, "compositionstart", i, !1),
            GodotEventListeners.add(a, "compositionupdate", i, !1),
            GodotEventListeners.add(a, "compositionend", i, !1),
            GodotEventListeners.add(a, "keydown", n.bind(null, 1), !1),
            GodotEventListeners.add(a, "keyup", n.bind(null, 0), !1),
            (a.onblur = function () {
              (this.style.display = "none"),
                GodotConfig.canvas.focus(),
                (GodotIME.active = !1);
            }),
            GodotConfig.canvas.parentElement.appendChild(a),
            (GodotIME.ime = a);
        },
        clear: function () {
          null != GodotIME.ime &&
            (GodotIME.focusTimerIntervalId > -1 &&
              (clearInterval(GodotIME.focusTimerIntervalId),
              (GodotIME.focusTimerIntervalId = -1)),
            GodotIME.ime.remove(),
            (GodotIME.ime = null));
        },
      },
      GodotInput = {
        getModifiers: function (e) {
          return (
            e.shiftKey +
            0 +
            ((e.altKey + 0) << 1) +
            ((e.ctrlKey + 0) << 2) +
            ((e.metaKey + 0) << 3)
          );
        },
        computePosition: function (e, t) {
          const o = GodotConfig.canvas,
            r = o.width / t.width,
            n = o.height / t.height;
          return [(e.clientX - t.x) * r, (e.clientY - t.y) * n];
        },
      };
    function _godot_js_input_drop_files_cb(e) {
      const t = GodotRuntime.get_func(e),
        o = GodotConfig.canvas;
      GodotEventListeners.add(
        o,
        "dragover",
        function (e) {
          e.preventDefault();
        },
        !1
      ),
        GodotEventListeners.add(
          o,
          "drop",
          GodotInputDragDrop.handler(function (e) {
            const o = e || [];
            if (!o.length) return;
            const r = o.length,
              n = GodotRuntime.allocStringArray(o);
            t(n, r), GodotRuntime.freeStringArray(n, r);
          })
        );
    }
    function _godot_js_input_gamepad_cb(e) {
      const t = GodotRuntime.get_func(e);
      GodotInputGamepads.init(t);
    }
    function _godot_js_input_gamepad_sample() {
      return GodotInputGamepads.sample(), 0;
    }
    function _godot_js_input_gamepad_sample_count() {
      return GodotInputGamepads.get_samples().length;
    }
    function _godot_js_input_gamepad_sample_get(e, t, o, r, n, i) {
      const a = GodotInputGamepads.get_sample(e);
      if (!a || !a.connected) return 1;
      const s = a.buttons,
        d = s.length < 16 ? s.length : 16;
      for (let e = 0; e < d; e++)
        GodotRuntime.setHeapValue(t + (e << 2), s[e], "float");
      GodotRuntime.setHeapValue(o, d, "i32");
      const l = a.axes,
        u = l.length < 10 ? l.length : 10;
      for (let e = 0; e < u; e++)
        GodotRuntime.setHeapValue(r + (e << 2), l[e], "float");
      GodotRuntime.setHeapValue(n, u, "i32");
      const c = a.standard ? 1 : 0;
      return GodotRuntime.setHeapValue(i, c, "i32"), 0;
    }
    function _godot_js_input_key_cb(e, t, o) {
      const r = GodotRuntime.get_func(e);
      function n(e, n) {
        const i = GodotInput.getModifiers(n);
        GodotRuntime.stringToHeap(n.code, t, 32),
          GodotRuntime.stringToHeap(n.key, o, 32),
          r(e, n.repeat, i),
          n.preventDefault();
      }
      GodotEventListeners.add(
        GodotConfig.canvas,
        "keydown",
        n.bind(null, 1),
        !1
      ),
        GodotEventListeners.add(
          GodotConfig.canvas,
          "keyup",
          n.bind(null, 0),
          !1
        );
    }
    function _godot_js_input_mouse_button_cb(e) {
      const t = GodotRuntime.get_func(e),
        o = GodotConfig.canvas;
      function r(e, r) {
        const n = o.getBoundingClientRect(),
          i = GodotInput.computePosition(r, n),
          a = GodotInput.getModifiers(r);
        e && GodotConfig.canvas.focus(),
          t(e, r.button, i[0], i[1], a) && r.preventDefault();
      }
      GodotEventListeners.add(o, "mousedown", r.bind(null, 1), !1),
        GodotEventListeners.add(window, "mouseup", r.bind(null, 0), !1);
    }
    function _godot_js_input_mouse_move_cb(e) {
      const t = GodotRuntime.get_func(e),
        o = GodotConfig.canvas;
      GodotEventListeners.add(
        window,
        "mousemove",
        function (e) {
          const r = o.getBoundingClientRect(),
            n = GodotInput.computePosition(e, r),
            i = o.width / r.width,
            a = o.height / r.height,
            s = e.movementX * i,
            d = e.movementY * a,
            l = GodotInput.getModifiers(e);
          t(n[0], n[1], s, d, l);
        },
        !1
      );
    }
    function _godot_js_input_mouse_wheel_cb(e) {
      const t = GodotRuntime.get_func(e);
      GodotEventListeners.add(
        GodotConfig.canvas,
        "wheel",
        function (e) {
          t(e.deltaX || 0, e.deltaY || 0) && e.preventDefault();
        },
        !1
      );
    }
    function _godot_js_input_paste_cb(e) {
      const t = GodotRuntime.get_func(e);
      GodotEventListeners.add(
        window,
        "paste",
        function (e) {
          const o = e.clipboardData.getData("text"),
            r = GodotRuntime.allocString(o);
          t(r), GodotRuntime.free(r);
        },
        !1
      );
    }
    function _godot_js_input_touch_cb(e, t, o) {
      const r = GodotRuntime.get_func(e),
        n = GodotConfig.canvas;
      function i(e, i) {
        0 === e && GodotConfig.canvas.focus();
        const a = n.getBoundingClientRect(),
          s = i.changedTouches;
        for (let e = 0; e < s.length; e++) {
          const r = s[e],
            n = GodotInput.computePosition(r, a);
          GodotRuntime.setHeapValue(o + 2 * e * 8, n[0], "double"),
            GodotRuntime.setHeapValue(o + 8 * (2 * e + 1), n[1], "double"),
            GodotRuntime.setHeapValue(t + 4 * e, r.identifier, "i32");
        }
        r(e, s.length), i.cancelable && i.preventDefault();
      }
      GodotEventListeners.add(n, "touchstart", i.bind(null, 0), !1),
        GodotEventListeners.add(n, "touchend", i.bind(null, 1), !1),
        GodotEventListeners.add(n, "touchcancel", i.bind(null, 1), !1),
        GodotEventListeners.add(n, "touchmove", i.bind(null, 2), !1);
    }
    function _godot_js_input_vibrate_handheld(e) {
      "function" != typeof navigator.vibrate
        ? GodotRuntime.print("This browser does not support vibration.")
        : navigator.vibrate(e);
    }
    function _godot_js_is_ime_focused() {
      return GodotIME.active;
    }
    function _godot_js_os_download_buffer(e, t, o, r) {
      const n = GodotRuntime.heapSlice(HEAP8, e, t),
        i = GodotRuntime.parseString(o),
        a = GodotRuntime.parseString(r),
        s = new Blob([n], { type: a }),
        d = window.URL.createObjectURL(s),
        l = document.createElement("a");
      (l.href = d),
        (l.download = i),
        (l.style.display = "none"),
        document.body.appendChild(l),
        l.click(),
        l.remove(),
        window.URL.revokeObjectURL(d);
    }
    function _godot_js_os_execute(e) {
      const t = GodotRuntime.parseString(e),
        o = JSON.parse(t);
      return GodotConfig.on_execute ? (GodotConfig.on_execute(o), 0) : 1;
    }
    function _godot_js_os_finish_async(e) {
      const t = GodotRuntime.get_func(e);
      GodotOS.finish_async(t);
    }
    function _godot_js_os_fs_is_persistent() {
      return GodotFS.is_persistent();
    }
    function _godot_js_os_fs_sync(e) {
      const t = GodotRuntime.get_func(e);
      (GodotOS._fs_sync_promise = GodotFS.sync()),
        GodotOS._fs_sync_promise.then(function (e) {
          t();
        });
    }
    function _godot_js_os_has_feature(e) {
      const t = GodotRuntime.parseString(e),
        o = navigator.userAgent;
      return "web_macos" === t
        ? -1 !== o.indexOf("Mac")
          ? 1
          : 0
        : "web_windows" === t
        ? -1 !== o.indexOf("Windows")
          ? 1
          : 0
        : "web_android" === t
        ? -1 !== o.indexOf("Android")
          ? 1
          : 0
        : "web_ios" === t
        ? -1 !== o.indexOf("iPhone") ||
          -1 !== o.indexOf("iPad") ||
          -1 !== o.indexOf("iPod")
          ? 1
          : 0
        : "web_linuxbsd" === t &&
          (-1 !== o.indexOf("CrOS") ||
            -1 !== o.indexOf("BSD") ||
            -1 !== o.indexOf("Linux") ||
            -1 !== o.indexOf("X11"))
        ? 1
        : 0;
    }
    function _godot_js_os_hw_concurrency_get() {
      const e = navigator.hardwareConcurrency || 1;
      return e < 2 ? e : 2;
    }
    function _godot_js_os_request_quit_cb(e) {
      GodotOS.request_quit = GodotRuntime.get_func(e);
    }
    function _godot_js_os_shell_open(e) {
      window.open(GodotRuntime.parseString(e), "_blank");
    }
    var GodotPWA = {
      hasUpdate: !1,
      updateState: function (e, t) {
        t &&
          t.active &&
          (t.waiting && ((GodotPWA.hasUpdate = !0), e()),
          GodotEventListeners.add(t, "updatefound", function () {
            const o = t.installing;
            GodotEventListeners.add(o, "statechange", function () {
              "installed" === o.state && ((GodotPWA.hasUpdate = !0), e());
            });
          }));
      },
    };
    function _godot_js_pwa_cb(e) {
      if ("serviceWorker" in navigator)
        try {
          const t = GodotRuntime.get_func(e);
          navigator.serviceWorker
            .getRegistration()
            .then(GodotPWA.updateState.bind(null, t));
        } catch (e) {
          GodotRuntime.error("Failed to assign PWA callback", e);
        }
    }
    function _godot_js_pwa_update() {
      if ("serviceWorker" in navigator && GodotPWA.hasUpdate) {
        try {
          navigator.serviceWorker.getRegistration().then(function (e) {
            e && e.waiting && e.waiting.postMessage("update");
          });
        } catch (e) {
          return GodotRuntime.error(e), 1;
        }
        return 0;
      }
      return 1;
    }
    var GodotRTCDataChannel = {
      connect: function (e, t, o, r, n) {
        const i = IDHandler.get(e);
        i &&
          ((i.binaryType = "arraybuffer"),
          (i.onopen = function (e) {
            t();
          }),
          (i.onclose = function (e) {
            n();
          }),
          (i.onerror = function (e) {
            r();
          }),
          (i.onmessage = function (e) {
            let t,
              r = 0;
            if (e.data instanceof ArrayBuffer) t = new Uint8Array(e.data);
            else {
              if (e.data instanceof Blob)
                return void GodotRuntime.error("Blob type not supported");
              if ("string" != typeof e.data)
                return void GodotRuntime.error("Unknown message type");
              {
                r = 1;
                const o = new TextEncoder("utf-8");
                t = new Uint8Array(o.encode(e.data));
              }
            }
            const n = t.length * t.BYTES_PER_ELEMENT,
              i = GodotRuntime.malloc(n);
            HEAPU8.set(t, i), o(i, n, r), GodotRuntime.free(i);
          }));
      },
      close: function (e) {
        const t = IDHandler.get(e);
        t &&
          ((t.onopen = null),
          (t.onmessage = null),
          (t.onerror = null),
          (t.onclose = null),
          t.close());
      },
      get_prop: function (e, t, o) {
        const r = IDHandler.get(e);
        return r && void 0 !== r[t] ? r[t] : o;
      },
    };
    function _godot_js_rtc_datachannel_close(e) {
      IDHandler.get(e) && GodotRTCDataChannel.close(e);
    }
    function _godot_js_rtc_datachannel_connect(e, t, o, r, n, i) {
      const a = GodotRuntime.get_func(o).bind(null, t),
        s = GodotRuntime.get_func(r).bind(null, t),
        d = GodotRuntime.get_func(n).bind(null, t),
        l = GodotRuntime.get_func(i).bind(null, t);
      GodotRTCDataChannel.connect(e, a, s, d, l);
    }
    function _godot_js_rtc_datachannel_destroy(e) {
      GodotRTCDataChannel.close(e), IDHandler.remove(e);
    }
    function _godot_js_rtc_datachannel_get_buffered_amount(e) {
      return GodotRTCDataChannel.get_prop(e, "bufferedAmount", 0);
    }
    function _godot_js_rtc_datachannel_id_get(e) {
      return GodotRTCDataChannel.get_prop(e, "id", 65535);
    }
    function _godot_js_rtc_datachannel_is_negotiated(e) {
      return GodotRTCDataChannel.get_prop(e, "negotiated", 65535);
    }
    function _godot_js_rtc_datachannel_is_ordered(e) {
      return GodotRTCDataChannel.get_prop(e, "ordered", !0);
    }
    function _godot_js_rtc_datachannel_label_get(e) {
      const t = IDHandler.get(e);
      return t && t.label ? GodotRuntime.allocString(t.label) : 0;
    }
    function _godot_js_rtc_datachannel_max_packet_lifetime_get(e) {
      const t = IDHandler.get(e);
      return t
        ? void 0 !== t.maxPacketLifeTime
          ? t.maxPacketLifeTime
          : void 0 !== t.maxRetransmitTime
          ? t.maxRetransmitTime
          : 65535
        : 65535;
    }
    function _godot_js_rtc_datachannel_max_retransmits_get(e) {
      return GodotRTCDataChannel.get_prop(e, "maxRetransmits", 65535);
    }
    function _godot_js_rtc_datachannel_protocol_get(e) {
      const t = IDHandler.get(e);
      return t && t.protocol ? GodotRuntime.allocString(t.protocol) : 0;
    }
    function _godot_js_rtc_datachannel_ready_state_get(e) {
      const t = IDHandler.get(e);
      if (!t) return 3;
      switch (t.readyState) {
        case "connecting":
          return 0;
        case "open":
          return 1;
        case "closing":
          return 2;
        default:
          return 3;
      }
    }
    function _godot_js_rtc_datachannel_send(e, t, o, r) {
      const n = IDHandler.get(e);
      if (!n) return 1;
      const i = new Uint8Array(o);
      for (let e = 0; e < o; e++) i[e] = GodotRuntime.getHeapValue(t + e, "i8");
      if (r) n.send(i.buffer);
      else {
        const e = new TextDecoder("utf-8").decode(i);
        n.send(e);
      }
      return 0;
    }
    var GodotRTCPeerConnection = {
      ConnectionState: {
        new: 0,
        connecting: 1,
        connected: 2,
        disconnected: 3,
        failed: 4,
        closed: 5,
      },
      ConnectionStateCompat: {
        new: 0,
        checking: 1,
        connected: 2,
        completed: 2,
        disconnected: 3,
        failed: 4,
        closed: 5,
      },
      IceGatheringState: { new: 0, gathering: 1, complete: 2 },
      SignalingState: {
        stable: 0,
        "have-local-offer": 1,
        "have-remote-offer": 2,
        "have-local-pranswer": 3,
        "have-remote-pranswer": 4,
        closed: 5,
      },
      create: function (e, t, o, r, n, i) {
        let a = null;
        try {
          a = new RTCPeerConnection(e);
        } catch (e) {
          return GodotRuntime.error(e), 0;
        }
        const s = IDHandler.add(a);
        return (
          "connectionState" in a && void 0 !== a.connectionState
            ? (a.onconnectionstatechange = function (e) {
                IDHandler.get(s) &&
                  t(
                    GodotRTCPeerConnection.ConnectionState[a.connectionState] ||
                      0
                  );
              })
            : (a.oniceconnectionstatechange = function (e) {
                IDHandler.get(s) &&
                  t(
                    GodotRTCPeerConnection.ConnectionStateCompat[
                      a.iceConnectionState
                    ] || 0
                  );
              }),
          (a.onicegatheringstatechange = function (e) {
            IDHandler.get(s) &&
              r(
                GodotRTCPeerConnection.IceGatheringState[a.iceGatheringState] ||
                  0
              );
          }),
          (a.onsignalingstatechange = function (e) {
            IDHandler.get(s) &&
              o(GodotRTCPeerConnection.SignalingState[a.signalingState] || 0);
          }),
          (a.onicecandidate = function (e) {
            if (!IDHandler.get(s)) return;
            const t = e.candidate;
            if (!t || !t.candidate) return;
            const o = GodotRuntime.allocString(t.candidate),
              r = GodotRuntime.allocString(t.sdpMid);
            n(r, t.sdpMLineIndex, o),
              GodotRuntime.free(o),
              GodotRuntime.free(r);
          }),
          (a.ondatachannel = function (e) {
            if (!IDHandler.get(s)) return;
            const t = IDHandler.add(e.channel);
            i(t);
          }),
          s
        );
      },
      destroy: function (e) {
        const t = IDHandler.get(e);
        t &&
          ((t.onconnectionstatechange = null),
          (t.oniceconnectionstatechange = null),
          (t.onicegatheringstatechange = null),
          (t.onsignalingstatechange = null),
          (t.onicecandidate = null),
          (t.ondatachannel = null),
          IDHandler.remove(e));
      },
      onsession: function (e, t, o) {
        if (!IDHandler.get(e)) return;
        const r = GodotRuntime.allocString(o.type),
          n = GodotRuntime.allocString(o.sdp);
        t(r, n), GodotRuntime.free(r), GodotRuntime.free(n);
      },
      onerror: function (e, t, o) {
        IDHandler.get(e) && (GodotRuntime.error(o), t());
      },
    };
    function _godot_js_rtc_pc_close(e) {
      const t = IDHandler.get(e);
      t && t.close();
    }
    function _godot_js_rtc_pc_create(e, t, o, r, n, i, a) {
      const s = function (e) {
        return GodotRuntime.get_func(e).bind(null, t);
      };
      return GodotRTCPeerConnection.create(
        JSON.parse(GodotRuntime.parseString(e)),
        s(o),
        s(n),
        s(r),
        s(i),
        s(a)
      );
    }
    function _godot_js_rtc_pc_datachannel_create(e, t, o) {
      try {
        const r = IDHandler.get(e);
        if (!r) return 0;
        const n = GodotRuntime.parseString(t),
          i = JSON.parse(GodotRuntime.parseString(o)),
          a = r.createDataChannel(n, i);
        return IDHandler.add(a);
      } catch (e) {
        return GodotRuntime.error(e), 0;
      }
    }
    function _godot_js_rtc_pc_destroy(e) {
      GodotRTCPeerConnection.destroy(e);
    }
    function _godot_js_rtc_pc_ice_candidate_add(e, t, o, r) {
      const n = IDHandler.get(e);
      if (!n) return;
      const i = GodotRuntime.parseString(t),
        a = GodotRuntime.parseString(r);
      n.addIceCandidate(
        new RTCIceCandidate({ candidate: a, sdpMid: i, sdpMlineIndex: o })
      );
    }
    function _godot_js_rtc_pc_local_description_set(e, t, o, r, n) {
      const i = IDHandler.get(e);
      if (!i) return;
      const a = GodotRuntime.parseString(t),
        s = GodotRuntime.parseString(o),
        d = GodotRuntime.get_func(n).bind(null, r);
      i.setLocalDescription({ sdp: s, type: a }).catch(function (t) {
        GodotRTCPeerConnection.onerror(e, d, t);
      });
    }
    function _godot_js_rtc_pc_offer_create(e, t, o, r) {
      const n = IDHandler.get(e);
      if (!n) return;
      const i = GodotRuntime.get_func(o).bind(null, t),
        a = GodotRuntime.get_func(r).bind(null, t);
      n.createOffer()
        .then(function (t) {
          GodotRTCPeerConnection.onsession(e, i, t);
        })
        .catch(function (t) {
          GodotRTCPeerConnection.onerror(e, a, t);
        });
    }
    function _godot_js_rtc_pc_remote_description_set(e, t, o, r, n, i) {
      const a = IDHandler.get(e);
      if (!a) return;
      const s = GodotRuntime.parseString(t),
        d = GodotRuntime.parseString(o),
        l = GodotRuntime.get_func(i).bind(null, r),
        u = GodotRuntime.get_func(n).bind(null, r);
      a.setRemoteDescription({ sdp: d, type: s })
        .then(function () {
          return "offer" !== s
            ? Promise.resolve()
            : a.createAnswer().then(function (t) {
                GodotRTCPeerConnection.onsession(e, u, t);
              });
        })
        .catch(function (t) {
          GodotRTCPeerConnection.onerror(e, l, t);
        });
    }
    function _godot_js_set_ime_active(e) {
      GodotIME.ime_active(e);
    }
    function _godot_js_set_ime_cb(e, t, o, r) {
      const n = GodotRuntime.get_func(e),
        i = GodotRuntime.get_func(t);
      GodotIME.init(n, i, o, r);
    }
    function _godot_js_set_ime_position(e, t) {
      GodotIME.ime_position(e, t);
    }
    function _godot_js_tts_get_voices(e) {
      const t = GodotRuntime.get_func(e);
      try {
        const e = [],
          o = window.speechSynthesis.getVoices();
        for (let t = 0; t < o.length; t++) e.push(`${o[t].lang};${o[t].name}`);
        const r = GodotRuntime.allocStringArray(e);
        t(e.length, r), GodotRuntime.freeStringArray(r, e.length);
      } catch (e) {}
    }
    function _godot_js_tts_is_paused() {
      return window.speechSynthesis.paused;
    }
    function _godot_js_tts_is_speaking() {
      return window.speechSynthesis.speaking;
    }
    function _godot_js_tts_pause() {
      window.speechSynthesis.pause();
    }
    function _godot_js_tts_resume() {
      window.speechSynthesis.resume();
    }
    function _godot_js_tts_speak(e, t, o, r, n, i, a) {
      const s = GodotRuntime.get_func(a);
      const d = new SpeechSynthesisUtterance(GodotRuntime.parseString(e));
      (d.rate = n),
        (d.pitch = r),
        (d.volume = o / 100),
        d.addEventListener("end", function (e) {
          e.currentTarget.cb(1, e.currentTarget.id, 0);
        }),
        d.addEventListener("start", function (e) {
          e.currentTarget.cb(0, e.currentTarget.id, 0);
        }),
        d.addEventListener("error", function (e) {
          e.currentTarget.cb(2, e.currentTarget.id, 0);
        }),
        d.addEventListener("boundary", function (e) {
          e.currentTarget.cb(3, e.currentTarget.id, e.charIndex);
        }),
        (d.id = i),
        (d.cb = s);
      const l = GodotRuntime.parseString(t),
        u = window.speechSynthesis.getVoices();
      for (let e = 0; e < u.length; e++)
        if (u[e].name === l) {
          d.voice = u[e];
          break;
        }
      window.speechSynthesis.resume(), window.speechSynthesis.speak(d);
    }
    function _godot_js_tts_stop() {
      window.speechSynthesis.cancel(), window.speechSynthesis.resume();
    }
    var GodotWebMidi = { abortControllers: [], isListening: !1 };
    function _godot_js_webmidi_close_midi_inputs() {
      for (const e of GodotWebMidi.abortControllers) e.abort();
      (GodotWebMidi.abortControllers = []), (GodotWebMidi.isListening = !1);
    }
    function _godot_js_webmidi_open_midi_inputs(e, t, o, r) {
      if (GodotWebMidi.is_listening) return 0;
      if (!navigator.requestMIDIAccess) return 2;
      const n = GodotRuntime.get_func(e),
        i = GodotRuntime.get_func(t);
      return (
        (GodotWebMidi.isListening = !0),
        navigator.requestMIDIAccess().then((e) => {
          const t = [...e.inputs.values()],
            a = t.map((e) => e.name),
            s = GodotRuntime.allocStringArray(a);
          n(a.length, s),
            GodotRuntime.freeStringArray(s, a.length),
            t.forEach((e, t) => {
              const n = new AbortController();
              GodotWebMidi.abortControllers.push(n),
                e.addEventListener(
                  "midimessage",
                  (e) => {
                    const n = e.data[0],
                      a = e.data.slice(1),
                      s = a.length;
                    if (s > r) throw new Error(`data too big ${s} > ${r}`);
                    HEAPU8.set(a, o), i(t, n, o, a.length);
                  },
                  { signal: n.signal }
                );
            });
        }),
        0
      );
    }
    var GodotWebSocket = {
      _onopen: function (e, t, o) {
        const r = IDHandler.get(e);
        if (!r) return;
        const n = GodotRuntime.allocString(r.protocol);
        t(n), GodotRuntime.free(n);
      },
      _onmessage: function (e, t, o) {
        if (!IDHandler.get(e)) return;
        let r,
          n = 0;
        if (o.data instanceof ArrayBuffer) r = new Uint8Array(o.data);
        else {
          if (o.data instanceof Blob)
            return void GodotRuntime.error("Blob type not supported");
          if ("string" != typeof o.data)
            return void GodotRuntime.error("Unknown message type");
          {
            n = 1;
            const e = new TextEncoder("utf-8");
            r = new Uint8Array(e.encode(o.data));
          }
        }
        const i = r.length * r.BYTES_PER_ELEMENT,
          a = GodotRuntime.malloc(i);
        HEAPU8.set(r, a), t(a, i, n), GodotRuntime.free(a);
      },
      _onerror: function (e, t, o) {
        IDHandler.get(e) && t();
      },
      _onclose: function (e, t, o) {
        if (!IDHandler.get(e)) return;
        const r = GodotRuntime.allocString(o.reason);
        t(o.code, r, o.wasClean ? 1 : 0), GodotRuntime.free(r);
      },
      send: function (e, t) {
        const o = IDHandler.get(e);
        return o && o.readyState === o.OPEN ? (o.send(t), 0) : 1;
      },
      bufferedAmount: function (e) {
        const t = IDHandler.get(e);
        return t ? t.bufferedAmount : 0;
      },
      create: function (e, t, o, r, n) {
        const i = IDHandler.add(e);
        return (
          (e.onopen = GodotWebSocket._onopen.bind(null, i, t)),
          (e.onmessage = GodotWebSocket._onmessage.bind(null, i, o)),
          (e.onerror = GodotWebSocket._onerror.bind(null, i, r)),
          (e.onclose = GodotWebSocket._onclose.bind(null, i, n)),
          i
        );
      },
      close: function (e, t, o) {
        const r = IDHandler.get(e);
        if (r && r.readyState < r.CLOSING) {
          const e = t,
            n = o;
          r.close(e, n);
        }
      },
      destroy: function (e) {
        const t = IDHandler.get(e);
        t &&
          (GodotWebSocket.close(e, 3001, "destroyed"),
          IDHandler.remove(e),
          (t.onopen = null),
          (t.onmessage = null),
          (t.onerror = null),
          (t.onclose = null));
      },
    };
    function _godot_js_websocket_buffered_amount(e) {
      return GodotWebSocket.bufferedAmount(e);
    }
    function _godot_js_websocket_close(e, t, o) {
      const r = t,
        n = GodotRuntime.parseString(o);
      GodotWebSocket.close(e, r, n);
    }
    function _godot_js_websocket_create(e, t, o, r, n, i, a) {
      const s = GodotRuntime.get_func(r).bind(null, e),
        d = GodotRuntime.get_func(n).bind(null, e),
        l = GodotRuntime.get_func(i).bind(null, e),
        u = GodotRuntime.get_func(a).bind(null, e),
        c = GodotRuntime.parseString(t),
        _ = GodotRuntime.parseString(o);
      let f = null;
      try {
        f = _ ? new WebSocket(c, _.split(",")) : new WebSocket(c);
      } catch (e) {
        return 0;
      }
      return (
        (f.binaryType = "arraybuffer"), GodotWebSocket.create(f, s, d, l, u)
      );
    }
    function _godot_js_websocket_destroy(e) {
      GodotWebSocket.destroy(e);
    }
    function _godot_js_websocket_send(e, t, o, r) {
      const n = new Uint8Array(o);
      let i = 0;
      for (i = 0; i < o; i++) n[i] = GodotRuntime.getHeapValue(t + i, "i8");
      let a = n.buffer;
      return (
        r || (a = new TextDecoder("utf-8").decode(n)), GodotWebSocket.send(e, a)
      );
    }
    var GodotJSWrapper = {
      proxies: null,
      cb_ret: null,
      MyProxy: function (e) {
        const t = IDHandler.add(this);
        GodotJSWrapper.proxies.set(e, t);
        let o = 1;
        (this.ref = function () {
          o++;
        }),
          (this.unref = function () {
            o--,
              0 === o &&
                (IDHandler.remove(t), GodotJSWrapper.proxies.delete(e));
          }),
          (this.get_val = function () {
            return e;
          }),
          (this.get_id = function () {
            return t;
          });
      },
      get_proxied: function (e) {
        const t = GodotJSWrapper.proxies.get(e);
        if (void 0 === t) {
          return new GodotJSWrapper.MyProxy(e).get_id();
        }
        return IDHandler.get(t).ref(), t;
      },
      get_proxied_value: function (e) {
        const t = IDHandler.get(e);
        if (void 0 !== t) return t.get_val();
      },
      variant2js: function (e, t) {
        switch (e) {
          case 0:
            return null;
          case 1:
            return Boolean(GodotRuntime.getHeapValue(t, "i64"));
          case 2: {
            const e = GodotRuntime.getHeapValue(t, "i64");
            return e >= Number.MIN_SAFE_INTEGER && e <= Number.MAX_SAFE_INTEGER
              ? Number(e)
              : e;
          }
          case 3:
            return Number(GodotRuntime.getHeapValue(t, "double"));
          case 4:
            return GodotRuntime.parseString(GodotRuntime.getHeapValue(t, "*"));
          case 24:
            return GodotJSWrapper.get_proxied_value(
              GodotRuntime.getHeapValue(t, "i64")
            );
          default:
            return;
        }
      },
      js2variant: function (e, t) {
        if (null == e) return 0;
        const o = typeof e;
        if ("boolean" === o) return GodotRuntime.setHeapValue(t, e, "i64"), 1;
        if ("number" === o)
          return Number.isInteger(e)
            ? (GodotRuntime.setHeapValue(t, e, "i64"), 2)
            : (GodotRuntime.setHeapValue(t, e, "double"), 3);
        if ("bigint" === o) return GodotRuntime.setHeapValue(t, e, "i64"), 2;
        if ("string" === o) {
          const o = GodotRuntime.allocString(e);
          return GodotRuntime.setHeapValue(t, o, "*"), 4;
        }
        const r = GodotJSWrapper.get_proxied(e);
        return GodotRuntime.setHeapValue(t, r, "i64"), 24;
      },
      isBuffer: function (e) {
        return e instanceof ArrayBuffer || ArrayBuffer.isView(e);
      },
    };
    function _godot_js_wrapper_create_cb(e, t) {
      const o = GodotRuntime.get_func(t);
      let r = 0;
      return (
        (r = GodotJSWrapper.get_proxied(function () {
          if (!GodotJSWrapper.get_proxied_value(r)) return;
          GodotJSWrapper.cb_ret = null;
          const t = Array.from(arguments),
            n = new GodotJSWrapper.MyProxy(t);
          o(e, n.get_id(), t.length), n.unref();
          const i = GodotJSWrapper.cb_ret;
          return (GodotJSWrapper.cb_ret = null), i;
        })),
        r
      );
    }
    function _godot_js_wrapper_create_object(e, t, o, r, n, i, a) {
      const s = GodotRuntime.parseString(e);
      if (void 0 === window[s]) return -1;
      const d = GodotRuntime.get_func(r),
        l = GodotRuntime.get_func(a),
        u = new Array(o);
      for (let e = 0; e < o; e++) {
        const o = d(t, e, n, i),
          r = GodotRuntime.getHeapValue(i, "*");
        (u[e] = GodotJSWrapper.variant2js(o, n)), r && l(i, o);
      }
      try {
        const e = new window[s](...u);
        return GodotJSWrapper.js2variant(e, n);
      } catch (e) {
        return (
          GodotRuntime.error(
            `Error calling constructor ${s} with args:`,
            u,
            "error:",
            e
          ),
          -1
        );
      }
    }
    function _godot_js_wrapper_interface_get(e) {
      const t = GodotRuntime.parseString(e);
      return void 0 !== window[t] ? GodotJSWrapper.get_proxied(window[t]) : 0;
    }
    function _godot_js_wrapper_object_call(e, t, o, r, n, i, a, s) {
      const d = GodotJSWrapper.get_proxied_value(e);
      if (void 0 === d) return -1;
      const l = GodotRuntime.parseString(t),
        u = GodotRuntime.get_func(n),
        c = GodotRuntime.get_func(s),
        _ = new Array(r);
      for (let e = 0; e < r; e++) {
        const t = u(o, e, i, a),
          r = GodotRuntime.getHeapValue(a, "*");
        (_[e] = GodotJSWrapper.variant2js(t, i)), r && c(a, t);
      }
      try {
        const e = d[l](..._);
        return GodotJSWrapper.js2variant(e, i);
      } catch (e) {
        return (
          GodotRuntime.error(`Error calling method ${l} on:`, d, "error:", e),
          -1
        );
      }
    }
    function _godot_js_wrapper_object_get(e, t, o) {
      const r = GodotJSWrapper.get_proxied_value(e);
      if (void 0 === r) return 0;
      if (o) {
        const e = GodotRuntime.parseString(o);
        try {
          return GodotJSWrapper.js2variant(r[e], t);
        } catch (t) {
          return (
            GodotRuntime.error(`Error getting variable ${e} on object`, r), 0
          );
        }
      }
      return GodotJSWrapper.js2variant(r, t);
    }
    function _godot_js_wrapper_object_getvar(e, t, o) {
      const r = GodotJSWrapper.get_proxied_value(e);
      if (void 0 === r) return -1;
      const n = GodotJSWrapper.variant2js(t, o);
      if (null == n) return -1;
      try {
        return GodotJSWrapper.js2variant(r[n], o);
      } catch (e) {
        return (
          GodotRuntime.error(`Error getting variable ${n} on object`, r, e), -1
        );
      }
    }
    function _godot_js_wrapper_object_is_buffer(e) {
      const t = GodotJSWrapper.get_proxied_value(e);
      return GodotJSWrapper.isBuffer(t) ? 1 : 0;
    }
    function _godot_js_wrapper_object_set(e, t, o, r) {
      const n = GodotJSWrapper.get_proxied_value(e);
      if (void 0 === n) return;
      const i = GodotRuntime.parseString(t);
      try {
        n[i] = GodotJSWrapper.variant2js(o, r);
      } catch (e) {
        GodotRuntime.error(`Error setting variable ${i} on object`, n);
      }
    }
    function _godot_js_wrapper_object_set_cb_ret(e, t) {
      GodotJSWrapper.cb_ret = GodotJSWrapper.variant2js(e, t);
    }
    function _godot_js_wrapper_object_setvar(e, t, o, r, n) {
      const i = GodotJSWrapper.get_proxied_value(e);
      if (void 0 === i) return -1;
      const a = GodotJSWrapper.variant2js(t, o);
      try {
        return (i[a] = GodotJSWrapper.variant2js(r, n)), 0;
      } catch (e) {
        return (
          GodotRuntime.error(`Error setting variable ${a} on object`, i), -1
        );
      }
    }
    function _godot_js_wrapper_object_transfer_buffer(e, t, o, r) {
      let n = GodotJSWrapper.get_proxied_value(e);
      if (!GodotJSWrapper.isBuffer(n)) return;
      !ArrayBuffer.isView(n) || n instanceof Uint8Array
        ? n instanceof ArrayBuffer && (n = new Uint8Array(n))
        : (n = new Uint8Array(n.buffer));
      const i = GodotRuntime.get_func(r)(t, o, n.length);
      HEAPU8.set(n, i);
    }
    function _godot_js_wrapper_object_unref(e) {
      const t = IDHandler.get(e);
      void 0 !== t && t.unref();
    }
    function _godot_webgl2_glFramebufferTextureMultisampleMultiviewOVR(
      e,
      t,
      o,
      r,
      n,
      i,
      a
    ) {
      const s = GL.currentContext;
      if (void 0 === s.oculusMultiviewExt) {
        const e = s.GLctx.getExtension("OCULUS_multiview");
        if (!e)
          return void GodotRuntime.error(
            "Trying to call glFramebufferTextureMultisampleMultiviewOVR() without the OCULUS_multiview extension"
          );
        s.oculusMultiviewExt = e;
      }
      s.oculusMultiviewExt.framebufferTextureMultisampleMultiviewOVR(
        e,
        t,
        GL.textures[o],
        r,
        n,
        i,
        a
      );
    }
    function _godot_webgl2_glFramebufferTextureMultiviewOVR(e, t, o, r, n, i) {
      const a = GL.currentContext;
      if (void 0 === a.multiviewExt) {
        const e = a.GLctx.getExtension("OVR_multiview2");
        if (!e)
          return void GodotRuntime.error(
            "Trying to call glFramebufferTextureMultiviewOVR() without the OVR_multiview2 extension"
          );
        a.multiviewExt = e;
      }
      a.multiviewExt.framebufferTextureMultiviewOVR(
        e,
        t,
        GL.textures[o],
        r,
        n,
        i
      );
    }
    function _godot_webgl2_glGetBufferSubData(e, t, o, r) {
      const n = _emscripten_webgl_get_current_context(),
        i = GL.getContext(n);
      i && i.GLctx.getBufferSubData(e, t, HEAPU8, r, o);
    }
    var GodotWebXR = {
      gl: null,
      session: null,
      gl_binding: null,
      layer: null,
      space: null,
      frame: null,
      pose: null,
      view_count: 1,
      input_sources: [, , , , , , , , , , , , , , ,],
      touches: [, , , ,],
      onsimpleevent: null,
      orig_requestAnimationFrame: null,
      requestAnimationFrame: (e) => {
        if (GodotWebXR.session && GodotWebXR.space) {
          const t = function (t, o) {
            (GodotWebXR.frame = o),
              (GodotWebXR.pose = o.getViewerPose(GodotWebXR.space)),
              e(t),
              (GodotWebXR.frame = null),
              (GodotWebXR.pose = null);
          };
          GodotWebXR.session.requestAnimationFrame(t);
        } else GodotWebXR.orig_requestAnimationFrame(e);
      },
      monkeyPatchRequestAnimationFrame: (e) => {
        null === GodotWebXR.orig_requestAnimationFrame &&
          (GodotWebXR.orig_requestAnimationFrame =
            Browser.requestAnimationFrame),
          (Browser.requestAnimationFrame = e
            ? GodotWebXR.requestAnimationFrame
            : GodotWebXR.orig_requestAnimationFrame);
      },
      pauseResumeMainLoop: () => {
        Browser.mainLoop.pause(),
          runtimeKeepalivePush(),
          window.setTimeout(function () {
            runtimeKeepalivePop(), Browser.mainLoop.resume();
          }, 0);
      },
      getLayer: () => {
        const e = GodotWebXR.pose ? GodotWebXR.pose.views.length : 1;
        let t = GodotWebXR.layer;
        if (t && GodotWebXR.view_count === e) return t;
        if (!GodotWebXR.session || !GodotWebXR.gl_binding) return null;
        const o = GodotWebXR.gl;
        return (
          (t = GodotWebXR.gl_binding.createProjectionLayer({
            textureType: e > 1 ? "texture-array" : "texture",
            colorFormat: o.RGBA8,
            depthFormat: o.DEPTH_COMPONENT24,
          })),
          GodotWebXR.session.updateRenderState({ layers: [t] }),
          (GodotWebXR.layer = t),
          (GodotWebXR.view_count = e),
          t
        );
      },
      getSubImage: () => {
        if (!GodotWebXR.pose) return null;
        const e = GodotWebXR.getLayer();
        return null === e
          ? null
          : GodotWebXR.gl_binding.getViewSubImage(e, GodotWebXR.pose.views[0]);
      },
      getTextureId: (e) => {
        if (void 0 !== e.name) return e.name;
        const t = GL.getNewId(GL.textures);
        return (e.name = t), (GL.textures[t] = e), t;
      },
      addInputSource: (e) => {
        let t = -1;
        if ("tracked-pointer" === e.targetRayMode && "left" === e.handedness)
          t = 0;
        else if (
          "tracked-pointer" === e.targetRayMode &&
          "right" === e.handedness
        )
          t = 1;
        else
          for (let e = 2; e < 16; e++)
            if (!GodotWebXR.input_sources[e]) {
              t = e;
              break;
            }
        if (
          t >= 0 &&
          ((GodotWebXR.input_sources[t] = e),
          (e.name = t),
          "screen" === e.targetRayMode)
        ) {
          let t = -1;
          for (let e = 0; e < 5; e++)
            if (!GodotWebXR.touches[e]) {
              t = e;
              break;
            }
          t >= 0 && ((GodotWebXR.touches[t] = e), (e.touch_index = t));
        }
        return t;
      },
      removeInputSource: (e) => {
        if (void 0 !== e.name) {
          const t = e.name;
          if (
            (t >= 0 && t < 16 && (GodotWebXR.input_sources[t] = null),
            void 0 !== e.touch_index)
          ) {
            const t = e.touch_index;
            t >= 0 && t < 5 && (GodotWebXR.touches[t] = null);
          }
          return t;
        }
        return -1;
      },
      getInputSourceId: (e) => (void 0 !== e ? e.name : -1),
      getTouchIndex: (e) => (void 0 !== e.touch_index ? e.touch_index : -1),
    };
    function _godot_webxr_get_bounds_geometry(e) {
      if (!GodotWebXR.space || !GodotWebXR.space.boundsGeometry) return 0;
      const t = GodotWebXR.space.boundsGeometry.length;
      if (0 === t) return 0;
      const o = GodotRuntime.malloc(3 * t * 4);
      for (let e = 0; e < t; e++) {
        const t = GodotWebXR.space.boundsGeometry[e];
        GodotRuntime.setHeapValue(o + 4 * (3 * e + 0), t.x, "float"),
          GodotRuntime.setHeapValue(o + 4 * (3 * e + 1), t.y, "float"),
          GodotRuntime.setHeapValue(o + 4 * (3 * e + 2), t.z, "float");
      }
      return GodotRuntime.setHeapValue(e, o, "i32"), t;
    }
    function _godot_webxr_get_color_texture() {
      const e = GodotWebXR.getSubImage();
      return null === e ? 0 : GodotWebXR.getTextureId(e.colorTexture);
    }
    function _godot_webxr_get_depth_texture() {
      const e = GodotWebXR.getSubImage();
      return null === e
        ? 0
        : e.depthStencilTexture
        ? GodotWebXR.getTextureId(e.depthStencilTexture)
        : 0;
    }
    function _godot_webxr_get_frame_rate() {
      return GodotWebXR.session && void 0 !== GodotWebXR.session.frameRate
        ? GodotWebXR.session.frameRate
        : 0;
    }
    function _godot_webxr_get_projection_for_view(e, t) {
      if (!GodotWebXR.session || !GodotWebXR.pose) return !1;
      const o = GodotWebXR.pose.views[e].projectionMatrix;
      for (let e = 0; e < 16; e++)
        GodotRuntime.setHeapValue(t + 4 * e, o[e], "float");
      return !0;
    }
    function _godot_webxr_get_render_target_size(e) {
      const t = GodotWebXR.getSubImage();
      return (
        null !== t &&
        (GodotRuntime.setHeapValue(e + 0, t.viewport.width, "i32"),
        GodotRuntime.setHeapValue(e + 4, t.viewport.height, "i32"),
        !0)
      );
    }
    function _godot_webxr_get_supported_frame_rates(e) {
      if (
        !GodotWebXR.session ||
        void 0 === GodotWebXR.session.supportedFrameRates
      )
        return 0;
      const t = GodotWebXR.session.supportedFrameRates.length;
      if (0 === t) return 0;
      const o = GodotRuntime.malloc(4 * t);
      for (let e = 0; e < t; e++)
        GodotRuntime.setHeapValue(
          o + 4 * e,
          GodotWebXR.session.supportedFrameRates[e],
          "float"
        );
      return GodotRuntime.setHeapValue(e, o, "i32"), t;
    }
    function _godot_webxr_get_transform_for_view(e, t) {
      if (!GodotWebXR.session || !GodotWebXR.pose) return !1;
      const o = GodotWebXR.pose.views;
      let r;
      r = e >= 0 ? o[e].transform.matrix : GodotWebXR.pose.transform.matrix;
      for (let e = 0; e < 16; e++)
        GodotRuntime.setHeapValue(t + 4 * e, r[e], "float");
      return !0;
    }
    function _godot_webxr_get_velocity_texture() {
      const e = GodotWebXR.getSubImage();
      return null === e
        ? 0
        : e.motionVectorTexture
        ? GodotWebXR.getTextureId(e.motionVectorTexture)
        : 0;
    }
    function _godot_webxr_get_view_count() {
      if (!GodotWebXR.session || !GodotWebXR.pose) return 1;
      const e = GodotWebXR.pose.views.length;
      return e > 0 ? e : 1;
    }
    function _godot_webxr_get_visibility_state() {
      return GodotWebXR.session && GodotWebXR.session.visibilityState
        ? GodotRuntime.allocString(GodotWebXR.session.visibilityState)
        : 0;
    }
    var _godot_webxr_initialize = function (e, t, o, r, n, i, a, s, d) {
      GodotWebXR.monkeyPatchRequestAnimationFrame(!0);
      const l = GodotRuntime.parseString(e),
        u = GodotRuntime.parseString(t)
          .split(",")
          .map((e) => e.trim())
          .filter((e) => "" !== e),
        c = GodotRuntime.parseString(o)
          .split(",")
          .map((e) => e.trim())
          .filter((e) => "" !== e),
        _ = GodotRuntime.parseString(r)
          .split(",")
          .map((e) => e.trim()),
        f = GodotRuntime.get_func(n),
        g = GodotRuntime.get_func(i),
        m = GodotRuntime.get_func(a),
        p = GodotRuntime.get_func(s),
        h = GodotRuntime.get_func(d),
        b = {};
      u.length > 0 && (b.requiredFeatures = u),
        c.length > 0 && (b.optionalFeatures = c),
        navigator.xr
          .requestSession(l, b)
          .then(function (e) {
            (GodotWebXR.session = e),
              e.addEventListener("end", function (e) {
                g();
              }),
              e.addEventListener("inputsourceschange", function (e) {
                e.added.forEach(GodotWebXR.addInputSource),
                  e.removed.forEach(GodotWebXR.removeInputSource);
              }),
              [
                "selectstart",
                "selectend",
                "squeezestart",
                "squeezeend",
              ].forEach((t, o) => {
                e.addEventListener(t, function (e) {
                  (GodotWebXR.frame = e.frame),
                    p(o, GodotWebXR.getInputSourceId(e.inputSource)),
                    (GodotWebXR.frame = null);
                });
              }),
              e.addEventListener("visibilitychange", function (e) {
                const t = GodotRuntime.allocString("visibility_state_changed");
                h(t), GodotRuntime.free(t);
              }),
              (GodotWebXR.onsimpleevent = h);
            const t = _emscripten_webgl_get_current_context(),
              o = GL.getContext(t).GLctx;
            (GodotWebXR.gl = o),
              o
                .makeXRCompatible()
                .then(function () {
                  (GodotWebXR.gl_binding = new XRWebGLBinding(e, o)),
                    GodotWebXR.getLayer(),
                    (function t() {
                      const o = _.shift();
                      e.requestReferenceSpace(o)
                        .then((t) => {
                          !(function (t, o) {
                            (GodotWebXR.space = t),
                              (t.onreset = function (e) {
                                const t = GodotRuntime.allocString(
                                  "reference_space_reset"
                                );
                                h(t), GodotRuntime.free(t);
                              }),
                              GodotWebXR.pauseResumeMainLoop(),
                              window.setTimeout(function () {
                                const t = GodotRuntime.allocString(o),
                                  r =
                                    "enabledFeatures" in e
                                      ? Array.from(e.enabledFeatures)
                                      : [],
                                  n = GodotRuntime.allocString(r.join(",")),
                                  i =
                                    "environmentBlendMode" in e
                                      ? e.environmentBlendMode
                                      : "",
                                  a = GodotRuntime.allocString(i);
                                f(t, n, a),
                                  GodotRuntime.free(t),
                                  GodotRuntime.free(n),
                                  GodotRuntime.free(a);
                              }, 0);
                          })(t, o);
                        })
                        .catch(() => {
                          if (0 === _.length) {
                            const e = GodotRuntime.allocString(
                              "Unable to get any of the requested reference space types"
                            );
                            m(e), GodotRuntime.free(e);
                          } else t();
                        });
                    })();
                })
                .catch(function (e) {
                  const t = GodotRuntime.allocString(
                    `Unable to make WebGL context compatible with WebXR: ${e}`
                  );
                  m(t), GodotRuntime.free(t);
                });
          })
          .catch(function (e) {
            const t = GodotRuntime.allocString(`Unable to start session: ${e}`);
            m(t), GodotRuntime.free(t);
          });
    };
    function _godot_webxr_is_session_supported(e, t) {
      const o = GodotRuntime.parseString(e),
        r = GodotRuntime.get_func(t);
      if (navigator.xr)
        navigator.xr.isSessionSupported(o).then(function (e) {
          const t = GodotRuntime.allocString(o);
          r(t, e ? 1 : 0), GodotRuntime.free(t);
        });
      else {
        const e = GodotRuntime.allocString(o);
        r(e, 0), GodotRuntime.free(e);
      }
    }
    function _godot_webxr_is_supported() {
      return !!navigator.xr;
    }
    var _godot_webxr_uninitialize = function () {
      GodotWebXR.session && GodotWebXR.session.end().catch((e) => {}),
        (GodotWebXR.session = null),
        (GodotWebXR.gl_binding = null),
        (GodotWebXR.layer = null),
        (GodotWebXR.space = null),
        (GodotWebXR.frame = null),
        (GodotWebXR.pose = null),
        (GodotWebXR.view_count = 1),
        (GodotWebXR.input_sources = new Array(16)),
        (GodotWebXR.touches = new Array(5)),
        (GodotWebXR.onsimpleevent = null),
        GodotWebXR.monkeyPatchRequestAnimationFrame(!1),
        GodotWebXR.pauseResumeMainLoop();
    };
    function _godot_webxr_update_input_source(
      e,
      t,
      o,
      r,
      n,
      i,
      a,
      s,
      d,
      l,
      u,
      c,
      _,
      f
    ) {
      if (!GodotWebXR.session || !GodotWebXR.frame) return 0;
      if (
        e < 0 ||
        e >= GodotWebXR.input_sources.length ||
        !GodotWebXR.input_sources[e]
      )
        return !1;
      const g = GodotWebXR.input_sources[e],
        m = GodotWebXR.frame,
        p = GodotWebXR.space,
        h = m.getPose(g.targetRaySpace, p);
      if (!h) return !1;
      const b = h.transform.matrix;
      for (let e = 0; e < 16; e++)
        GodotRuntime.setHeapValue(t + 4 * e, b[e], "float");
      let S = 0;
      switch (g.targetRayMode) {
        case "gaze":
          S = 1;
          break;
        case "tracked-pointer":
          S = 2;
          break;
        case "screen":
          S = 3;
      }
      GodotRuntime.setHeapValue(o, S, "i32"),
        GodotRuntime.setHeapValue(r, GodotWebXR.getTouchIndex(g), "i32");
      let v = !1;
      if (g.gripSpace) {
        const e = m.getPose(g.gripSpace, p);
        if (e) {
          const t = e.transform.matrix;
          for (let e = 0; e < 16; e++)
            GodotRuntime.setHeapValue(i + 4 * e, t[e], "float");
          v = !0;
        }
      }
      GodotRuntime.setHeapValue(n, v ? 1 : 0, "i32");
      let G = !1,
        y = 0,
        E = 0;
      if (g.gamepad) {
        "xr-standard" === g.gamepad.mapping && (G = !0),
          (y = Math.min(g.gamepad.buttons.length, 10));
        for (let e = 0; e < y; e++)
          GodotRuntime.setHeapValue(
            d + 4 * e,
            g.gamepad.buttons[e].value,
            "float"
          );
        E = Math.min(g.gamepad.axes.length, 10);
        for (let e = 0; e < E; e++)
          GodotRuntime.setHeapValue(u + 4 * e, g.gamepad.axes[e], "float");
      }
      GodotRuntime.setHeapValue(a, G ? 1 : 0, "i32"),
        GodotRuntime.setHeapValue(s, y, "i32"),
        GodotRuntime.setHeapValue(l, E, "i32");
      let w = !1;
      if (g.hand && 0 !== _ && 0 !== f) {
        const e = new Float32Array(400),
          t = new Float32Array(25);
        m.fillPoses(g.hand.values(), p, e) &&
          m.fillJointRadii(g.hand.values(), t) &&
          (GodotRuntime.heapCopy(HEAPF32, e, _),
          GodotRuntime.heapCopy(HEAPF32, t, f),
          (w = !0));
      }
      return GodotRuntime.setHeapValue(c, w ? 1 : 0, "i32"), !0;
    }
    function _godot_webxr_update_target_frame_rate(e) {
      GodotWebXR.session &&
        void 0 !== GodotWebXR.session.updateTargetFrameRate &&
        GodotWebXR.session.updateTargetFrameRate(e).then(() => {
          const e = GodotRuntime.allocString("display_refresh_rate_changed");
          GodotWebXR.onsimpleevent(e), GodotRuntime.free(e);
        });
    }
    var stackAlloc = (e) => __emscripten_stack_alloc(e),
      stringToUTF8OnStack = (e) => {
        var t = lengthBytesUTF8(e) + 1,
          o = stackAlloc(t);
        return stringToUTF8(e, o, t), o;
      },
      getCFunc = (e) => {
        var t = Module["_" + e];
        return (
          assert(
            t,
            "Cannot call unknown function " + e + ", make sure it is exported"
          ),
          t
        );
      },
      writeArrayToMemory = (e, t) => {
        assert(
          e.length >= 0,
          "writeArrayToMemory array must have a length (should be an array or typed array)"
        ),
          HEAP8.set(e, t);
      },
      stackSave = () => _emscripten_stack_get_current(),
      stackRestore = (e) => __emscripten_stack_restore(e),
      ccall = (e, t, o, r, n) => {
        var i = {
          string: (e) => {
            var t = 0;
            return null != e && 0 !== e && (t = stringToUTF8OnStack(e)), t;
          },
          array: (e) => {
            var t = stackAlloc(e.length);
            return writeArrayToMemory(e, t), t;
          },
        };
        var a = getCFunc(e),
          s = [],
          d = 0;
        if ((assert("array" !== t, 'Return type should not be "array".'), r))
          for (var l = 0; l < r.length; l++) {
            var u = i[o[l]];
            u
              ? (0 === d && (d = stackSave()), (s[l] = u(r[l])))
              : (s[l] = r[l]);
          }
        var c = a(...s);
        return (c = (function (e) {
          return (
            0 !== d && stackRestore(d),
            (function (e) {
              return "string" === t
                ? UTF8ToString(e)
                : "boolean" === t
                ? Boolean(e)
                : e;
            })(e)
          );
        })(c));
      },
      cwrap =
        (e, t, o, r) =>
        (...n) =>
          ccall(e, t, o, n, r);
    (FS.createPreloadedFile = FS_createPreloadedFile),
      FS.staticInit(),
      (Module.requestFullscreen = Browser.requestFullscreen),
      (Module.requestFullScreen = Browser.requestFullScreen),
      (Module.requestAnimationFrame = Browser.requestAnimationFrame),
      (Module.setCanvasSize = Browser.setCanvasSize),
      (Module.pauseMainLoop = Browser.mainLoop.pause),
      (Module.resumeMainLoop = Browser.mainLoop.resume),
      (Module.getUserMedia = Browser.getUserMedia),
      (Module.createContext = Browser.createContext);
    for (
      var preloadedImages = {}, preloadedAudios = {}, GLctx, i = 0;
      i < 32;
      ++i
    )
      tempFixedLengthArray.push(new Array(i));
    for (
      var miniTempWebGLIntBuffersStorage = new Int32Array(288), i = 0;
      i <= 288;
      ++i
    )
      miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(
        0,
        i
      );
    for (
      var miniTempWebGLFloatBuffersStorage = new Float32Array(288), i = 0;
      i <= 288;
      ++i
    )
      miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(
        0,
        i
      );
    function checkIncomingModuleAPI() {
      ignoredModuleProp("fetchSettings");
    }
    (Module.request_quit = function () {
      GodotOS.request_quit();
    }),
      (Module.onExit = GodotOS.cleanup),
      (GodotOS._fs_sync_promise = Promise.resolve()),
      (Module.initConfig = GodotConfig.init_config),
      (Module.initFS = GodotFS.init),
      (Module.copyToFS = GodotFS.copy_to_fs),
      GodotOS.atexit(function (e, t) {
        GodotDisplayCursor.clear(), e();
      }),
      GodotOS.atexit(function (e, t) {
        GodotEventListeners.clear(), e();
      }),
      GodotOS.atexit(function (e, t) {
        GodotDisplayVK.clear(), e();
      }),
      GodotOS.atexit(function (e, t) {
        GodotIME.clear(), e();
      }),
      (GodotJSWrapper.proxies = new Map());
    var wasmImports = {
        __assert_fail: ___assert_fail,
        __call_sighandler: ___call_sighandler,
        __syscall_chdir: ___syscall_chdir,
        __syscall_chmod: ___syscall_chmod,
        __syscall_faccessat: ___syscall_faccessat,
        __syscall_fchmod: ___syscall_fchmod,
        __syscall_fcntl64: ___syscall_fcntl64,
        __syscall_fstat64: ___syscall_fstat64,
        __syscall_ftruncate64: ___syscall_ftruncate64,
        __syscall_getcwd: ___syscall_getcwd,
        __syscall_getdents64: ___syscall_getdents64,
        __syscall_ioctl: ___syscall_ioctl,
        __syscall_lstat64: ___syscall_lstat64,
        __syscall_mkdirat: ___syscall_mkdirat,
        __syscall_mknodat: ___syscall_mknodat,
        __syscall_newfstatat: ___syscall_newfstatat,
        __syscall_openat: ___syscall_openat,
        __syscall_readlinkat: ___syscall_readlinkat,
        __syscall_renameat: ___syscall_renameat,
        __syscall_rmdir: ___syscall_rmdir,
        __syscall_stat64: ___syscall_stat64,
        __syscall_statfs64: ___syscall_statfs64,
        __syscall_symlink: ___syscall_symlink,
        __syscall_unlinkat: ___syscall_unlinkat,
        _abort_js: __abort_js,
        _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
        _emscripten_runtime_keepalive_clear:
          __emscripten_runtime_keepalive_clear,
        _gmtime_js: __gmtime_js,
        _localtime_js: __localtime_js,
        _tzset_js: __tzset_js,
        emscripten_cancel_main_loop: _emscripten_cancel_main_loop,
        emscripten_date_now: _emscripten_date_now,
        emscripten_err: _emscripten_err,
        emscripten_force_exit: _emscripten_force_exit,
        emscripten_get_heap_max: _emscripten_get_heap_max,
        emscripten_get_now: _emscripten_get_now,
        emscripten_resize_heap: _emscripten_resize_heap,
        emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size,
        emscripten_set_main_loop: _emscripten_set_main_loop,
        emscripten_webgl_commit_frame: _emscripten_webgl_commit_frame,
        emscripten_webgl_create_context: _emscripten_webgl_create_context,
        emscripten_webgl_destroy_context: _emscripten_webgl_destroy_context,
        emscripten_webgl_enable_extension: _emscripten_webgl_enable_extension,
        emscripten_webgl_get_supported_extensions:
          _emscripten_webgl_get_supported_extensions,
        emscripten_webgl_make_context_current:
          _emscripten_webgl_make_context_current,
        environ_get: _environ_get,
        environ_sizes_get: _environ_sizes_get,
        exit: _exit,
        fd_close: _fd_close,
        fd_fdstat_get: _fd_fdstat_get,
        fd_read: _fd_read,
        fd_seek: _fd_seek,
        fd_write: _fd_write,
        glActiveTexture: _glActiveTexture,
        glAttachShader: _glAttachShader,
        glBeginTransformFeedback: _glBeginTransformFeedback,
        glBindBuffer: _glBindBuffer,
        glBindBufferBase: _glBindBufferBase,
        glBindBufferRange: _glBindBufferRange,
        glBindFramebuffer: _glBindFramebuffer,
        glBindRenderbuffer: _glBindRenderbuffer,
        glBindTexture: _glBindTexture,
        glBindVertexArray: _glBindVertexArray,
        glBlendColor: _glBlendColor,
        glBlendEquation: _glBlendEquation,
        glBlendFunc: _glBlendFunc,
        glBlendFuncSeparate: _glBlendFuncSeparate,
        glBlitFramebuffer: _glBlitFramebuffer,
        glBufferData: _glBufferData,
        glBufferSubData: _glBufferSubData,
        glCheckFramebufferStatus: _glCheckFramebufferStatus,
        glClear: _glClear,
        glClearBufferfv: _glClearBufferfv,
        glClearColor: _glClearColor,
        glClearDepthf: _glClearDepthf,
        glColorMask: _glColorMask,
        glCompileShader: _glCompileShader,
        glCompressedTexImage2D: _glCompressedTexImage2D,
        glCompressedTexImage3D: _glCompressedTexImage3D,
        glCompressedTexSubImage3D: _glCompressedTexSubImage3D,
        glCopyBufferSubData: _glCopyBufferSubData,
        glCreateProgram: _glCreateProgram,
        glCreateShader: _glCreateShader,
        glCullFace: _glCullFace,
        glDeleteBuffers: _glDeleteBuffers,
        glDeleteFramebuffers: _glDeleteFramebuffers,
        glDeleteProgram: _glDeleteProgram,
        glDeleteQueries: _glDeleteQueries,
        glDeleteRenderbuffers: _glDeleteRenderbuffers,
        glDeleteShader: _glDeleteShader,
        glDeleteSync: _glDeleteSync,
        glDeleteTextures: _glDeleteTextures,
        glDeleteVertexArrays: _glDeleteVertexArrays,
        glDepthFunc: _glDepthFunc,
        glDepthMask: _glDepthMask,
        glDisable: _glDisable,
        glDisableVertexAttribArray: _glDisableVertexAttribArray,
        glDrawArrays: _glDrawArrays,
        glDrawArraysInstanced: _glDrawArraysInstanced,
        glDrawBuffers: _glDrawBuffers,
        glDrawElements: _glDrawElements,
        glDrawElementsInstanced: _glDrawElementsInstanced,
        glEnable: _glEnable,
        glEnableVertexAttribArray: _glEnableVertexAttribArray,
        glEndTransformFeedback: _glEndTransformFeedback,
        glFenceSync: _glFenceSync,
        glFinish: _glFinish,
        glFramebufferRenderbuffer: _glFramebufferRenderbuffer,
        glFramebufferTexture2D: _glFramebufferTexture2D,
        glFramebufferTextureLayer: _glFramebufferTextureLayer,
        glFrontFace: _glFrontFace,
        glGenBuffers: _glGenBuffers,
        glGenFramebuffers: _glGenFramebuffers,
        glGenQueries: _glGenQueries,
        glGenRenderbuffers: _glGenRenderbuffers,
        glGenTextures: _glGenTextures,
        glGenVertexArrays: _glGenVertexArrays,
        glGenerateMipmap: _glGenerateMipmap,
        glGetFloatv: _glGetFloatv,
        glGetInteger64v: _glGetInteger64v,
        glGetIntegerv: _glGetIntegerv,
        glGetProgramInfoLog: _glGetProgramInfoLog,
        glGetProgramiv: _glGetProgramiv,
        glGetShaderInfoLog: _glGetShaderInfoLog,
        glGetShaderiv: _glGetShaderiv,
        glGetString: _glGetString,
        glGetSynciv: _glGetSynciv,
        glGetUniformBlockIndex: _glGetUniformBlockIndex,
        glGetUniformLocation: _glGetUniformLocation,
        glLinkProgram: _glLinkProgram,
        glPixelStorei: _glPixelStorei,
        glReadBuffer: _glReadBuffer,
        glReadPixels: _glReadPixels,
        glRenderbufferStorage: _glRenderbufferStorage,
        glRenderbufferStorageMultisample: _glRenderbufferStorageMultisample,
        glScissor: _glScissor,
        glShaderSource: _glShaderSource,
        glTexImage2D: _glTexImage2D,
        glTexImage3D: _glTexImage3D,
        glTexParameterf: _glTexParameterf,
        glTexParameteri: _glTexParameteri,
        glTexStorage2D: _glTexStorage2D,
        glTexSubImage3D: _glTexSubImage3D,
        glTransformFeedbackVaryings: _glTransformFeedbackVaryings,
        glUniform1f: _glUniform1f,
        glUniform1i: _glUniform1i,
        glUniform1iv: _glUniform1iv,
        glUniform1ui: _glUniform1ui,
        glUniform1uiv: _glUniform1uiv,
        glUniform2f: _glUniform2f,
        glUniform2fv: _glUniform2fv,
        glUniform2iv: _glUniform2iv,
        glUniform3fv: _glUniform3fv,
        glUniform4f: _glUniform4f,
        glUniform4fv: _glUniform4fv,
        glUniformBlockBinding: _glUniformBlockBinding,
        glUniformMatrix3fv: _glUniformMatrix3fv,
        glUniformMatrix4fv: _glUniformMatrix4fv,
        glUseProgram: _glUseProgram,
        glVertexAttrib4f: _glVertexAttrib4f,
        glVertexAttribDivisor: _glVertexAttribDivisor,
        glVertexAttribI4ui: _glVertexAttribI4ui,
        glVertexAttribIPointer: _glVertexAttribIPointer,
        glVertexAttribPointer: _glVertexAttribPointer,
        glViewport: _glViewport,
        godot_audio_get_sample_playback_position:
          _godot_audio_get_sample_playback_position,
        godot_audio_has_script_processor: _godot_audio_has_script_processor,
        godot_audio_has_worklet: _godot_audio_has_worklet,
        godot_audio_init: _godot_audio_init,
        godot_audio_input_start: _godot_audio_input_start,
        godot_audio_input_stop: _godot_audio_input_stop,
        godot_audio_is_available: _godot_audio_is_available,
        godot_audio_resume: _godot_audio_resume,
        godot_audio_sample_bus_add: _godot_audio_sample_bus_add,
        godot_audio_sample_bus_move: _godot_audio_sample_bus_move,
        godot_audio_sample_bus_remove: _godot_audio_sample_bus_remove,
        godot_audio_sample_bus_set_count: _godot_audio_sample_bus_set_count,
        godot_audio_sample_bus_set_mute: _godot_audio_sample_bus_set_mute,
        godot_audio_sample_bus_set_send: _godot_audio_sample_bus_set_send,
        godot_audio_sample_bus_set_solo: _godot_audio_sample_bus_set_solo,
        godot_audio_sample_bus_set_volume_db:
          _godot_audio_sample_bus_set_volume_db,
        godot_audio_sample_is_active: _godot_audio_sample_is_active,
        godot_audio_sample_register_stream: _godot_audio_sample_register_stream,
        godot_audio_sample_set_finished_callback:
          _godot_audio_sample_set_finished_callback,
        godot_audio_sample_set_pause: _godot_audio_sample_set_pause,
        godot_audio_sample_set_volumes_linear:
          _godot_audio_sample_set_volumes_linear,
        godot_audio_sample_start: _godot_audio_sample_start,
        godot_audio_sample_stop: _godot_audio_sample_stop,
        godot_audio_sample_stream_is_registered:
          _godot_audio_sample_stream_is_registered,
        godot_audio_sample_unregister_stream:
          _godot_audio_sample_unregister_stream,
        godot_audio_sample_update_pitch_scale:
          _godot_audio_sample_update_pitch_scale,
        godot_audio_script_create: _godot_audio_script_create,
        godot_audio_script_start: _godot_audio_script_start,
        godot_audio_worklet_create: _godot_audio_worklet_create,
        godot_audio_worklet_start_no_threads:
          _godot_audio_worklet_start_no_threads,
        godot_js_config_canvas_id_get: _godot_js_config_canvas_id_get,
        godot_js_config_locale_get: _godot_js_config_locale_get,
        godot_js_display_alert: _godot_js_display_alert,
        godot_js_display_canvas_focus: _godot_js_display_canvas_focus,
        godot_js_display_canvas_is_focused: _godot_js_display_canvas_is_focused,
        godot_js_display_clipboard_get: _godot_js_display_clipboard_get,
        godot_js_display_clipboard_set: _godot_js_display_clipboard_set,
        godot_js_display_cursor_is_hidden: _godot_js_display_cursor_is_hidden,
        godot_js_display_cursor_is_locked: _godot_js_display_cursor_is_locked,
        godot_js_display_cursor_lock_set: _godot_js_display_cursor_lock_set,
        godot_js_display_cursor_set_custom_shape:
          _godot_js_display_cursor_set_custom_shape,
        godot_js_display_cursor_set_shape: _godot_js_display_cursor_set_shape,
        godot_js_display_cursor_set_visible:
          _godot_js_display_cursor_set_visible,
        godot_js_display_desired_size_set: _godot_js_display_desired_size_set,
        godot_js_display_fullscreen_cb: _godot_js_display_fullscreen_cb,
        godot_js_display_fullscreen_exit: _godot_js_display_fullscreen_exit,
        godot_js_display_fullscreen_request:
          _godot_js_display_fullscreen_request,
        godot_js_display_has_webgl: _godot_js_display_has_webgl,
        godot_js_display_is_swap_ok_cancel: _godot_js_display_is_swap_ok_cancel,
        godot_js_display_notification_cb: _godot_js_display_notification_cb,
        godot_js_display_pixel_ratio_get: _godot_js_display_pixel_ratio_get,
        godot_js_display_screen_dpi_get: _godot_js_display_screen_dpi_get,
        godot_js_display_screen_size_get: _godot_js_display_screen_size_get,
        godot_js_display_setup_canvas: _godot_js_display_setup_canvas,
        godot_js_display_size_update: _godot_js_display_size_update,
        godot_js_display_touchscreen_is_available:
          _godot_js_display_touchscreen_is_available,
        godot_js_display_tts_available: _godot_js_display_tts_available,
        godot_js_display_vk_available: _godot_js_display_vk_available,
        godot_js_display_vk_cb: _godot_js_display_vk_cb,
        godot_js_display_vk_hide: _godot_js_display_vk_hide,
        godot_js_display_vk_show: _godot_js_display_vk_show,
        godot_js_display_window_blur_cb: _godot_js_display_window_blur_cb,
        godot_js_display_window_icon_set: _godot_js_display_window_icon_set,
        godot_js_display_window_size_get: _godot_js_display_window_size_get,
        godot_js_display_window_title_set: _godot_js_display_window_title_set,
        godot_js_eval: _godot_js_eval,
        godot_js_fetch_create: _godot_js_fetch_create,
        godot_js_fetch_free: _godot_js_fetch_free,
        godot_js_fetch_http_status_get: _godot_js_fetch_http_status_get,
        godot_js_fetch_is_chunked: _godot_js_fetch_is_chunked,
        godot_js_fetch_read_chunk: _godot_js_fetch_read_chunk,
        godot_js_fetch_read_headers: _godot_js_fetch_read_headers,
        godot_js_fetch_state_get: _godot_js_fetch_state_get,
        godot_js_input_drop_files_cb: _godot_js_input_drop_files_cb,
        godot_js_input_gamepad_cb: _godot_js_input_gamepad_cb,
        godot_js_input_gamepad_sample: _godot_js_input_gamepad_sample,
        godot_js_input_gamepad_sample_count:
          _godot_js_input_gamepad_sample_count,
        godot_js_input_gamepad_sample_get: _godot_js_input_gamepad_sample_get,
        godot_js_input_key_cb: _godot_js_input_key_cb,
        godot_js_input_mouse_button_cb: _godot_js_input_mouse_button_cb,
        godot_js_input_mouse_move_cb: _godot_js_input_mouse_move_cb,
        godot_js_input_mouse_wheel_cb: _godot_js_input_mouse_wheel_cb,
        godot_js_input_paste_cb: _godot_js_input_paste_cb,
        godot_js_input_touch_cb: _godot_js_input_touch_cb,
        godot_js_input_vibrate_handheld: _godot_js_input_vibrate_handheld,
        godot_js_is_ime_focused: _godot_js_is_ime_focused,
        godot_js_os_download_buffer: _godot_js_os_download_buffer,
        godot_js_os_execute: _godot_js_os_execute,
        godot_js_os_finish_async: _godot_js_os_finish_async,
        godot_js_os_fs_is_persistent: _godot_js_os_fs_is_persistent,
        godot_js_os_fs_sync: _godot_js_os_fs_sync,
        godot_js_os_has_feature: _godot_js_os_has_feature,
        godot_js_os_hw_concurrency_get: _godot_js_os_hw_concurrency_get,
        godot_js_os_request_quit_cb: _godot_js_os_request_quit_cb,
        godot_js_os_shell_open: _godot_js_os_shell_open,
        godot_js_pwa_cb: _godot_js_pwa_cb,
        godot_js_pwa_update: _godot_js_pwa_update,
        godot_js_rtc_datachannel_close: _godot_js_rtc_datachannel_close,
        godot_js_rtc_datachannel_connect: _godot_js_rtc_datachannel_connect,
        godot_js_rtc_datachannel_destroy: _godot_js_rtc_datachannel_destroy,
        godot_js_rtc_datachannel_get_buffered_amount:
          _godot_js_rtc_datachannel_get_buffered_amount,
        godot_js_rtc_datachannel_id_get: _godot_js_rtc_datachannel_id_get,
        godot_js_rtc_datachannel_is_negotiated:
          _godot_js_rtc_datachannel_is_negotiated,
        godot_js_rtc_datachannel_is_ordered:
          _godot_js_rtc_datachannel_is_ordered,
        godot_js_rtc_datachannel_label_get: _godot_js_rtc_datachannel_label_get,
        godot_js_rtc_datachannel_max_packet_lifetime_get:
          _godot_js_rtc_datachannel_max_packet_lifetime_get,
        godot_js_rtc_datachannel_max_retransmits_get:
          _godot_js_rtc_datachannel_max_retransmits_get,
        godot_js_rtc_datachannel_protocol_get:
          _godot_js_rtc_datachannel_protocol_get,
        godot_js_rtc_datachannel_ready_state_get:
          _godot_js_rtc_datachannel_ready_state_get,
        godot_js_rtc_datachannel_send: _godot_js_rtc_datachannel_send,
        godot_js_rtc_pc_close: _godot_js_rtc_pc_close,
        godot_js_rtc_pc_create: _godot_js_rtc_pc_create,
        godot_js_rtc_pc_datachannel_create: _godot_js_rtc_pc_datachannel_create,
        godot_js_rtc_pc_destroy: _godot_js_rtc_pc_destroy,
        godot_js_rtc_pc_ice_candidate_add: _godot_js_rtc_pc_ice_candidate_add,
        godot_js_rtc_pc_local_description_set:
          _godot_js_rtc_pc_local_description_set,
        godot_js_rtc_pc_offer_create: _godot_js_rtc_pc_offer_create,
        godot_js_rtc_pc_remote_description_set:
          _godot_js_rtc_pc_remote_description_set,
        godot_js_set_ime_active: _godot_js_set_ime_active,
        godot_js_set_ime_cb: _godot_js_set_ime_cb,
        godot_js_set_ime_position: _godot_js_set_ime_position,
        godot_js_tts_get_voices: _godot_js_tts_get_voices,
        godot_js_tts_is_paused: _godot_js_tts_is_paused,
        godot_js_tts_is_speaking: _godot_js_tts_is_speaking,
        godot_js_tts_pause: _godot_js_tts_pause,
        godot_js_tts_resume: _godot_js_tts_resume,
        godot_js_tts_speak: _godot_js_tts_speak,
        godot_js_tts_stop: _godot_js_tts_stop,
        godot_js_webmidi_close_midi_inputs: _godot_js_webmidi_close_midi_inputs,
        godot_js_webmidi_open_midi_inputs: _godot_js_webmidi_open_midi_inputs,
        godot_js_websocket_buffered_amount: _godot_js_websocket_buffered_amount,
        godot_js_websocket_close: _godot_js_websocket_close,
        godot_js_websocket_create: _godot_js_websocket_create,
        godot_js_websocket_destroy: _godot_js_websocket_destroy,
        godot_js_websocket_send: _godot_js_websocket_send,
        godot_js_wrapper_create_cb: _godot_js_wrapper_create_cb,
        godot_js_wrapper_create_object: _godot_js_wrapper_create_object,
        godot_js_wrapper_interface_get: _godot_js_wrapper_interface_get,
        godot_js_wrapper_object_call: _godot_js_wrapper_object_call,
        godot_js_wrapper_object_get: _godot_js_wrapper_object_get,
        godot_js_wrapper_object_getvar: _godot_js_wrapper_object_getvar,
        godot_js_wrapper_object_is_buffer: _godot_js_wrapper_object_is_buffer,
        godot_js_wrapper_object_set: _godot_js_wrapper_object_set,
        godot_js_wrapper_object_set_cb_ret: _godot_js_wrapper_object_set_cb_ret,
        godot_js_wrapper_object_setvar: _godot_js_wrapper_object_setvar,
        godot_js_wrapper_object_transfer_buffer:
          _godot_js_wrapper_object_transfer_buffer,
        godot_js_wrapper_object_unref: _godot_js_wrapper_object_unref,
        godot_webgl2_glFramebufferTextureMultisampleMultiviewOVR:
          _godot_webgl2_glFramebufferTextureMultisampleMultiviewOVR,
        godot_webgl2_glFramebufferTextureMultiviewOVR:
          _godot_webgl2_glFramebufferTextureMultiviewOVR,
        godot_webgl2_glGetBufferSubData: _godot_webgl2_glGetBufferSubData,
        godot_webxr_get_bounds_geometry: _godot_webxr_get_bounds_geometry,
        godot_webxr_get_color_texture: _godot_webxr_get_color_texture,
        godot_webxr_get_depth_texture: _godot_webxr_get_depth_texture,
        godot_webxr_get_frame_rate: _godot_webxr_get_frame_rate,
        godot_webxr_get_projection_for_view:
          _godot_webxr_get_projection_for_view,
        godot_webxr_get_render_target_size: _godot_webxr_get_render_target_size,
        godot_webxr_get_supported_frame_rates:
          _godot_webxr_get_supported_frame_rates,
        godot_webxr_get_transform_for_view: _godot_webxr_get_transform_for_view,
        godot_webxr_get_velocity_texture: _godot_webxr_get_velocity_texture,
        godot_webxr_get_view_count: _godot_webxr_get_view_count,
        godot_webxr_get_visibility_state: _godot_webxr_get_visibility_state,
        godot_webxr_initialize: _godot_webxr_initialize,
        godot_webxr_is_session_supported: _godot_webxr_is_session_supported,
        godot_webxr_is_supported: _godot_webxr_is_supported,
        godot_webxr_uninitialize: _godot_webxr_uninitialize,
        godot_webxr_update_input_source: _godot_webxr_update_input_source,
        godot_webxr_update_target_frame_rate:
          _godot_webxr_update_target_frame_rate,
        proc_exit: _proc_exit,
      },
      wasmExports = createWasm(),
      ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors", 0),
      _free = createExportWrapper("free", 1),
      __Z14godot_web_mainiPPc = (Module.__Z14godot_web_mainiPPc =
        createExportWrapper("_Z14godot_web_mainiPPc", 2)),
      _main = (Module._main = createExportWrapper("__main_argc_argv", 2)),
      _malloc = createExportWrapper("malloc", 1),
      _fflush = createExportWrapper("fflush", 1),
      __emwebxr_on_input_event = (Module.__emwebxr_on_input_event =
        createExportWrapper("_emwebxr_on_input_event", 2)),
      __emwebxr_on_simple_event = (Module.__emwebxr_on_simple_event =
        createExportWrapper("_emwebxr_on_simple_event", 1)),
      _strerror = createExportWrapper("strerror", 1),
      ___funcs_on_exit = createExportWrapper("__funcs_on_exit", 0),
      _emscripten_stack_init = () =>
        (_emscripten_stack_init = wasmExports.emscripten_stack_init)(),
      _emscripten_stack_get_free = () =>
        (_emscripten_stack_get_free = wasmExports.emscripten_stack_get_free)(),
      _emscripten_stack_get_base = () =>
        (_emscripten_stack_get_base = wasmExports.emscripten_stack_get_base)(),
      _emscripten_stack_get_end = () =>
        (_emscripten_stack_get_end = wasmExports.emscripten_stack_get_end)(),
      __emscripten_stack_restore = (e) =>
        (__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(e),
      __emscripten_stack_alloc = (e) =>
        (__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(e),
      _emscripten_stack_get_current = () =>
        (_emscripten_stack_get_current =
          wasmExports.emscripten_stack_get_current)();
    (Module.callMain = callMain), (Module.cwrap = cwrap);
    var missingLibrarySymbols = [
      "writeI53ToI64Clamped",
      "writeI53ToI64Signaling",
      "writeI53ToU64Clamped",
      "writeI53ToU64Signaling",
      "convertI32PairToI53",
      "convertI32PairToI53Checked",
      "convertU32PairToI53",
      "getTempRet0",
      "setTempRet0",
      "arraySum",
      "addDays",
      "inetPton4",
      "inetNtop4",
      "inetPton6",
      "inetNtop6",
      "readSockaddr",
      "writeSockaddr",
      "emscriptenLog",
      "readEmAsmArgs",
      "listenOnce",
      "autoResumeAudioContext",
      "getDynCaller",
      "dynCall",
      "setWasmTableEntry",
      "asmjsMangle",
      "HandleAllocator",
      "getNativeTypeSize",
      "STACK_SIZE",
      "STACK_ALIGN",
      "POINTER_SIZE",
      "ASSERTIONS",
      "uleb128Encode",
      "sigToWasmTypes",
      "generateFuncType",
      "convertJsFunctionToWasm",
      "getEmptyTableSlot",
      "updateTableMap",
      "getFunctionAddress",
      "addFunction",
      "removeFunction",
      "reallyNegative",
      "unSign",
      "strLen",
      "reSign",
      "formatString",
      "intArrayToString",
      "AsciiToString",
      "UTF16ToString",
      "stringToUTF16",
      "lengthBytesUTF16",
      "UTF32ToString",
      "stringToUTF32",
      "lengthBytesUTF32",
      "registerKeyEventCallback",
      "getBoundingClientRect",
      "fillMouseEventData",
      "registerMouseEventCallback",
      "registerWheelEventCallback",
      "registerUiEventCallback",
      "registerFocusEventCallback",
      "fillDeviceOrientationEventData",
      "registerDeviceOrientationEventCallback",
      "fillDeviceMotionEventData",
      "registerDeviceMotionEventCallback",
      "screenOrientation",
      "fillOrientationChangeEventData",
      "registerOrientationChangeEventCallback",
      "fillFullscreenChangeEventData",
      "registerFullscreenChangeEventCallback",
      "JSEvents_requestFullscreen",
      "JSEvents_resizeCanvasForFullscreen",
      "registerRestoreOldStyle",
      "hideEverythingExceptGivenElement",
      "restoreHiddenElements",
      "setLetterbox",
      "softFullscreenResizeWebGLRenderTarget",
      "doRequestFullscreen",
      "fillPointerlockChangeEventData",
      "registerPointerlockChangeEventCallback",
      "registerPointerlockErrorEventCallback",
      "requestPointerLock",
      "fillVisibilityChangeEventData",
      "registerVisibilityChangeEventCallback",
      "registerTouchEventCallback",
      "fillGamepadEventData",
      "registerGamepadEventCallback",
      "registerBeforeUnloadEventCallback",
      "fillBatteryEventData",
      "battery",
      "registerBatteryEventCallback",
      "setCanvasElementSize",
      "getCanvasElementSize",
      "jsStackTrace",
      "getCallstack",
      "convertPCtoSourceLocation",
      "checkWasiClock",
      "wasiRightsToMuslOFlags",
      "wasiOFlagsToMuslOFlags",
      "createDyncallWrapper",
      "setImmediateWrapped",
      "clearImmediateWrapped",
      "polyfillSetImmediate",
      "getPromise",
      "makePromise",
      "idsToPromises",
      "makePromiseCallback",
      "Browser_asyncPrepareDataCounter",
      "getSocketFromFD",
      "getSocketAddress",
      "FS_unlink",
      "FS_mkdirTree",
      "_setNetworkCallback",
      "emscriptenWebGLGetUniform",
      "emscriptenWebGLGetVertexAttrib",
      "__glGetActiveAttribOrUniform",
      "writeGLArray",
      "registerWebGlEventCallback",
      "runAndAbortIfError",
      "emscriptenWebGLGetIndexed",
      "ALLOC_NORMAL",
      "ALLOC_STACK",
      "allocate",
      "writeStringToMemory",
      "writeAsciiToMemory",
      "setErrNo",
      "demangle",
      "stackTrace",
    ];
    missingLibrarySymbols.forEach(missingLibrarySymbol);
    var unexportedSymbols = [
        "run",
        "addOnPreRun",
        "addOnInit",
        "addOnPreMain",
        "addOnExit",
        "addOnPostRun",
        "addRunDependency",
        "removeRunDependency",
        "out",
        "err",
        "abort",
        "wasmMemory",
        "wasmExports",
        "writeStackCookie",
        "checkStackCookie",
        "writeI53ToI64",
        "readI53FromI64",
        "readI53FromU64",
        "INT53_MAX",
        "INT53_MIN",
        "bigintToI53Checked",
        "stackSave",
        "stackRestore",
        "stackAlloc",
        "ptrToString",
        "zeroMemory",
        "exitJS",
        "getHeapMax",
        "growMemory",
        "ENV",
        "MONTH_DAYS_REGULAR",
        "MONTH_DAYS_LEAP",
        "MONTH_DAYS_REGULAR_CUMULATIVE",
        "MONTH_DAYS_LEAP_CUMULATIVE",
        "isLeapYear",
        "ydayFromDate",
        "ERRNO_CODES",
        "strError",
        "DNS",
        "Protocols",
        "Sockets",
        "initRandomFill",
        "randomFill",
        "timers",
        "warnOnce",
        "readEmAsmArgsArray",
        "jstoi_q",
        "jstoi_s",
        "getExecutableName",
        "getWasmTableEntry",
        "handleException",
        "keepRuntimeAlive",
        "runtimeKeepalivePush",
        "runtimeKeepalivePop",
        "callUserCallback",
        "maybeExit",
        "asyncLoad",
        "alignMemory",
        "mmapAlloc",
        "wasmTable",
        "noExitRuntime",
        "getCFunc",
        "ccall",
        "freeTableIndexes",
        "functionsInTableMap",
        "setValue",
        "getValue",
        "PATH",
        "PATH_FS",
        "UTF8Decoder",
        "UTF8ArrayToString",
        "UTF8ToString",
        "stringToUTF8Array",
        "stringToUTF8",
        "lengthBytesUTF8",
        "intArrayFromString",
        "stringToAscii",
        "UTF16Decoder",
        "stringToNewUTF8",
        "stringToUTF8OnStack",
        "writeArrayToMemory",
        "JSEvents",
        "specialHTMLTargets",
        "maybeCStringToJsString",
        "findEventTarget",
        "findCanvasEventTarget",
        "currentFullscreenStrategy",
        "restoreOldWindowedStyle",
        "UNWIND_CACHE",
        "ExitStatus",
        "getEnvStrings",
        "doReadv",
        "doWritev",
        "safeSetTimeout",
        "promiseMap",
        "Browser",
        "setMainLoop",
        "getPreloadedImageData__data",
        "wget",
        "SYSCALLS",
        "preloadPlugins",
        "FS_createPreloadedFile",
        "FS_modeStringToFlags",
        "FS_getMode",
        "FS_stdin_getChar_buffer",
        "FS_stdin_getChar",
        "FS_createPath",
        "FS_createDevice",
        "FS_readFile",
        "FS",
        "FS_createDataFile",
        "FS_createLazyFile",
        "MEMFS",
        "TTY",
        "PIPEFS",
        "SOCKFS",
        "tempFixedLengthArray",
        "miniTempWebGLFloatBuffers",
        "miniTempWebGLIntBuffers",
        "heapObjectForWebGLType",
        "toTypedArrayIndex",
        "webgl_enable_ANGLE_instanced_arrays",
        "webgl_enable_OES_vertex_array_object",
        "webgl_enable_WEBGL_draw_buffers",
        "webgl_enable_WEBGL_multi_draw",
        "GL",
        "emscriptenWebGLGet",
        "computeUnpackAlignedImageSize",
        "colorChannelsInGlTextureFormat",
        "emscriptenWebGLGetTexPixelData",
        "webglGetUniformLocation",
        "webglPrepareUniformLocationsBeforeFirstUse",
        "webglGetLeftBracePos",
        "AL",
        "GLUT",
        "EGL",
        "GLEW",
        "IDBStore",
        "SDL",
        "SDL_gfx",
        "webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance",
        "webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance",
        "allocateUTF8",
        "allocateUTF8OnStack",
        "print",
        "printErr",
        "GodotWebXR",
        "GodotWebSocket",
        "GodotRTCDataChannel",
        "GodotRTCPeerConnection",
        "GodotAudio",
        "GodotAudioWorklet",
        "GodotAudioScript",
        "GodotDisplayVK",
        "GodotDisplayCursor",
        "GodotDisplayScreen",
        "GodotDisplay",
        "GodotFetch",
        "GodotWebMidi",
        "IDHandler",
        "GodotConfig",
        "GodotFS",
        "GodotOS",
        "GodotEventListeners",
        "GodotPWA",
        "GodotRuntime",
        "GodotIME",
        "GodotInputGamepads",
        "GodotInputDragDrop",
        "GodotInput",
        "GodotWebGL2",
        "GodotJSWrapper",
        "IDBFS",
      ],
      calledRun;
    function callMain(e = []) {
      assert(
        0 == runDependencies,
        'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'
      ),
        assert(
          0 == __ATPRERUN__.length,
          "cannot call main when preRun functions remain to be called"
        );
      var t = _main;
      e.unshift(thisProgram);
      var o = e.length,
        r = stackAlloc(4 * (o + 1)),
        n = r;
      e.forEach((e) => {
        (HEAPU32[n >> 2] = stringToUTF8OnStack(e)), (n += 4);
      }),
        (HEAPU32[n >> 2] = 0);
      try {
        var i = t(o, r);
        return exitJS(i, !0), i;
      } catch (e) {
        return handleException(e);
      }
    }
    function stackCheckInit() {
      _emscripten_stack_init(), writeStackCookie();
    }
    function run(e = arguments_) {
      function t() {
        calledRun ||
          ((calledRun = !0),
          (Module.calledRun = !0),
          ABORT ||
            (initRuntime(),
            preMain(),
            readyPromiseResolve(Module),
            Module.onRuntimeInitialized?.(),
            shouldRunNow && callMain(e),
            postRun()));
      }
      runDependencies > 0 ||
        (stackCheckInit(),
        preRun(),
        runDependencies > 0 ||
          (Module.setStatus
            ? (Module.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  Module.setStatus("");
                }, 1),
                  t();
              }, 1))
            : t(),
          checkStackCookie()));
    }
    if (
      (unexportedSymbols.forEach(unexportedRuntimeSymbol),
      (dependenciesFulfilled = function e() {
        calledRun || run(), calledRun || (dependenciesFulfilled = e);
      }),
      Module.preInit)
    )
      for (
        "function" == typeof Module.preInit &&
        (Module.preInit = [Module.preInit]);
        Module.preInit.length > 0;

      )
        Module.preInit.pop()();
    var shouldRunNow = !1;
    Module.noInitialRun && (shouldRunNow = !1),
      run(),
      (moduleRtn = readyPromise);
    for (const e of Object.keys(Module))
      e in moduleArg ||
        Object.defineProperty(moduleArg, e, {
          configurable: !0,
          get() {
            abort(
              `Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`
            );
          },
        });
    return moduleRtn;
  };
})();
"object" == typeof exports && "object" == typeof module
  ? (module.exports = Godot)
  : "function" == typeof define && define.amd && define([], () => Godot);
const Features = {
    isWebGLAvailable: function (e = 1) {
      try {
        return !!document
          .createElement("canvas")
          .getContext(["webgl", "webgl2"][e - 1]);
      } catch (e) {}
      return !1;
    },
    isFetchAvailable: function () {
      return (
        "fetch" in window &&
        "Response" in window &&
        "body" in window.Response.prototype
      );
    },
    isSecureContext: function () {
      return !0 === window.isSecureContext;
    },
    isCrossOriginIsolated: function () {
      return !0 === window.crossOriginIsolated;
    },
    isSharedArrayBufferAvailable: function () {
      return "SharedArrayBuffer" in window;
    },
    isAudioWorkletAvailable: function () {
      return (
        "AudioContext" in window && "audioWorklet" in AudioContext.prototype
      );
    },
    getMissingFeatures: function (e = {}) {
      const { threads: t = !0 } = e,
        o = [];
      return (
        Features.isWebGLAvailable(2) ||
          o.push(
            "WebGL2 - Check web browser configuration and hardware support"
          ),
        Features.isFetchAvailable() ||
          o.push("Fetch - Check web browser version"),
        Features.isSecureContext() ||
          o.push("Secure Context - Check web server configuration (use HTTPS)"),
        t &&
          (Features.isCrossOriginIsolated() ||
            o.push(
              "Cross-Origin Isolation - Check that the web server configuration sends the correct headers."
            ),
          Features.isSharedArrayBufferAvailable() ||
            o.push(
              "SharedArrayBuffer - Check that the web server configuration sends the correct headers."
            )),
        o
      );
    },
  },
  Preloader = function () {
    function e(e, t) {
      function o(e, r) {
        return e.read().then(function (n) {
          return t.done
            ? Promise.resolve()
            : (n.value && (r.enqueue(n.value), (t.loaded += n.value.length)),
              n.done ? ((t.done = !0), Promise.resolve()) : o(e, r));
        });
      }
      const r = e.body.getReader();
      return new Response(
        new ReadableStream({
          start: function (e) {
            o(r, e).then(function () {
              e.close();
            });
          },
        }),
        { headers: e.headers }
      );
    }
    function t(t, o, r, n) {
      return (
        (o[t] = { total: r || 0, loaded: 0, done: !1 }),
        fetch(t).then(function (r) {
          if (!r.ok)
            return Promise.reject(new Error(`Failed loading file '${t}'`));
          const i = e(r, o[t]);
          return n ? Promise.resolve(i) : i.arrayBuffer();
        })
      );
    }
    function o(e, t = 1) {
      return e().catch(function (r) {
        return t <= 1
          ? Promise.reject(r)
          : new Promise(function (r, n) {
              setTimeout(function () {
                o(e, t - 1)
                  .then(r)
                  .catch(n);
              }, 1e3);
            });
      });
    }
    const r = {},
      n = { loaded: 0, total: 0 };
    let i = null;
    const a = function () {
      let e = 0,
        t = 0,
        o = !0,
        s = !0;
      Object.keys(r).forEach(function (n) {
        const i = r[n];
        i.done || (s = !1),
          o && 0 !== i.total ? (t += i.total) : ((o = !1), (t = 0)),
          (e += i.loaded);
      }),
        (e === n.loaded && t === n.total) ||
          ((n.loaded = e), (n.total = t), "function" == typeof i && i(e, t)),
        s || requestAnimationFrame(a);
    };
    (this.animateProgress = a),
      (this.setProgressFunc = function (e) {
        i = e;
      }),
      (this.loadPromise = function (e, n, i = !1) {
        return o(t.bind(null, e, r, n, i), 4);
      }),
      (this.preloadedFiles = []),
      (this.preload = function (e, t, o) {
        let r = null;
        if ("string" == typeof e) {
          const r = this;
          return this.loadPromise(e, o).then(function (o) {
            return (
              r.preloadedFiles.push({ path: t || e, buffer: o }),
              Promise.resolve()
            );
          });
        }
        return (
          e instanceof ArrayBuffer
            ? (r = new Uint8Array(e))
            : ArrayBuffer.isView(e) && (r = new Uint8Array(e.buffer)),
          r
            ? (this.preloadedFiles.push({ path: t, buffer: e }),
              Promise.resolve())
            : Promise.reject(new Error("Invalid object for preloading"))
        );
      });
  },
  EngineConfig = {},
  InternalConfig = function (e) {
    const t = {
      unloadAfterInit: !0,
      canvas: null,
      executable: "",
      mainPack: null,
      locale: null,
      canvasResizePolicy: 2,
      args: [],
      focusCanvas: !0,
      experimentalVK: !1,
      serviceWorker: "",
      persistentPaths: ["/userfs"],
      persistentDrops: !1,
      gdextensionLibs: [],
      fileSizes: [],
      onExecute: null,
      onExit: null,
      onProgress: null,
      onPrint: function () {
        console.log.apply(console, Array.from(arguments));
      },
      onPrintError: function (e) {
        console.error.apply(console, Array.from(arguments));
      },
    };
    function o(e) {
      this.update(e);
    }
    return (
      (o.prototype = t),
      (o.prototype.update = function (e) {
        const t = e || {};
        function o(e, o) {
          return void 0 === t[e] ? o : t[e];
        }
        (this.unloadAfterInit = o("unloadAfterInit", this.unloadAfterInit)),
          (this.onPrintError = o("onPrintError", this.onPrintError)),
          (this.onPrint = o("onPrint", this.onPrint)),
          (this.onProgress = o("onProgress", this.onProgress)),
          (this.canvas = o("canvas", this.canvas)),
          (this.executable = o("executable", this.executable)),
          (this.mainPack = o("mainPack", this.mainPack)),
          (this.locale = o("locale", this.locale)),
          (this.canvasResizePolicy = o(
            "canvasResizePolicy",
            this.canvasResizePolicy
          )),
          (this.persistentPaths = o("persistentPaths", this.persistentPaths)),
          (this.persistentDrops = o("persistentDrops", this.persistentDrops)),
          (this.experimentalVK = o("experimentalVK", this.experimentalVK)),
          (this.focusCanvas = o("focusCanvas", this.focusCanvas)),
          (this.serviceWorker = o("serviceWorker", this.serviceWorker)),
          (this.gdextensionLibs = o("gdextensionLibs", this.gdextensionLibs)),
          (this.fileSizes = o("fileSizes", this.fileSizes)),
          (this.args = o("args", this.args)),
          (this.onExecute = o("onExecute", this.onExecute)),
          (this.onExit = o("onExit", this.onExit));
      }),
      (o.prototype.getModuleConfig = function (e, t) {
        let o = t;
        const r = this.gdextensionLibs;
        return {
          print: this.onPrint,
          printErr: this.onPrintError,
          thisProgram: this.executable,
          noExitRuntime: !1,
          dynamicLibraries: [`${e}.side.wasm`].concat(this.gdextensionLibs),
          instantiateWasm: function (e, t) {
            function r(e) {
              t(e.instance, e.module);
            }
            return (
              void 0 !== WebAssembly.instantiateStreaming
                ? WebAssembly.instantiateStreaming(Promise.resolve(o), e).then(
                    r
                  )
                : o.arrayBuffer().then(function (t) {
                    WebAssembly.instantiate(t, e).then(r);
                  }),
              (o = null),
              {}
            );
          },
          locateFile: function (t) {
            return t.startsWith("godot.")
              ? t.endsWith(".audio.worklet.js")
                ? `${e}.audio.worklet.js`
                : t.endsWith(".audio.position.worklet.js")
                ? `${e}.audio.position.worklet.js`
                : t.endsWith(".js")
                ? `${e}.js`
                : t in r
                ? t
                : t.endsWith(".side.wasm")
                ? `${e}.side.wasm`
                : t.endsWith(".wasm")
                ? `${e}.wasm`
                : t
              : t;
          },
        };
      }),
      (o.prototype.getGodotConfig = function (e) {
        if (!(this.canvas instanceof HTMLCanvasElement)) {
          const e = document.getElementsByTagName("canvas");
          if (e.length && e[0] instanceof HTMLCanvasElement) {
            const t = e[0];
            this.canvas = t;
          }
          if (!this.canvas) throw new Error("No canvas found in page");
        }
        this.canvas.tabIndex < 0 && (this.canvas.tabIndex = 0);
        let t = this.locale;
        t ||
          ((t = navigator.languages
            ? navigator.languages[0]
            : navigator.language),
          (t = t.split(".")[0])),
          (t = t.replace("-", "_"));
        const o = this.onExit;
        return {
          canvas: this.canvas,
          canvasResizePolicy: this.canvasResizePolicy,
          locale: t,
          persistentDrops: this.persistentDrops,
          virtualKeyboard: this.experimentalVK,
          focusCanvas: this.focusCanvas,
          onExecute: this.onExecute,
          onExit: function (t) {
            e(), "function" == typeof o && o(t);
          },
        };
      }),
      new o(e)
    );
  },
  Engine = (function () {
    const e = new Preloader();
    let t = null,
      o = "",
      r = null;
    function n(e) {
      (this.config = new InternalConfig(e)), (this.rtenv = null);
    }
    function i(i) {
      const a = {
        init: function (i) {
          if (r) return r;
          if (null == t) {
            if (!i)
              return (
                (r = Promise.reject(
                  new Error(
                    "A base path must be provided when calling `init` and the engine is not loaded."
                  )
                )),
                r
              );
            n.load(i, this.config.fileSizes[`${i}.wasm`]);
          }
          const a = this;
          var s;
          return (
            e.setProgressFunc(this.config.onProgress),
            (s = t),
            (r = new Promise(function (e, t) {
              s.then(function (t) {
                const r = new Response(t.clone().body, {
                  headers: [["content-type", "application/wasm"]],
                });
                Godot(a.config.getModuleConfig(o, r)).then(function (t) {
                  const o = a.config.persistentPaths;
                  t.initFS(o).then(function (o) {
                    (a.rtenv = t), a.config.unloadAfterInit && n.unload(), e();
                  });
                });
              });
            })),
            r
          );
        },
        preloadFile: function (t, o) {
          return e.preload(t, o, this.config.fileSizes[t]);
        },
        start: function (t) {
          this.config.update(t);
          const o = this;
          return o.init().then(function () {
            if (!o.rtenv)
              return Promise.reject(
                new Error(
                  "The engine must be initialized before it can be started"
                )
              );
            let t = {};
            try {
              t = o.config.getGodotConfig(function () {
                o.rtenv = null;
              });
            } catch (e) {
              return Promise.reject(e);
            }
            return (
              o.rtenv.initConfig(t),
              o.config.gdextensionLibs.length > 0 && !o.rtenv.loadDynamicLibrary
                ? Promise.reject(
                    new Error(
                      'GDExtension libraries are not supported by this engine version. Enable "Extensions Support" for your export preset and/or build your custom template with "dlink_enabled=yes".'
                    )
                  )
                : new Promise(function (t, n) {
                    for (const t of e.preloadedFiles)
                      o.rtenv.copyToFS(t.path, t.buffer);
                    (e.preloadedFiles.length = 0),
                      o.rtenv.callMain(o.config.args),
                      (r = null),
                      o.installServiceWorker(),
                      t();
                  })
            );
          });
        },
        startGame: function (e) {
          this.config.update(e);
          const t = this.config.executable,
            o = this.config.mainPack || `${t}.pck`;
          this.config.args = ["--main-pack", o].concat(this.config.args);
          const r = this;
          return Promise.all([this.init(t), this.preloadFile(o, o)]).then(
            function () {
              return r.start.apply(r);
            }
          );
        },
        copyToFS: function (e, t) {
          if (null == this.rtenv)
            throw new Error("Engine must be inited before copying files");
          this.rtenv.copyToFS(e, t);
        },
        requestQuit: function () {
          this.rtenv && this.rtenv.request_quit();
        },
        installServiceWorker: function () {
          if (this.config.serviceWorker && "serviceWorker" in navigator)
            try {
              return navigator.serviceWorker.register(
                this.config.serviceWorker
              );
            } catch (e) {
              return Promise.reject(e);
            }
          return Promise.resolve();
        },
      };
      return (
        (n.prototype = a),
        (n.prototype.init = n.prototype.init),
        (n.prototype.preloadFile = n.prototype.preloadFile),
        (n.prototype.start = n.prototype.start),
        (n.prototype.startGame = n.prototype.startGame),
        (n.prototype.copyToFS = n.prototype.copyToFS),
        (n.prototype.requestQuit = n.prototype.requestQuit),
        (n.prototype.installServiceWorker = n.prototype.installServiceWorker),
        (n.prototype.load = n.load),
        (n.prototype.unload = n.unload),
        new n(i)
      );
    }
    return (
      (n.load = function (r, n) {
        return (
          null == t &&
            ((o = r),
            (t = e.loadPromise(`${o}.wasm`, n, !0)),
            requestAnimationFrame(e.animateProgress)),
          t
        );
      }),
      (n.unload = function () {
        t = null;
      }),
      (i.load = n.load),
      (i.unload = n.unload),
      (i.isWebGLAvailable = Features.isWebGLAvailable),
      (i.isFetchAvailable = Features.isFetchAvailable),
      (i.isSecureContext = Features.isSecureContext),
      (i.isCrossOriginIsolated = Features.isCrossOriginIsolated),
      (i.isSharedArrayBufferAvailable = Features.isSharedArrayBufferAvailable),
      (i.isAudioWorkletAvailable = Features.isAudioWorkletAvailable),
      (i.getMissingFeatures = Features.getMissingFeatures),
      i
    );
  })();
"undefined" != typeof window && (window.Engine = Engine);
