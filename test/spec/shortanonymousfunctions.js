(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'functions', function (exports) {
  'use strict';

  exports.name = 'shortanonymousfunctions';
  exports.spec = [
    {
      "source": "|x| x",
      "result": "[1:0] unexpected symbol '|' near 'x'"
    },
    {
      "source": "local a = |x|",
      "result": "[1:13] <expression> expected near '<eof>'"
    },
    {
      "source": "local a = || ...",
      "result": "[1:13] cannot use '...' outside a vararg function near '...'"
    },
    {
      "source": "local a = |x| |x| x",
      "result": "[1:15] <expression> expected near 'x'"
    },
    {
      "source": "local a = |...| function() return ... end",
      "result": "[1:34] cannot use '...' outside a vararg function near '...'",
    },
    {
      "source": "local a = |x| x",
      "result": {
        "type": "Chunk",
        "body": [{
          "type": "LocalStatement",
          "variables": [{
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 6
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [6, 7],
            "isLocal": true
          }],
          "init": [{
            "type": "ShortFunctionDefinition",
            "parameters": [{
              "type": "Identifier",
              "name": "x",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 12
                }
              },
              "range": [11, 12],
              "isLocal": true
            }],
            "expression": {
              "type": "Identifier",
              "name": "x",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 14
                },
                "end": {
                  "line": 1,
                  "column": 15
                }
              },
              "range": [14, 15],
              "isLocal": true
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 15
              }
            },
            "range": [10, 15]
          }],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 15
            }
          },
          "range": [0, 15]
        }],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "range": [0, 15],
        "comments": [],
        "globals": []
      },
    },
    {
      "source": "local a = || function() return 1 end",
      "result": {
        "type": "Chunk",
        "body": [{
          "type": "LocalStatement",
          "variables": [{
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 6
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [6, 7],
            "isLocal": true
          }],
          "init": [{
            "type": "ShortFunctionDefinition",
            "parameters": [],
            "expression": {
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [],
              "body": [{
                "type": "ReturnStatement",
                "arguments": [{
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 31
                    },
                    "end": {
                      "line": 1,
                      "column": 32
                    }
                  },
                  "range": [31, 32]
                }],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 24
                  },
                  "end": {
                    "line": 1,
                    "column": 32
                  }
                },
                "range": [24, 32]
              }],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 13
                },
                "end": {
                  "line": 1,
                  "column": 36
                }
              },
              "range": [13, 36]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 36
              }
            },
            "range": [10, 36]
          }],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 36
            }
          },
          "range": [0, 36]
        }],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 36
          }
        },
        "range": [0, 36],
        "comments": [],
        "globals": []
      }
    }
  ];
}));
