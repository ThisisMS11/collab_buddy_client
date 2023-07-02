import {
  __commonJS
} from "./chunk-4EOJPDL2.js";

// node_modules/quill-image-resize-module-react/image-resize.min.js
var require_image_resize_min = __commonJS({
  "node_modules/quill-image-resize-module-react/image-resize.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageResize = e() : t.ImageResize = e();
    }(exports, function() {
      return function(t) {
        function e(o) {
          if (n[o])
            return n[o].exports;
          var r = n[o] = { i: o, l: false, exports: {} };
          return t[o].call(r.exports, r, r.exports, e), r.l = true, r.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t2) {
          return t2;
        }, e.d = function(t2, n2, o) {
          e.o(t2, n2) || Object.defineProperty(t2, n2, { configurable: false, enumerable: true, get: o });
        }, e.n = function(t2) {
          var n2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return e.d(n2, "a", n2), n2;
        }, e.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, e.p = "", e(e.s = 38);
      }([function(t, e) {
        function n(t2) {
          var e2 = typeof t2;
          return null != t2 && ("object" == e2 || "function" == e2);
        }
        t.exports = n;
      }, function(t, e, n) {
        var o = n(22), r = "object" == typeof self && self && self.Object === Object && self, i = o || r || Function("return this")();
        t.exports = i;
      }, function(t, e) {
        function n(t2) {
          return null != t2 && "object" == typeof t2;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var o2 = t2[e2];
            this.set(o2[0], o2[1]);
          }
        }
        var r = n(75), i = n(76), a = n(77), s = n(78), u = n(79);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          for (var n2 = t2.length; n2--; )
            if (r(t2[n2][0], e2))
              return n2;
          return -1;
        }
        var r = n(8);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return null == t2 ? void 0 === t2 ? u : s : c && c in Object(t2) ? i(t2) : a(t2);
        }
        var r = n(16), i = n(64), a = n(87), s = "[object Null]", u = "[object Undefined]", c = r ? r.toStringTag : void 0;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = t2.__data__;
          return r(e2) ? n2["string" == typeof e2 ? "string" : "hash"] : n2.map;
        }
        var r = n(73);
        t.exports = o;
      }, function(t, e, n) {
        var o = n(11), r = o(Object, "create");
        t.exports = r;
      }, function(t, e) {
        function n(t2, e2) {
          return t2 === e2 || t2 !== t2 && e2 !== e2;
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        n.d(e, "a", function() {
          return r;
        });
        var r = function t2(e2) {
          o(this, t2), this.onCreate = function() {
          }, this.onDestroy = function() {
          }, this.onUpdate = function() {
          }, this.overlay = e2.overlay, this.img = e2.img, this.options = e2.options, this.requestUpdate = e2.onUpdate;
        };
      }, function(t, e, n) {
        function o(t2, e2, n2) {
          "__proto__" == e2 && r ? r(t2, e2, { configurable: true, enumerable: true, value: n2, writable: true }) : t2[e2] = n2;
        }
        var r = n(21);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = i(t2, e2);
          return r(n2) ? n2 : void 0;
        }
        var r = n(48), i = n(65);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return null != t2 && i(t2.length) && !r(t2);
        }
        var r = n(13), i = n(30);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          if (!i(t2))
            return false;
          var e2 = r(t2);
          return e2 == s || e2 == u || e2 == a || e2 == c;
        }
        var r = n(5), i = n(0), a = "[object AsyncFunction]", s = "[object Function]", u = "[object GeneratorFunction]", c = "[object Proxy]";
        t.exports = o;
      }, function(t, e) {
        t.exports = function(t2) {
          return t2.webpackPolyfill || (t2.deprecate = function() {
          }, t2.paths = [], t2.children || (t2.children = []), Object.defineProperty(t2, "loaded", { enumerable: true, get: function() {
            return t2.l;
          } }), Object.defineProperty(t2, "id", { enumerable: true, get: function() {
            return t2.i;
          } }), t2.webpackPolyfill = 1), t2;
        };
      }, function(t, e, n) {
        var o = n(11), r = n(1), i = o(r, "Map");
        t.exports = i;
      }, function(t, e, n) {
        var o = n(1), r = o.Symbol;
        t.exports = r;
      }, function(t, e) {
        function n(t2, e2, n2) {
          switch (n2.length) {
            case 0:
              return t2.call(e2);
            case 1:
              return t2.call(e2, n2[0]);
            case 2:
              return t2.call(e2, n2[0], n2[1]);
            case 3:
              return t2.call(e2, n2[0], n2[1], n2[2]);
          }
          return t2.apply(e2, n2);
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2, e2, n2) {
          (void 0 === n2 || i(t2[e2], n2)) && (void 0 !== n2 || e2 in t2) || r(t2, e2, n2);
        }
        var r = n(10), i = n(8);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2, n2, l, f) {
          t2 !== e2 && a(e2, function(a2, c2) {
            if (u(a2))
              f || (f = new r()), s(t2, e2, c2, n2, o, l, f);
            else {
              var p = l ? l(t2[c2], a2, c2 + "", t2, e2, f) : void 0;
              void 0 === p && (p = a2), i(t2, c2, p);
            }
          }, c);
        }
        var r = n(41), i = n(18), a = n(46), s = n(51), u = n(0), c = n(32);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          return a(i(t2, e2, r), t2 + "");
        }
        var r = n(26), i = n(89), a = n(90);
        t.exports = o;
      }, function(t, e, n) {
        var o = n(11), r = function() {
          try {
            var t2 = o(Object, "defineProperty");
            return t2({}, "", {}), t2;
          } catch (t3) {
          }
        }();
        t.exports = r;
      }, function(t, e, n) {
        (function(e2) {
          var n2 = "object" == typeof e2 && e2 && e2.Object === Object && e2;
          t.exports = n2;
        }).call(e, n(107));
      }, function(t, e, n) {
        var o = n(88), r = o(Object.getPrototypeOf, Object);
        t.exports = r;
      }, function(t, e) {
        function n(t2, e2) {
          return !!(e2 = null == e2 ? o : e2) && ("number" == typeof t2 || r.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < e2;
        }
        var o = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          var e2 = t2 && t2.constructor;
          return t2 === ("function" == typeof e2 && e2.prototype || o);
        }
        var o = Object.prototype;
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          return t2;
        }
        t.exports = n;
      }, function(t, e, n) {
        var o = n(47), r = n(2), i = Object.prototype, a = i.hasOwnProperty, s = i.propertyIsEnumerable, u = o(function() {
          return arguments;
        }()) ? o : function(t2) {
          return r(t2) && a.call(t2, "callee") && !s.call(t2, "callee");
        };
        t.exports = u;
      }, function(t, e) {
        var n = Array.isArray;
        t.exports = n;
      }, function(t, e, n) {
        (function(t2) {
          var o = n(1), r = n(102), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t2 && t2 && !t2.nodeType && t2, s = a && a.exports === i, u = s ? o.Buffer : void 0, c = u ? u.isBuffer : void 0, l = c || r;
          t2.exports = l;
        }).call(e, n(14)(t));
      }, function(t, e) {
        function n(t2) {
          return "number" == typeof t2 && t2 > -1 && t2 % 1 == 0 && t2 <= o;
        }
        var o = 9007199254740991;
        t.exports = n;
      }, function(t, e, n) {
        var o = n(49), r = n(54), i = n(86), a = i && i.isTypedArray, s = a ? r(a) : o;
        t.exports = s;
      }, function(t, e, n) {
        function o(t2) {
          return a(t2) ? r(t2, true) : i(t2);
        }
        var r = n(43), i = n(50), a = n(12);
        t.exports = o;
      }, function(t, e, n) {
        "use strict";
        e.a = { modules: ["DisplaySize", "Toolbar", "Resize"], overlayStyles: { position: "absolute", boxSizing: "border-box", border: "1px dashed #444" }, handleStyles: { position: "absolute", height: "12px", width: "12px", backgroundColor: "white", border: "1px solid #777", boxSizing: "border-box", opacity: "0.80" }, displayStyles: { position: "absolute", font: "12px/1.0 Arial, Helvetica, sans-serif", padding: "4px 8px", textAlign: "center", backgroundColor: "white", color: "#333", border: "1px solid #777", boxSizing: "border-box", opacity: "0.80", cursor: "default" }, toolbarStyles: { position: "absolute", top: "-12px", right: "0", left: "0", height: "0", minWidth: "100px", font: "12px/1.0 Arial, Helvetica, sans-serif", textAlign: "center", color: "#333", boxSizing: "border-box", cursor: "default" }, toolbarButtonStyles: { display: "inline-block", width: "24px", height: "24px", background: "white", border: "1px solid #999", verticalAlign: "middle" }, toolbarButtonSvgStyles: { fill: "#444", stroke: "#444", strokeWidth: "2" } };
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(t2, e2) {
          if (!t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
        }
        function i(t2, e2) {
          if ("function" != typeof e2 && null !== e2)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
          t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2);
        }
        var a = n(9);
        n.d(e, "a", function() {
          return s;
        });
        var s = function(t2) {
          function e2() {
            var t3, n2, i2, a2;
            o(this, e2);
            for (var s2 = arguments.length, u = Array(s2), c = 0; c < s2; c++)
              u[c] = arguments[c];
            return n2 = i2 = r(this, (t3 = e2.__proto__ || Object.getPrototypeOf(e2)).call.apply(t3, [this].concat(u))), i2.onCreate = function() {
              i2.display = document.createElement("div"), Object.assign(i2.display.style, i2.options.displayStyles), i2.overlay.appendChild(i2.display);
            }, i2.onDestroy = function() {
            }, i2.onUpdate = function() {
              if (i2.display && i2.img) {
                var t4 = i2.getCurrentSize();
                if (i2.display.innerHTML = t4.join(" &times; "), t4[0] > 120 && t4[1] > 30)
                  Object.assign(i2.display.style, { right: "4px", bottom: "4px", left: "auto" });
                else if ("right" == i2.img.style.float) {
                  var e3 = i2.display.getBoundingClientRect();
                  Object.assign(i2.display.style, { right: "auto", bottom: "-" + (e3.height + 4) + "px", left: "-" + (e3.width + 4) + "px" });
                } else {
                  var n3 = i2.display.getBoundingClientRect();
                  Object.assign(i2.display.style, { right: "-" + (n3.width + 4) + "px", bottom: "-" + (n3.height + 4) + "px", left: "auto" });
                }
              }
            }, i2.getCurrentSize = function() {
              return [i2.img.width, Math.round(i2.img.width / i2.img.naturalWidth * i2.img.naturalHeight)];
            }, a2 = n2, r(i2, a2);
          }
          return i(e2, t2), e2;
        }(a.a);
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(t2, e2) {
          if (!t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
        }
        function i(t2, e2) {
          if ("function" != typeof e2 && null !== e2)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
          t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2);
        }
        var a = n(9);
        n.d(e, "a", function() {
          return s;
        });
        var s = function(t2) {
          function e2() {
            var t3, n2, i2, a2;
            o(this, e2);
            for (var s2 = arguments.length, u = Array(s2), c = 0; c < s2; c++)
              u[c] = arguments[c];
            return n2 = i2 = r(this, (t3 = e2.__proto__ || Object.getPrototypeOf(e2)).call.apply(t3, [this].concat(u))), i2.onCreate = function() {
              i2.boxes = [], i2.addBox("nwse-resize"), i2.addBox("nesw-resize"), i2.addBox("nwse-resize"), i2.addBox("nesw-resize"), i2.positionBoxes();
            }, i2.onDestroy = function() {
              i2.setCursor("");
            }, i2.positionBoxes = function() {
              var t4 = -parseFloat(i2.options.handleStyles.width) / 2 + "px", e3 = -parseFloat(i2.options.handleStyles.height) / 2 + "px";
              [{ left: t4, top: e3 }, { right: t4, top: e3 }, { right: t4, bottom: e3 }, { left: t4, bottom: e3 }].forEach(function(t5, e4) {
                Object.assign(i2.boxes[e4].style, t5);
              });
            }, i2.addBox = function(t4) {
              var e3 = document.createElement("div");
              Object.assign(e3.style, i2.options.handleStyles), e3.style.cursor = t4, e3.style.width = i2.options.handleStyles.width + "px", e3.style.height = i2.options.handleStyles.height + "px", e3.addEventListener("mousedown", i2.handleMousedown, false), i2.overlay.appendChild(e3), i2.boxes.push(e3);
            }, i2.handleMousedown = function(t4) {
              i2.dragBox = t4.target, i2.dragStartX = t4.clientX, i2.preDragWidth = i2.img.width || i2.img.naturalWidth, i2.setCursor(i2.dragBox.style.cursor), document.addEventListener("mousemove", i2.handleDrag, false), document.addEventListener("mouseup", i2.handleMouseup, false);
            }, i2.handleMouseup = function() {
              i2.setCursor(""), document.removeEventListener("mousemove", i2.handleDrag), document.removeEventListener("mouseup", i2.handleMouseup);
            }, i2.handleDrag = function(t4) {
              if (i2.img) {
                var e3 = t4.clientX - i2.dragStartX;
                i2.dragBox === i2.boxes[0] || i2.dragBox === i2.boxes[3] ? i2.img.width = Math.round(i2.preDragWidth - e3) : i2.img.width = Math.round(i2.preDragWidth + e3), i2.requestUpdate();
              }
            }, i2.setCursor = function(t4) {
              [document.body, i2.img].forEach(function(e3) {
                e3.style.cursor = t4;
              });
            }, a2 = n2, r(i2, a2);
          }
          return i(e2, t2), e2;
        }(a.a);
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(t2, e2) {
          if (!t2)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
        }
        function i(t2, e2) {
          if ("function" != typeof e2 && null !== e2)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
          t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2);
        }
        var a = n(105), s = n.n(a), u = n(104), c = n.n(u), l = n(106), f = n.n(l), p = n(9);
        n.d(e, "a", function() {
          return b;
        });
        var d = {}, h = {}, y = {}, v = {}, b = function(t2) {
          function e2() {
            var t3, n2, i2, a2;
            o(this, e2);
            for (var u2 = arguments.length, l2 = Array(u2), p2 = 0; p2 < u2; p2++)
              l2[p2] = arguments[p2];
            return n2 = i2 = r(this, (t3 = e2.__proto__ || Object.getPrototypeOf(e2)).call.apply(t3, [this].concat(l2))), i2.onCreate = function(t4) {
              d = t4, h = new d.Attributor.Style("float", "float"), y = new d.Attributor.Style("margin", "margin"), v = new d.Attributor.Style("display", "display"), i2.toolbar = document.createElement("div"), Object.assign(i2.toolbar.style, i2.options.toolbarStyles), i2.overlay.appendChild(i2.toolbar), i2._defineAlignments(), i2._addToolbarButtons();
            }, i2.onDestroy = function() {
            }, i2.onUpdate = function() {
            }, i2._defineAlignments = function() {
              i2.alignments = [{ icon: s.a, apply: function() {
                v.add(i2.img, "inline"), h.add(i2.img, "left"), y.add(i2.img, "0 1em 1em 0");
              }, isApplied: function() {
                return "left" == h.value(i2.img);
              } }, { icon: c.a, apply: function() {
                v.add(i2.img, "block"), h.remove(i2.img), y.add(i2.img, "auto");
              }, isApplied: function() {
                return "auto" == y.value(i2.img);
              } }, { icon: f.a, apply: function() {
                v.add(i2.img, "inline"), h.add(i2.img, "right"), y.add(i2.img, "0 0 1em 1em");
              }, isApplied: function() {
                return "right" == h.value(i2.img);
              } }];
            }, i2._addToolbarButtons = function() {
              var t4 = [];
              i2.alignments.forEach(function(e3, n3) {
                var o2 = document.createElement("span");
                t4.push(o2), o2.innerHTML = e3.icon, o2.addEventListener("click", function() {
                  t4.forEach(function(t5) {
                    return t5.style.filter = "";
                  }), e3.isApplied() ? (h.remove(i2.img), y.remove(i2.img), v.remove(i2.img)) : (i2._selectButton(o2), e3.apply()), i2.requestUpdate();
                }), Object.assign(o2.style, i2.options.toolbarButtonStyles), n3 > 0 && (o2.style.borderLeftWidth = "0"), Object.assign(o2.children[0].style, i2.options.toolbarButtonSvgStyles), e3.isApplied() && i2._selectButton(o2), i2.toolbar.appendChild(o2);
              });
            }, i2._selectButton = function(t4) {
              t4.style.filter = "invert(20%)";
            }, a2 = n2, r(i2, a2);
          }
          return i(e2, t2), e2;
        }(p.a);
      }, function(t, e, n) {
        var o = n(17), r = n(20), i = n(63), a = n(101), s = r(function(t2) {
          return t2.push(void 0, i), o(a, void 0, t2);
        });
        t.exports = s;
      }, function(t, e, n) {
        "use strict";
        function o(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: true });
        var r = n(37), i = n.n(r), a = n(33), s = n(34), u = n(36), c = n(35), l = { DisplaySize: s.a, Toolbar: u.a, Resize: c.a }, f = function t2(e2) {
          var n2 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          o(this, t2), this.initializeModules = function() {
            n2.removeModules(), n2.modules = n2.moduleClasses.map(function(t3) {
              return new (l[t3] || t3)(n2);
            }), n2.modules.forEach(function(t3) {
              t3.onCreate(n2.parchment);
            }), n2.onUpdate();
          }, this.onUpdate = function() {
            n2.repositionElements(), n2.modules.forEach(function(t3) {
              t3.onUpdate();
            });
          }, this.removeModules = function() {
            n2.modules.forEach(function(t3) {
              t3.onDestroy();
            }), n2.modules = [];
          }, this.handleClick = function(t3) {
            if (t3.target && t3.target.tagName && "IMG" === t3.target.tagName.toUpperCase()) {
              if (n2.img === t3.target)
                return;
              n2.img && n2.hide(), n2.show(t3.target);
            } else
              n2.img && n2.hide();
          }, this.show = function(t3) {
            n2.img = t3, n2.showOverlay(), n2.initializeModules();
          }, this.showOverlay = function() {
            n2.overlay && n2.hideOverlay(), n2.quill.setSelection(null), n2.setUserSelect("none"), document.addEventListener("keyup", n2.checkImage, true), n2.quill.root.addEventListener("input", n2.checkImage, true), n2.overlay = document.createElement("div"), Object.assign(n2.overlay.style, n2.options.overlayStyles), n2.quill.root.parentNode.appendChild(n2.overlay), n2.repositionElements();
          }, this.hideOverlay = function() {
            n2.overlay && (n2.quill.root.parentNode.removeChild(n2.overlay), n2.overlay = void 0, document.removeEventListener("keyup", n2.checkImage), n2.quill.root.removeEventListener("input", n2.checkImage), n2.setUserSelect(""));
          }, this.repositionElements = function() {
            if (n2.overlay && n2.img) {
              var t3 = n2.quill.root.parentNode, e3 = n2.img.getBoundingClientRect(), o2 = t3.getBoundingClientRect();
              Object.assign(n2.overlay.style, { left: e3.left - o2.left - 1 + t3.scrollLeft + "px", top: e3.top - o2.top + t3.scrollTop + "px", width: e3.width + "px", height: e3.height + "px" });
            }
          }, this.hide = function() {
            n2.hideOverlay(), n2.removeModules(), n2.img = void 0;
          }, this.setUserSelect = function(t3) {
            ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach(function(e3) {
              n2.quill.root.style[e3] = t3, document.documentElement.style[e3] = t3;
            });
          }, this.checkImage = function(t3) {
            n2.img && (46 != t3.keyCode && 8 != t3.keyCode || window.Quill.find(n2.img).deleteAt(0), n2.hide());
          }, this.quill = e2;
          var s2 = false;
          r2.modules && (s2 = r2.modules.slice()), r2.parchment && (this.parchment = r2.parchment), this.options = i()({}, r2, a.a), s2 !== false && (this.options.modules = s2), document.execCommand("enableObjectResizing", false, "false"), this.quill.root.addEventListener("click", this.handleClick, false), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = [];
        };
        e.default = f, window.Quill && window.Quill.register("modules/imageResize", f);
      }, function(t, e, n) {
        function o(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var o2 = t2[e2];
            this.set(o2[0], o2[1]);
          }
        }
        var r = n(66), i = n(67), a = n(68), s = n(69), u = n(70);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = -1, n2 = null == t2 ? 0 : t2.length;
          for (this.clear(); ++e2 < n2; ) {
            var o2 = t2[e2];
            this.set(o2[0], o2[1]);
          }
        }
        var r = n(80), i = n(81), a = n(82), s = n(83), u = n(84);
        o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = this.__data__ = new r(t2);
          this.size = e2.size;
        }
        var r = n(3), i = n(92), a = n(93), s = n(94), u = n(95), c = n(96);
        o.prototype.clear = i, o.prototype.delete = a, o.prototype.get = s, o.prototype.has = u, o.prototype.set = c, t.exports = o;
      }, function(t, e, n) {
        var o = n(1), r = o.Uint8Array;
        t.exports = r;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = a(t2), o2 = !n2 && i(t2), l2 = !n2 && !o2 && s(t2), p = !n2 && !o2 && !l2 && c(t2), d = n2 || o2 || l2 || p, h = d ? r(t2.length, String) : [], y = h.length;
          for (var v in t2)
            !e2 && !f.call(t2, v) || d && ("length" == v || l2 && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, y)) || h.push(v);
          return h;
        }
        var r = n(53), i = n(27), a = n(28), s = n(29), u = n(24), c = n(31), l = Object.prototype, f = l.hasOwnProperty;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2, n2) {
          var o2 = t2[e2];
          s.call(t2, e2) && i(o2, n2) && (void 0 !== n2 || e2 in t2) || r(t2, e2, n2);
        }
        var r = n(10), i = n(8), a = Object.prototype, s = a.hasOwnProperty;
        t.exports = o;
      }, function(t, e, n) {
        var o = n(0), r = Object.create, i = function() {
          function t2() {
          }
          return function(e2) {
            if (!o(e2))
              return {};
            if (r)
              return r(e2);
            t2.prototype = e2;
            var n2 = new t2();
            return t2.prototype = void 0, n2;
          };
        }();
        t.exports = i;
      }, function(t, e, n) {
        var o = n(62), r = o();
        t.exports = r;
      }, function(t, e, n) {
        function o(t2) {
          return i(t2) && r(t2) == a;
        }
        var r = n(5), i = n(2), a = "[object Arguments]";
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return !(!a(t2) || i(t2)) && (r(t2) ? d : u).test(s(t2));
        }
        var r = n(13), i = n(74), a = n(0), s = n(97), u = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, f = c.toString, p = l.hasOwnProperty, d = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return a(t2) && i(t2.length) && !!s[r(t2)];
        }
        var r = n(5), i = n(30), a = n(2), s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = true, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = false, t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          if (!r(t2))
            return a(t2);
          var e2 = i(t2), n2 = [];
          for (var o2 in t2)
            ("constructor" != o2 || !e2 && u.call(t2, o2)) && n2.push(o2);
          return n2;
        }
        var r = n(0), i = n(25), a = n(85), s = Object.prototype, u = s.hasOwnProperty;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2, n2, o2, g, x, m) {
          var _ = t2[n2], j = e2[n2], w = m.get(j);
          if (w)
            return void r(t2, n2, w);
          var O = x ? x(_, j, n2 + "", t2, e2, m) : void 0, S = void 0 === O;
          if (S) {
            var E = l(j), A = !E && p(j), z = !E && !A && v(j);
            O = j, E || A || z ? l(_) ? O = _ : f(_) ? O = s(_) : A ? (S = false, O = i(j, true)) : z ? (S = false, O = a(j, true)) : O = [] : y(j) || c(j) ? (O = _, c(_) ? O = b(_) : (!h(_) || o2 && d(_)) && (O = u(j))) : S = false;
          }
          S && (m.set(j, O), g(O, j, o2, x, m), m.delete(j)), r(t2, n2, O);
        }
        var r = n(18), i = n(56), a = n(57), s = n(58), u = n(71), c = n(27), l = n(28), f = n(99), p = n(29), d = n(13), h = n(0), y = n(100), v = n(31), b = n(103);
        t.exports = o;
      }, function(t, e, n) {
        var o = n(98), r = n(21), i = n(26), a = r ? function(t2, e2) {
          return r(t2, "toString", { configurable: true, enumerable: false, value: o(e2), writable: true });
        } : i;
        t.exports = a;
      }, function(t, e) {
        function n(t2, e2) {
          for (var n2 = -1, o = Array(t2); ++n2 < t2; )
            o[n2] = e2(n2);
          return o;
        }
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          return function(e2) {
            return t2(e2);
          };
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = new t2.constructor(t2.byteLength);
          return new r(e2).set(new r(t2)), e2;
        }
        var r = n(42);
        t.exports = o;
      }, function(t, e, n) {
        (function(t2) {
          function o(t3, e2) {
            if (e2)
              return t3.slice();
            var n2 = t3.length, o2 = c ? c(n2) : new t3.constructor(n2);
            return t3.copy(o2), o2;
          }
          var r = n(1), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t2 && t2 && !t2.nodeType && t2, s = a && a.exports === i, u = s ? r.Buffer : void 0, c = u ? u.allocUnsafe : void 0;
          t2.exports = o;
        }).call(e, n(14)(t));
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = e2 ? r(t2.buffer) : t2.buffer;
          return new t2.constructor(n2, t2.byteOffset, t2.length);
        }
        var r = n(55);
        t.exports = o;
      }, function(t, e) {
        function n(t2, e2) {
          var n2 = -1, o = t2.length;
          for (e2 || (e2 = Array(o)); ++n2 < o; )
            e2[n2] = t2[n2];
          return e2;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2, e2, n2, o2) {
          var a = !n2;
          n2 || (n2 = {});
          for (var s = -1, u = e2.length; ++s < u; ) {
            var c = e2[s], l = o2 ? o2(n2[c], t2[c], c, n2, t2) : void 0;
            void 0 === l && (l = t2[c]), a ? i(n2, c, l) : r(n2, c, l);
          }
          return n2;
        }
        var r = n(44), i = n(10);
        t.exports = o;
      }, function(t, e, n) {
        var o = n(1), r = o["__core-js_shared__"];
        t.exports = r;
      }, function(t, e, n) {
        function o(t2) {
          return r(function(e2, n2) {
            var o2 = -1, r2 = n2.length, a = r2 > 1 ? n2[r2 - 1] : void 0, s = r2 > 2 ? n2[2] : void 0;
            for (a = t2.length > 3 && "function" == typeof a ? (r2--, a) : void 0, s && i(n2[0], n2[1], s) && (a = r2 < 3 ? void 0 : a, r2 = 1), e2 = Object(e2); ++o2 < r2; ) {
              var u = n2[o2];
              u && t2(e2, u, o2, a);
            }
            return e2;
          });
        }
        var r = n(20), i = n(72);
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          return function(e2, n2, o) {
            for (var r = -1, i = Object(e2), a = o(e2), s = a.length; s--; ) {
              var u = a[t2 ? s : ++r];
              if (n2(i[u], u, i) === false)
                break;
            }
            return e2;
          };
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2, e2, n2, a, s, u) {
          return i(t2) && i(e2) && (u.set(e2, t2), r(t2, e2, void 0, o, u), u.delete(e2)), t2;
        }
        var r = n(19), i = n(0);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = a.call(t2, u), n2 = t2[u];
          try {
            t2[u] = void 0;
          } catch (t3) {
          }
          var o2 = s.call(t2);
          return e2 ? t2[u] = n2 : delete t2[u], o2;
        }
        var r = n(16), i = Object.prototype, a = i.hasOwnProperty, s = i.toString, u = r ? r.toStringTag : void 0;
        t.exports = o;
      }, function(t, e) {
        function n(t2, e2) {
          return null == t2 ? void 0 : t2[e2];
        }
        t.exports = n;
      }, function(t, e, n) {
        function o() {
          this.__data__ = r ? r(null) : {}, this.size = 0;
        }
        var r = n(7);
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          var e2 = this.has(t2) && delete this.__data__[t2];
          return this.size -= e2 ? 1 : 0, e2;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = this.__data__;
          if (r) {
            var n2 = e2[t2];
            return n2 === i ? void 0 : n2;
          }
          return s.call(e2, t2) ? e2[t2] : void 0;
        }
        var r = n(7), i = "__lodash_hash_undefined__", a = Object.prototype, s = a.hasOwnProperty;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = this.__data__;
          return r ? void 0 !== e2[t2] : a.call(e2, t2);
        }
        var r = n(7), i = Object.prototype, a = i.hasOwnProperty;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = this.__data__;
          return this.size += this.has(t2) ? 0 : 1, n2[t2] = r && void 0 === e2 ? i : e2, this;
        }
        var r = n(7), i = "__lodash_hash_undefined__";
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return "function" != typeof t2.constructor || a(t2) ? {} : r(i(t2));
        }
        var r = n(45), i = n(23), a = n(25);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2, n2) {
          if (!s(n2))
            return false;
          var o2 = typeof e2;
          return !!("number" == o2 ? i(n2) && a(e2, n2.length) : "string" == o2 && e2 in n2) && r(n2[e2], t2);
        }
        var r = n(8), i = n(12), a = n(24), s = n(0);
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          var e2 = typeof t2;
          return "string" == e2 || "number" == e2 || "symbol" == e2 || "boolean" == e2 ? "__proto__" !== t2 : null === t2;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          return !!i && i in t2;
        }
        var r = n(60), i = function() {
          var t2 = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
          return t2 ? "Symbol(src)_1." + t2 : "";
        }();
        t.exports = o;
      }, function(t, e) {
        function n() {
          this.__data__ = [], this.size = 0;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = this.__data__, n2 = r(e2, t2);
          return !(n2 < 0) && (n2 == e2.length - 1 ? e2.pop() : a.call(e2, n2, 1), --this.size, true);
        }
        var r = n(4), i = Array.prototype, a = i.splice;
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = this.__data__, n2 = r(e2, t2);
          return n2 < 0 ? void 0 : e2[n2][1];
        }
        var r = n(4);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return r(this.__data__, t2) > -1;
        }
        var r = n(4);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = this.__data__, o2 = r(n2, t2);
          return o2 < 0 ? (++this.size, n2.push([t2, e2])) : n2[o2][1] = e2, this;
        }
        var r = n(4);
        t.exports = o;
      }, function(t, e, n) {
        function o() {
          this.size = 0, this.__data__ = { hash: new r(), map: new (a || i)(), string: new r() };
        }
        var r = n(39), i = n(3), a = n(15);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          var e2 = r(this, t2).delete(t2);
          return this.size -= e2 ? 1 : 0, e2;
        }
        var r = n(6);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return r(this, t2).get(t2);
        }
        var r = n(6);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          return r(this, t2).has(t2);
        }
        var r = n(6);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = r(this, t2), o2 = n2.size;
          return n2.set(t2, e2), this.size += n2.size == o2 ? 0 : 1, this;
        }
        var r = n(6);
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          var e2 = [];
          if (null != t2)
            for (var n2 in Object(t2))
              e2.push(n2);
          return e2;
        }
        t.exports = n;
      }, function(t, e, n) {
        (function(t2) {
          var o = n(22), r = "object" == typeof e && e && !e.nodeType && e, i = r && "object" == typeof t2 && t2 && !t2.nodeType && t2, a = i && i.exports === r, s = a && o.process, u = function() {
            try {
              return s && s.binding && s.binding("util");
            } catch (t3) {
            }
          }();
          t2.exports = u;
        }).call(e, n(14)(t));
      }, function(t, e) {
        function n(t2) {
          return r.call(t2);
        }
        var o = Object.prototype, r = o.toString;
        t.exports = n;
      }, function(t, e) {
        function n(t2, e2) {
          return function(n2) {
            return t2(e2(n2));
          };
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2, e2, n2) {
          return e2 = i(void 0 === e2 ? t2.length - 1 : e2, 0), function() {
            for (var o2 = arguments, a = -1, s = i(o2.length - e2, 0), u = Array(s); ++a < s; )
              u[a] = o2[e2 + a];
            a = -1;
            for (var c = Array(e2 + 1); ++a < e2; )
              c[a] = o2[a];
            return c[e2] = n2(u), r(t2, this, c);
          };
        }
        var r = n(17), i = Math.max;
        t.exports = o;
      }, function(t, e, n) {
        var o = n(52), r = n(91), i = r(o);
        t.exports = i;
      }, function(t, e) {
        function n(t2) {
          var e2 = 0, n2 = 0;
          return function() {
            var a = i(), s = r - (a - n2);
            if (n2 = a, s > 0) {
              if (++e2 >= o)
                return arguments[0];
            } else
              e2 = 0;
            return t2.apply(void 0, arguments);
          };
        }
        var o = 800, r = 16, i = Date.now;
        t.exports = n;
      }, function(t, e, n) {
        function o() {
          this.__data__ = new r(), this.size = 0;
        }
        var r = n(3);
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          var e2 = this.__data__, n2 = e2.delete(t2);
          return this.size = e2.size, n2;
        }
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          return this.__data__.get(t2);
        }
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          return this.__data__.has(t2);
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2, e2) {
          var n2 = this.__data__;
          if (n2 instanceof r) {
            var o2 = n2.__data__;
            if (!i || o2.length < s - 1)
              return o2.push([t2, e2]), this.size = ++n2.size, this;
            n2 = this.__data__ = new a(o2);
          }
          return n2.set(t2, e2), this.size = n2.size, this;
        }
        var r = n(3), i = n(15), a = n(40), s = 200;
        t.exports = o;
      }, function(t, e) {
        function n(t2) {
          if (null != t2) {
            try {
              return r.call(t2);
            } catch (t3) {
            }
            try {
              return t2 + "";
            } catch (t3) {
            }
          }
          return "";
        }
        var o = Function.prototype, r = o.toString;
        t.exports = n;
      }, function(t, e) {
        function n(t2) {
          return function() {
            return t2;
          };
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          return i(t2) && r(t2);
        }
        var r = n(12), i = n(2);
        t.exports = o;
      }, function(t, e, n) {
        function o(t2) {
          if (!a(t2) || r(t2) != s)
            return false;
          var e2 = i(t2);
          if (null === e2)
            return true;
          var n2 = f.call(e2, "constructor") && e2.constructor;
          return "function" == typeof n2 && n2 instanceof n2 && l.call(n2) == p;
        }
        var r = n(5), i = n(23), a = n(2), s = "[object Object]", u = Function.prototype, c = Object.prototype, l = u.toString, f = c.hasOwnProperty, p = l.call(Object);
        t.exports = o;
      }, function(t, e, n) {
        var o = n(19), r = n(61), i = r(function(t2, e2, n2, r2) {
          o(t2, e2, n2, r2);
        });
        t.exports = i;
      }, function(t, e) {
        function n() {
          return false;
        }
        t.exports = n;
      }, function(t, e, n) {
        function o(t2) {
          return r(t2, i(t2));
        }
        var r = n(59), i = n(32);
        t.exports = o;
      }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>';
      }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>';
      }, function(t, e) {
        t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>';
      }, function(t, e) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (t2) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }]);
    });
  }
});
export default require_image_resize_min();
//# sourceMappingURL=quill-image-resize-module-react.js.map
