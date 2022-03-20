(function (e) {
  function t(t) {
    for (
      var c, a, o = t[0], s = t[1], u = t[2], l = 0, b = [];
      l < o.length;
      l++
    )
      (a = o[l]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && b.push(i[a][0]),
        (i[a] = 0);
    for (c in s) Object.prototype.hasOwnProperty.call(s, c) && (e[c] = s[c]);
    d && d(t);
    while (b.length) b.shift()();
    return r.push.apply(r, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], c = !0, a = 1; a < n.length; a++) {
        var o = n[a];
        0 !== i[o] && (c = !1);
      }
      c && (r.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var c = {},
    a = { app: 0 },
    i = { app: 0 },
    r = [];
  function o(e) {
    return (
      s.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-097b96ed": "2088bce4",
        "chunk-25ea366c": "e48c67b3",
        "chunk-2a9a6a02": "8c4e1a24",
        "chunk-55a5f3a2": "89cb816c",
        "chunk-6489f293": "06fd0624",
        "chunk-6b177f1a": "397f197f",
        "chunk-aa63c264": "3656dbcd",
        "chunk-f42adfb2": "30b5dcef",
      }[e] +
      ".js"
    );
  }
  function s(t) {
    if (c[t]) return c[t].exports;
    var n = (c[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = {
        "chunk-097b96ed": 1,
        "chunk-25ea366c": 1,
        "chunk-2a9a6a02": 1,
        "chunk-55a5f3a2": 1,
        "chunk-6489f293": 1,
        "chunk-6b177f1a": 1,
        "chunk-aa63c264": 1,
        "chunk-f42adfb2": 1,
      };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var c =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-097b96ed": "9929f6ff",
                    "chunk-25ea366c": "649d04ae",
                    "chunk-2a9a6a02": "a8cb0b8e",
                    "chunk-55a5f3a2": "8da2ec92",
                    "chunk-6489f293": "f4fb4905",
                    "chunk-6b177f1a": "55e0d3ff",
                    "chunk-aa63c264": "f4f04a47",
                    "chunk-f42adfb2": "1452c39b",
                  }[e] +
                  ".css",
                i = s.p + c,
                r = document.getElementsByTagName("link"),
                o = 0;
              o < r.length;
              o++
            ) {
              var u = r[o],
                l = u.getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (l === c || l === i)) return t();
            }
            var b = document.getElementsByTagName("style");
            for (o = 0; o < b.length; o++) {
              (u = b[o]), (l = u.getAttribute("data-href"));
              if (l === c || l === i) return t();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = t),
              (d.onerror = function (t) {
                var c = (t && t.target && t.target.src) || i,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + c + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = c),
                  delete a[e],
                  d.parentNode.removeChild(d),
                  n(r);
              }),
              (d.href = i);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(d);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var c = i[e];
    if (0 !== c)
      if (c) t.push(c[2]);
      else {
        var r = new Promise(function (t, n) {
          c = i[e] = [t, n];
        });
        t.push((c[2] = r));
        var u,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          s.nc && l.setAttribute("nonce", s.nc),
          (l.src = o(e));
        var b = new Error();
        u = function (t) {
          (l.onerror = l.onload = null), clearTimeout(d);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var c = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (b.message =
                "Loading chunk " + e + " failed.\n(" + c + ": " + a + ")"),
                (b.name = "ChunkLoadError"),
                (b.type = c),
                (b.request = a),
                n[1](b);
            }
            i[e] = void 0;
          }
        };
        var d = setTimeout(function () {
          u({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = u), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = c),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          s.d(
            n,
            c,
            function (t) {
              return e[t];
            }.bind(null, c)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var b = 0; b < u.length; b++) t(u[b]);
  var d = l;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "0135": function (e, t, n) {
    "use strict";
    n("b434");
  },
  "0180": function (e, t, n) {
    e.exports = n.p + "img/24.5fe3917f.png";
  },
  "0234": function (e, t, n) {
    e.exports = n.p + "img/13.b55ef7cd.png";
  },
  "04d8": function (e, t, n) {},
  "05df": function (e, t, n) {},
  "05ec": function (e, t, n) {
    e.exports = n.p + "img/9.b7d7a455.png";
  },
  "0875": function (e, t, n) {
    e.exports = n.p + "img/35.73630759.png";
  },
  "0a49": function (e, t, n) {
    e.exports = n.p + "img/36.12ed36bb.png";
  },
  "0dc6": function (e, t, n) {
    e.exports = n.p + "img/40.45035cb2.png";
  },
  "13ad": function (e, t, n) {
    e.exports = n.p + "img/6.220ff6db.png";
  },
  "179a": function (e, t, n) {},
  2210: function (e, t, n) {
    "use strict";
    n("ad84");
  },
  "2a7f": function (e, t, n) {
    e.exports = n.p + "img/37.57d2a420.png";
  },
  "33c1": function (e, t, n) {
    "use strict";
    n("e104");
  },
  "3ed1": function (e, t, n) {},
  "43c8": function (e, t, n) {
    e.exports = n.p + "img/header-image.2cb8a619.jpg";
  },
  "44ae": function (e, t, n) {
    "use strict";
    n("9e01");
  },
  4526: function (e, t, n) {
    e.exports = n.p + "img/19.78c5f062.png";
  },
  "471d": function (e, t, n) {
    e.exports = n.p + "img/22.74f90dd5.png";
  },
  "47c9": function (e, t, n) {
    "use strict";
    n("9b73");
  },
  4821: function (e, t, n) {
    e.exports = n.p + "img/4.c262b06f.png";
  },
  "4b23": function (e, t, n) {
    e.exports = n.p + "img/2.e5f9dfec.png";
  },
  "4c19": function (e, t, n) {
    "use strict";
    n("bdde");
  },
  "4cd5": function (e, t, n) {
    e.exports = n.p + "img/18.5d57db5c.png";
  },
  "51b9": function (e, t, n) {
    e.exports = n.p + "img/30.651b43de.png";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var c = n("7a23");
    function a(e, t, n, a, i, r) {
      var o = Object(c["w"])("Loader"),
        s = Object(c["w"])("Navbar"),
        u = Object(c["w"])("router-view"),
        l = Object(c["w"])("Footer");
      return (
        Object(c["r"])(),
        Object(c["e"])(
          c["a"],
          null,
          [
            Object(c["i"])(o, { isLoaded: i.isLoaded }, null, 8, ["isLoaded"]),
            Object(c["i"])(s),
            Object(c["i"])(u),
            Object(c["i"])(l),
          ],
          64
        )
      );
    }
    var i = n("643d"),
      r = n.n(i),
      o = { class: "container" },
      s = { class: "brandng" },
      u = Object(c["i"])("img", { src: r.a, alt: "brand" }, null, -1),
      l = { class: "navigation" },
      b = Object(c["h"])("About Company"),
      d = Object(c["h"])("Products"),
      f = Object(c["h"])("our Partners"),
      p = Object(c["h"])("News"),
      m = { class: "burger-icon" },
      g = { class: "dropdown-navigation" },
      O = Object(c["h"])("About Company"),
      j = Object(c["h"])("Products"),
      h = Object(c["h"])("Our Partners"),
      v = Object(c["h"])("News");
    function k(e, t, n, a, i, r) {
      var k = Object(c["w"])("router-link");
      return (
        Object(c["r"])(),
        Object(c["e"])(
          "header",
          { class: { "scrolled-nav": i.scrolledNav } },
          [
            Object(c["i"])("div", o, [
              Object(c["i"])("nav", null, [
                Object(c["i"])("div", s, [
                  Object(c["i"])(
                    k,
                    { to: { name: "Home" } },
                    {
                      default: Object(c["D"])(function () {
                        return [u];
                      }),
                      _: 1,
                    }
                  ),
                ]),
                Object(c["E"])(
                  Object(c["i"])(
                    "ul",
                    l,
                    [
                      Object(c["i"])("li", null, [
                        Object(c["i"])(
                          k,
                          { class: "nav-link", to: { name: "About" } },
                          {
                            default: Object(c["D"])(function () {
                              return [b];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(c["i"])("li", null, [
                        Object(c["i"])(
                          k,
                          { class: "nav-link", to: { name: "Catalog" } },
                          {
                            default: Object(c["D"])(function () {
                              return [d];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(c["i"])("li", null, [
                        Object(c["i"])(
                          k,
                          { class: "nav-link", to: { name: "Partners" } },
                          {
                            default: Object(c["D"])(function () {
                              return [f];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(c["i"])("li", null, [
                        Object(c["i"])(
                          k,
                          { class: "nav-link", to: { name: "Blog" } },
                          {
                            default: Object(c["D"])(function () {
                              return [p];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                    ],
                    512
                  ),
                  [[c["B"], !i.mobile]]
                ),
                Object(c["E"])(
                  Object(c["i"])(
                    "div",
                    m,
                    [
                      Object(c["i"])(
                        "i",
                        {
                          class: [
                            "fas fa-bars",
                            { "burger-icon-active": i.mobileNav },
                          ],
                          onClick:
                            t[1] ||
                            (t[1] = function () {
                              return (
                                r.toggleMobileNav &&
                                r.toggleMobileNav.apply(r, arguments)
                              );
                            }),
                        },
                        null,
                        2
                      ),
                    ],
                    512
                  ),
                  [[c["B"], i.mobile]]
                ),
                Object(c["i"])(
                  c["b"],
                  { name: "mobile-nav" },
                  {
                    default: Object(c["D"])(function () {
                      return [
                        Object(c["E"])(
                          Object(c["i"])(
                            "ul",
                            g,
                            [
                              Object(c["i"])(
                                "li",
                                {
                                  onClick:
                                    t[2] ||
                                    (t[2] = function (e) {
                                      return (i.mobileNav = !1);
                                    }),
                                },
                                [
                                  Object(c["i"])(
                                    k,
                                    {
                                      class: "nav-link",
                                      to: { name: "About" },
                                    },
                                    {
                                      default: Object(c["D"])(function () {
                                        return [O];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]
                              ),
                              Object(c["i"])(
                                "li",
                                {
                                  onClick:
                                    t[3] ||
                                    (t[3] = function (e) {
                                      return (i.mobileNav = !1);
                                    }),
                                },
                                [
                                  Object(c["i"])(
                                    k,
                                    {
                                      class: "nav-link",
                                      to: { name: "Catalog" },
                                    },
                                    {
                                      default: Object(c["D"])(function () {
                                        return [j];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]
                              ),
                              Object(c["i"])(
                                "li",
                                {
                                  onClick:
                                    t[4] ||
                                    (t[4] = function (e) {
                                      return (i.mobileNav = !1);
                                    }),
                                },
                                [
                                  Object(c["i"])(
                                    k,
                                    {
                                      class: "nav-link",
                                      to: { name: "Partners" },
                                    },
                                    {
                                      default: Object(c["D"])(function () {
                                        return [h];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]
                              ),
                              Object(c["i"])(
                                "li",
                                {
                                  onClick:
                                    t[5] ||
                                    (t[5] = function (e) {
                                      return (i.mobileNav = !1);
                                    }),
                                },
                                [
                                  Object(c["i"])(
                                    k,
                                    { class: "nav-link", to: { name: "Blog" } },
                                    {
                                      default: Object(c["D"])(function () {
                                        return [v];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]
                              ),
                            ],
                            512
                          ),
                          [[c["B"], i.mobileNav]]
                        ),
                      ];
                    }),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ],
          2
        )
      );
    }
    var x = {
      name: "Navbar",
      data: function () {
        return {
          scrolledNav: null,
          mobile: null,
          mobileNav: null,
          windowWidth: null,
        };
      },
      created: function () {
        window.addEventListener("resize", this.checkScreen), this.checkScreen();
      },
      methods: {
        toggleMobileNav: function () {
          this.mobileNav = !this.mobileNav;
        },
        checkScreen: function () {
          (this.windowWidth = window.innerWidth),
            this.windowWidth < 790
              ? (this.mobile = !0)
              : ((this.mobile = !1), (this.mobileNav = !1));
        },
        updateScrolledNav: function () {
          var e = window.scrollY;
          this.scrolledNav = e > 50;
        },
      },
      mounted: function () {
        window.addEventListener("scroll", this.updateScrolledNav);
      },
    };
    n("0135");
    x.render = k;
    var w = x,
      A = n("8bef"),
      y = n.n(A),
      C = { class: "container" },
      P = { class: "form-wrapper" },
      D = Object(c["i"])(
        "div",
        { class: "wrapper" },
        [
          Object(c["i"])("div", { class: "item" }, [
            Object(c["i"])("img", {
              class: "footer-logo",
              src: y.a,
              alt: "footer_logo",
            }),
            Object(c["i"])(
              "p",
              { class: "text copyright" },
              "Copyright © 2020 Phoenix Global Trading"
            ),
            Object(c["i"])(
              "p",
              { class: "text copyright" },
              "All rights reserved."
            ),
            Object(c["i"])("div", { class: "social" }, [
              Object(c["i"])(
                "a",
                { href: "https://twitter.com/Phoenixglobalt1" },
                [Object(c["i"])("i", { class: "fab fa-twitter" })]
              ),
              Object(c["i"])(
                "a",
                {
                  href: "https://www.linkedin.com/in/phoenix-global-trade-3246a2220",
                },
                [Object(c["i"])("i", { class: "fab fa-linkedin-in" })]
              ),
              Object(c["i"])("a", { href: "https://t.me/phoenixestate" }, [
                Object(c["i"])("i", { class: "fab fa-telegram" }),
              ]),
              Object(c["i"])(
                "a",
                {
                  href: "https://www.facebook.com/Phoenix-global-trading-105727821855505",
                },
                [Object(c["i"])("i", { class: "fab fa-facebook" })]
              ),
              Object(c["i"])(
                "a",
                {
                  href: "https://instagram.com/phoenix_global_trading?utm_medium=copy_lin",
                },
                [Object(c["i"])("i", { class: "fab fa-instagram" })]
              ),
            ]),
          ]),
          Object(c["i"])("div", { class: "item" }, [
            Object(c["i"])("h3", { class: "title" }, "Addresses"),
            Object(c["i"])("p", { class: "text" }, [
              Object(c["i"])("i", { class: "fa fa-map-marker-alt" }),
              Object(c["i"])(
                "span",
                null,
                "USA: 1321 Upland Dr. PMB 792; Houston, TX; 77043-4718"
              ),
            ]),
            Object(c["i"])("p", { class: "text" }, [
              Object(c["i"])("i", { class: "fa fa-map-marker-alt" }),
              Object(c["i"])(
                "span",
                null,
                "UK: 86-90 Paul street, EC2A 4NE, London "
              ),
            ]),
            Object(c["i"])("p", { class: "text" }, [
              Object(c["i"])("i", { class: "fa fa-map-marker-alt" }),
              Object(c["i"])(
                "span",
                null,
                "Turkey: Kolektif House, Maslak 42 – Istanbul"
              ),
            ]),
          ]),
          Object(c["i"])("div", { class: "item" }, [
            Object(c["i"])("h3", { class: "title" }, "Contacts"),
            Object(c["i"])(
              "a",
              { href: "tel: +19402940150", class: "contact-link" },
              [
                Object(c["i"])("i", { class: "fa fa-phone-alt" }),
                Object(c["i"])("span", null, "+19402940150 USA"),
              ]
            ),
            Object(c["i"])(
              "a",
              { href: "tel: +442080898100", class: "contact-link" },
              [
                Object(c["i"])("i", { class: "fa fa-phone-alt" }),
                Object(c["i"])("span", null, "+442080898100 United Kingdom"),
              ]
            ),
            Object(c["i"])(
              "a",
              {
                href: "mailto: info@phoenixglobaltradings.com",
                class: "contact-link",
              },
              [
                Object(c["i"])("i", { class: "fa fa-envelope" }),
                Object(c["i"])("span", null, "info@phoenixglobaltradings.com"),
              ]
            ),
          ]),
        ],
        -1
      );
    function L(e, t, n, a, i, r) {
      var o = Object(c["w"])("contact-form-popup");
      return (
        Object(c["r"])(),
        Object(c["e"])("footer", null, [
          Object(c["i"])("div", C, [
            Object(c["i"])("div", P, [Object(c["i"])(o)]),
            D,
          ]),
        ])
      );
    }
    var N = { class: "contact-form-popup" },
      B = { class: "button" },
      T = Object(c["g"])(
        '<div class="text"><h2>Contact with us</h2><p>Our offices: <br> USA: 1321 Upland Dr. PMB 792; Houston, TX; 77043-4718 <br> UK: 86-90 Paul street, EC2A 4NE, London <br> Turkey: Kolektif House, Maslak 42 – Istanbul <br></p><div class="social"><a href="https://www.facebook.com/Phoenix-global-trading-105727821855505"><i class="fab fa-facebook"></i></a><a href="https://t.me/phoenixestate"><i class="fab fa-telegram"></i></a><a href="https://www.linkedin.com/in/phoenix-global-trade-3246a2220"><i class="fab fa-linkedin-in"></i></a><a href="https://twitter.com/Phoenixglobalt1"><i class="fab fa-twitter"></i></a><a href="https://instagram.com/phoenix_global_trading?utm_medium=copy_link"><i class="fab fa-instagram"></i></a></div></div>',
        1
      );
    function E(e, t, n, a, i, r) {
      return (
        Object(c["r"])(),
        Object(c["e"])("div", N, [
          Object(c["i"])(
            "form",
            {
              onSubmit:
                t[3] ||
                (t[3] = Object(c["F"])(
                  function () {
                    return r.sendMail && r.sendMail.apply(r, arguments);
                  },
                  ["prevent"]
                )),
            },
            [
              Object(c["E"])(
                Object(c["i"])(
                  "input",
                  {
                    "onUpdate:modelValue":
                      t[1] ||
                      (t[1] = function (e) {
                        return (i.messageObg.email = e);
                      }),
                    type: "text",
                    class: "input",
                    placeholder: "Enter your email...",
                  },
                  null,
                  512
                ),
                [[c["A"], i.messageObg.email]]
              ),
              Object(c["E"])(
                Object(c["i"])(
                  "textarea",
                  {
                    "onUpdate:modelValue":
                      t[2] ||
                      (t[2] = function (e) {
                        return (i.messageObg.message = e);
                      }),
                    class: "input",
                    placeholder: "Enter your comments...",
                  },
                  null,
                  512
                ),
                [[c["A"], i.messageObg.message]]
              ),
              Object(c["i"])("div", B, [
                Object(c["E"])(
                  Object(c["i"])(
                    "p",
                    { class: ["text-message", i.messageTextColor] },
                    Object(c["y"])(i.messageText),
                    3
                  ),
                  [[c["B"], i.messageTextStatus]]
                ),
                Object(c["E"])(Object(c["i"])("button", null, "Send", 512), [
                  [c["B"], !i.messageSent],
                ]),
              ]),
            ],
            32
          ),
          T,
        ])
      );
    }
    var U = n("bc3a"),
      S = n.n(U),
      V = {
        name: "Contact-form-popup",
        data: function () {
          return {
            messageText: "Fill in all the fields",
            messageTextStatus: !1,
            messageTextColor: "error",
            messageSent: !1,
            messageObg: { email: "", message: "" },
          };
        },
        methods: {
          sendMail: function () {
            var e = this;
            if ("" == this.messageObg.email && "" == this.messageObg.message)
              return (
                (this.messageText = "Fill in all the fields"),
                (this.messageTextStatus = !0),
                (this.messageTextColor = "error"),
                void setTimeout(function () {
                  return (e.messageTextStatus = !1);
                }, 4e3)
              );
            S.a
              .post("https://biolab-mail.herokuapp.com/", this.messageObg)
              .then(function (t) {
                (e.messageText = "Message sent!"),
                  (e.messageTextStatus = !0),
                  (e.messageSent = !0),
                  (e.messageTextColor = "success"),
                  (e.messageObg.email = ""),
                  (e.messageObg.message = ""),
                  console.log(t);
              })
              .catch(function (t) {
                console.log("это catch ошибка: ", t),
                  (e.messageObg.email = ""),
                  (e.messageObg.message = "");
              });
          },
        },
      };
    n("4c19");
    V.render = E;
    var F = V,
      Y = { name: "Footer", components: { ContactFormPopup: F }, props: [] };
    n("8057");
    Y.render = L;
    var M = Y,
      W = { key: 0, class: "loader" },
      X = Object(c["i"])(
        "div",
        { class: "lds-ellipsis" },
        [
          Object(c["i"])("div"),
          Object(c["i"])("div"),
          Object(c["i"])("div"),
          Object(c["i"])("div"),
        ],
        -1
      );
    function G(e, t, n, a, i, r) {
      return n.isLoaded
        ? (Object(c["r"])(), Object(c["e"])("div", W, [X]))
        : Object(c["f"])("", !0);
    }
    var H = {
      props: {
        isLoaded: {
          type: Boolean,
          default: function () {
            return !0;
          },
        },
      },
      name: "Loader",
    };
    n("b371");
    H.render = G;
    var R = H,
      Z = {
        components: { Navbar: w, Footer: M, Loader: R },
        computed: {},
        data: function () {
          return { isLoaded: !0 };
        },
        methods: {},
        mounted: function () {
          var e = this;
          window.addEventListener("load", function () {
            e.isLoaded = !1;
          });
        },
      };
    n("47c9");
    Z.render = a;
    var q = Z,
      I = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02"));
    function K(e, t, n, a, i, r) {
      var o = Object(c["w"])("HomeVue"),
        s = Object(c["w"])("NewPartners"),
        u = Object(c["w"])("Reviews"),
        l = Object(c["w"])("OurProducts"),
        b = Object(c["w"])("ChooseUs");
      return (
        Object(c["r"])(),
        Object(c["e"])(
          c["a"],
          null,
          [
            Object(c["i"])(o),
            Object(c["i"])(s),
            Object(c["i"])(u),
            Object(c["i"])(l),
            Object(c["i"])(b),
          ],
          64
        )
      );
    }
    var J = n("f4d8"),
      Q = n.n(J),
      z = { class: "main" },
      _ = { class: "container" },
      $ = { class: "content" },
      ee = Object(c["i"])(
        "div",
        { class: "image-content" },
        [Object(c["i"])("img", { src: Q.a, alt: "" })],
        -1
      ),
      te = { class: "text-content" },
      ne = { class: "buttons" },
      ce = { class: "btn" },
      ae = Object(c["h"])("Our Products"),
      ie = { class: "btn" },
      re = Object(c["h"])("About Us"),
      oe = Object(c["i"])(
        "div",
        { class: "social-links" },
        [
          Object(c["i"])(
            "a",
            {
              href: "https://www.facebook.com/Phoenix-global-trading-105727821855505",
            },
            [Object(c["i"])("i", { class: "fab fa-facebook" })]
          ),
          Object(c["i"])("a", { href: "https://t.me/phoenixestate" }, [
            Object(c["i"])("i", { class: "fas fa-paper-plane" }),
          ]),
          Object(c["i"])(
            "a",
            {
              href: "https://www.linkedin.com/in/phoenix-global-trade-3246a2220",
            },
            [Object(c["i"])("i", { class: "fab fa-linkedin-in" })]
          ),
          Object(c["i"])("a", { href: "https://twitter.com/Phoenixglobalt1" }, [
            Object(c["i"])("i", { class: "fab fa-twitter" }),
          ]),
          Object(c["i"])(
            "a",
            {
              href: "https://instagram.com/phoenix_global_trading?utm_medium=copy_lin",
            },
            [Object(c["i"])("i", { class: "fab fa-instagram" })]
          ),
        ],
        -1
      );
    function se(e, t, n, a, i, r) {
      var o = Object(c["w"])("router-link");
      return (
        Object(c["r"])(),
        Object(c["e"])("section", z, [
          Object(c["i"])("div", _, [
            Object(c["i"])("div", $, [
              ee,
              Object(c["i"])("div", te, [
                Object(c["i"])("h1", null, Object(c["y"])(i.title), 1),
                Object(c["i"])("p", null, Object(c["y"])(i.textContent), 1),
                Object(c["i"])("div", ne, [
                  Object(c["i"])("div", ce, [
                    Object(c["i"])(
                      o,
                      { class: "link", to: { name: "Catalog" } },
                      {
                        default: Object(c["D"])(function () {
                          return [ae];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Object(c["i"])("div", ie, [
                    Object(c["i"])(
                      o,
                      { class: "link", to: { name: "About" } },
                      {
                        default: Object(c["D"])(function () {
                          return [re];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
              oe,
            ]),
          ]),
        ])
      );
    }
    var ue = {
      name: "Home-main",
      data: function () {
        return {
          theme: "Get Started",
          title: "Phoenix Global Tradings",
          textContent:
            "Phoenix Global Trading is an international operating global company. After having almost a decade of experience in sales, import and export spheres, our company proudly becomes a part of Phoenix Group. This gave us a great deal of opportunities and prospective development plan.  Our company plays significant role in connecting manufacturers and suppliers with customer.",
        };
      },
    };
    n("2210");
    ue.render = se;
    var le = ue,
      be = { class: "new-partners" },
      de = { class: "container" },
      fe = { class: "wrapper" },
      pe = { class: "partner-list" };
    function me(e, t, n, a, i, r) {
      return (
        Object(c["r"])(),
        Object(c["e"])("section", be, [
          Object(c["i"])("div", de, [
            Object(c["i"])("div", fe, [
              Object(c["i"])("div", pe, [
                (Object(c["r"])(!0),
                Object(c["e"])(
                  c["a"],
                  null,
                  Object(c["v"])(i.partnerList, function (e) {
                    return (
                      Object(c["r"])(),
                      Object(c["e"])(
                        "img",
                        { key: e, src: e, alt: "partnter" },
                        null,
                        8,
                        ["src"]
                      )
                    );
                  }),
                  128
                )),
              ]),
            ]),
          ]),
        ])
      );
    }
    var ge = {
      name: "New-partners",
      components: {},
      data: function () {
        return {
          theme: "Partners",
          title: "Our partners",
          partnerList: [
            n("5ca1"),
            n("4b23"),
            n("5805"),
            n("4821"),
            n("7d26"),
            n("13ad"),
            n("8baf"),
            n("ac27"),
            n("05ec"),
            n("6a5d"),
            n("eecd"),
            n("d9ca"),
            n("0234"),
            n("fe7b"),
            n("66aa"),
            n("6fa8"),
            n("dd93"),
            n("4cd5"),
            n("4526"),
            n("6d17"),
            n("f0e3"),
            n("471d"),
            n("9caf"),
            n("0180"),
            n("de84"),
            n("b06e"),
            n("8e58"),
            n("9174"),
            n("6c70"),
            n("51b9"),
            n("f8c7"),
            n("996d"),
            n("ba8e"),
            n("907c"),
            n("0875"),
            n("0a49"),
            n("2a7f"),
            n("e4e8"),
            n("f73b"),
            n("0dc6"),
          ],
        };
      },
    };
    n("7b2c");
    ge.render = me;
    var Oe = ge,
      je = n("43c8"),
      he = n.n(je),
      ve = { class: "choose-us" },
      ke = { class: "container" },
      xe = Object(c["i"])(
        "div",
        { class: "image-block" },
        [
          Object(c["i"])("div", { class: "image" }, [
            Object(c["i"])("img", { src: he.a, alt: "image" }),
          ]),
        ],
        -1
      ),
      we = { class: "text-block" },
      Ae = Object(c["i"])(
        "p",
        null,
        "- Dedicated service officer for each customer.",
        -1
      ),
      ye = Object(c["i"])(
        "p",
        null,
        "- Free return and refund or exchange of goods services",
        -1
      ),
      Ce = Object(c["i"])(
        "p",
        null,
        "- Dedicated representative offices in each continent:",
        -1
      ),
      Pe = Object(c["i"])(
        "p",
        null,
        "- Europe: Berlin, Germany; Asia: Istanbul, Turkey; North America: Texas, United States;",
        -1
      ),
      De = { class: "btn" },
      Le = Object(c["h"])("Show more...");
    function Ne(e, t, n, a, i, r) {
      var o = Object(c["w"])("router-link");
      return (
        Object(c["r"])(),
        Object(c["e"])("section", ve, [
          Object(c["i"])("div", ke, [
            xe,
            Object(c["i"])("div", we, [
              Object(c["i"])("h1", null, Object(c["y"])(i.title), 1),
              Ae,
              ye,
              Ce,
              Pe,
              Object(c["i"])("div", De, [
                Object(c["i"])(
                  o,
                  { class: "link", to: { name: "About" } },
                  {
                    default: Object(c["D"])(function () {
                      return [Le];
                    }),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    var Be = {
      name: "Choose-us",
      data: function () {
        return { title: "Company structure: " };
      },
    };
    n("ed6d");
    Be.render = Ne;
    var Te = Be,
      Ee = (n("fb6a"), { class: "our-products" }),
      Ue = { class: "container" },
      Se = { key: 0, class: "product-wrapper" },
      Ve = { key: 1, class: "no-connect" },
      Fe = Object(c["i"])("h1", null, "Loading...", -1);
    function Ye(e, t, n, a, i, r) {
      var o = Object(c["w"])("the-title"),
        s = Object(c["w"])("product-card");
      return (
        Object(c["r"])(),
        Object(c["e"])("section", Ee, [
          Object(c["i"])("div", Ue, [
            Object(c["i"])(o, { theme: i.theme, title: i.title }, null, 8, [
              "theme",
              "title",
            ]),
            i.productsHome.length
              ? (Object(c["r"])(),
                Object(c["e"])("div", Se, [
                  (Object(c["r"])(!0),
                  Object(c["e"])(
                    c["a"],
                    null,
                    Object(c["v"])(i.productsHome.slice(0, 4), function (e) {
                      return (
                        Object(c["r"])(),
                        Object(c["e"])(
                          s,
                          { key: e.id, product_data: e },
                          null,
                          8,
                          ["product_data"]
                        )
                      );
                    }),
                    128
                  )),
                ]))
              : (Object(c["r"])(), Object(c["e"])("div", Ve, [Fe])),
          ]),
        ])
      );
    }
    var Me = n("2909"),
      We = n("1da1"),
      Xe = (n("96cf"), n("592f")),
      Ge = n("7f15"),
      He = {
        name: "Our-products",
        components: { TheTitle: Xe["a"], ProductCard: Ge["a"] },
        data: function () {
          return {
            theme: "Our Products",
            title: "New products",
            productsHome: [],
          };
        },
        methods: {
          getProducts: function () {
            var e = this;
            return Object(We["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          S()(
                            "http://old.phoenixglobaltradings.com/products"
                          ).then(function (e) {
                            return e.data;
                          })
                        );
                      case 2:
                        (n = t.sent), (e.productsHome = Object(Me["a"])(n));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        mounted: function () {
          this.getProducts();
        },
      };
    n("9622");
    He.render = Ye;
    var Re = He,
      Ze = { class: "reviews" },
      qe = { class: "container" },
      Ie = Object(c["i"])("h2", null, "Our Services", -1),
      Ke = { class: "reviews-wrapper" },
      Je = { class: "image" },
      Qe = { class: "number" },
      ze = { class: "comment" };
    function _e(e, t, n, a, i, r) {
      return (
        Object(c["r"])(),
        Object(c["e"])("section", Ze, [
          Object(c["i"])("div", qe, [
            Ie,
            Object(c["i"])("div", Ke, [
              (Object(c["r"])(!0),
              Object(c["e"])(
                c["a"],
                null,
                Object(c["v"])(i.reviews, function (e) {
                  return (
                    Object(c["r"])(),
                    Object(c["e"])(
                      "div",
                      { class: "review-block", key: e.id },
                      [
                        Object(c["i"])("div", Je, [
                          Object(c["i"])("h1", Qe, Object(c["y"])(e.image), 1),
                        ]),
                        Object(c["i"])("div", ze, [
                          Object(c["i"])(
                            "p",
                            null,
                            Object(c["y"])(e.comment),
                            1
                          ),
                        ]),
                      ]
                    )
                  );
                }),
                128
              )),
            ]),
          ]),
        ])
      );
    }
    var $e = {
      name: "Reviews",
      data: function () {
        return {
          reviews: [
            {
              id: 1,
              image: "01",
              comment:
                "Finding the exact product or a very similar one on the market from our partner manufacturers.",
            },
            {
              id: 2,
              image: "02",
              comment:
                "Preparing all documentations including declaration during the transportation.  Product quality checking procedures prior the pick up and after delivery. ",
            },
            {
              id: 3,
              image: "03",
              comment:
                "Delivering goods to the instructed by our partner logistics companies. In case of return providing all the necessary services for free of cost ",
            },
          ],
        };
      },
    };
    n("33c1");
    $e.render = _e;
    var et = $e,
      tt = { class: "home-blog" },
      nt = { class: "container" },
      ct = { class: "blog-wrapper" },
      at = { class: "blog-btn" },
      it = Object(c["h"])("Show more");
    function rt(e, t, n, a, i, r) {
      var o = Object(c["w"])("the-title"),
        s = Object(c["w"])("blog-card"),
        u = Object(c["w"])("router-link");
      return (
        Object(c["r"])(),
        Object(c["e"])("section", tt, [
          Object(c["i"])("div", nt, [
            Object(c["i"])(o, { theme: i.theme, title: i.title }, null, 8, [
              "theme",
              "title",
            ]),
            Object(c["i"])("div", ct, [
              (Object(c["r"])(!0),
              Object(c["e"])(
                c["a"],
                null,
                Object(c["v"])(i.posts.slice(0, 3), function (e) {
                  return (
                    Object(c["r"])(),
                    Object(c["e"])(
                      s,
                      {
                        onClick: function (t) {
                          return r.goToBlogPost(e._id);
                        },
                        key: e._id,
                        post_data: e,
                      },
                      null,
                      8,
                      ["onClick", "post_data"]
                    )
                  );
                }),
                128
              )),
            ]),
            Object(c["i"])("div", at, [
              Object(c["i"])(
                u,
                { class: "link", to: { name: "Blog" } },
                {
                  default: Object(c["D"])(function () {
                    return [it];
                  }),
                  _: 1,
                }
              ),
            ]),
          ]),
        ])
      );
    }
    var ot = n("d242"),
      st = {
        name: "Home-blog",
        components: { TheTitle: Xe["a"], BlogCard: ot["a"] },
        data: function () {
          return { theme: "Blog", title: "Latest News", posts: [] };
        },
        methods: {
          goToBlogPost: function (e) {
            this.$router.push({ name: "Blog-post", params: { postId: e } });
          },
          getAllBlogs: function () {
            var e = this;
            return Object(We["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          S()("http://old.phoenixglobaltradings.com/Blog").then(
                            function (e) {
                              return e.data;
                            }
                          )
                        );
                      case 2:
                        (n = t.sent), (e.posts = n);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        },
        mounted: function () {},
      };
    n("8ca4");
    st.render = rt;
    var ut = st,
      lt = {
        name: "Home",
        components: {
          HomeVue: le,
          NewPartners: Oe,
          ChooseUs: Te,
          OurProducts: Re,
          Reviews: et,
          HomeBlog: ut,
        },
      };
    lt.render = K;
    var bt = lt,
      dt = [
        { path: "/", name: "Home", component: bt },
        {
          path: "/about",
          name: "About",
          component: function () {
            return n.e("chunk-2a9a6a02").then(n.bind(null, "f820"));
          },
        },
        {
          path: "/catalog",
          name: "Catalog",
          component: function () {
            return n.e("chunk-6b177f1a").then(n.bind(null, "247d"));
          },
        },
        {
          path: "/partners",
          name: "Partners",
          component: function () {
            return n.e("chunk-097b96ed").then(n.bind(null, "1a8c"));
          },
        },
        {
          path: "/blog",
          name: "Blog",
          component: function () {
            return n.e("chunk-aa63c264").then(n.bind(null, "fd3f"));
          },
        },
        {
          path: "/contact",
          name: "Contact",
          component: function () {
            return n.e("chunk-f42adfb2").then(n.bind(null, "b8fa"));
          },
        },
        {
          path: "/products/:category",
          name: "Products",
          component: function () {
            return n.e("chunk-25ea366c").then(n.bind(null, "e6dc"));
          },
        },
        {
          path: "/product/:productId",
          name: "Product-info",
          component: function () {
            return n.e("chunk-6489f293").then(n.bind(null, "d2f1"));
          },
        },
        {
          path: "/blog-post/:postId",
          name: "Blog-post",
          component: function () {
            return n.e("chunk-55a5f3a2").then(n.bind(null, "69f6"));
          },
        },
      ],
      ft = Object(I["a"])({
        scrollBehavior: function () {
          return { x: 0, y: 0 };
        },
        history: Object(I["b"])("/"),
        routes: dt,
      }),
      pt = ft,
      mt = n("5502"),
      gt = Object(mt["a"])({
        state: {},
        mutations: {},
        actions: {},
        getters: {},
      });
    n("3ed1");
    Object(c["d"])(q).use(gt).use(pt).mount("#app");
  },
  5805: function (e, t, n) {
    e.exports = n.p + "img/3.037aeba1.png";
  },
  "592f": function (e, t, n) {
    "use strict";
    var c = n("7a23"),
      a = { class: "section-title" };
    function i(e, t, n, i, r, o) {
      return (
        Object(c["r"])(),
        Object(c["e"])("div", a, [
          Object(c["i"])("h2", null, Object(c["y"])(n.title), 1),
        ])
      );
    }
    var r = {
      name: "The-title",
      props: {
        theme: {
          type: String,
          default: function () {
            return "";
          },
        },
        title: {
          type: String,
          default: function () {
            return "";
          },
        },
      },
    };
    n("6111");
    r.render = i;
    t["a"] = r;
  },
  "5ca1": function (e, t, n) {
    e.exports = n.p + "img/1.9e308e59.png";
  },
  "5f9d": function (e, t, n) {},
  6111: function (e, t, n) {
    "use strict";
    n("04d8");
  },
  "643d": function (e, t, n) {
    e.exports = n.p + "img/nav-logo.528561e2.png";
  },
  "66aa": function (e, t, n) {
    e.exports = n.p + "img/15.a47d955d.png";
  },
  "6a5d": function (e, t, n) {
    e.exports = n.p + "img/10.75687a22.png";
  },
  "6c70": function (e, t, n) {
    e.exports = n.p + "img/29.6f8f6edf.png";
  },
  "6d17": function (e, t, n) {
    e.exports = n.p + "img/20.6392b394.png";
  },
  "6fa8": function (e, t, n) {
    e.exports = n.p + "img/16.4456f150.png";
  },
  "7b2c": function (e, t, n) {
    "use strict";
    n("c13c");
  },
  "7d26": function (e, t, n) {
    e.exports = n.p + "img/5.f453140d.png";
  },
  "7f15": function (e, t, n) {
    "use strict";
    n("b0c0");
    var c = n("7a23"),
      a = { class: "product-card" },
      i = { class: "product-image" },
      r = { class: "product-info" },
      o = { title: "", class: "product-title" },
      s = { class: "product-link" },
      u = Object(c["h"])(" View Product ");
    function l(e, t, n, l, b, d) {
      var f = Object(c["w"])("router-link");
      return (
        Object(c["r"])(),
        Object(c["e"])("div", a, [
          Object(c["i"])("div", i, [
            Object(c["i"])(
              "img",
              {
                src: "http://old.phoenixglobaltradings.com/images/".concat(
                  n.product_data.imgs[0].img
                ),
                alt: n.product_data.imgs[0].img,
              },
              null,
              8,
              ["src", "alt"]
            ),
          ]),
          Object(c["i"])("div", r, [
            Object(c["i"])("h3", o, Object(c["y"])(n.product_data.name), 1),
            Object(c["i"])("div", s, [
              Object(c["i"])(
                f,
                {
                  class: "link",
                  to: {
                    name: "Product-info",
                    params: { productId: n.product_data._id },
                  },
                },
                {
                  default: Object(c["D"])(function () {
                    return [u];
                  }),
                  _: 1,
                },
                8,
                ["to"]
              ),
            ]),
          ]),
        ])
      );
    }
    var b = {
      name: "Product-card",
      props: { product_data: { type: Object, default: function () {} } },
    };
    n("d48b");
    b.render = l;
    t["a"] = b;
  },
  8057: function (e, t, n) {
    "use strict";
    n("b931");
  },
  "85e7": function (e, t, n) {},
  "8baf": function (e, t, n) {
    e.exports = n.p + "img/7.3fab9833.png";
  },
  "8bef": function (e, t, n) {
    e.exports = n.p + "img/footer-logo.528561e2.png";
  },
  "8ca4": function (e, t, n) {
    "use strict";
    n("b851");
  },
  "8e58": function (e, t, n) {
    e.exports = n.p + "img/27.0d207250.png";
  },
  "907c": function (e, t, n) {
    e.exports = n.p + "img/34.3914db67.png";
  },
  9174: function (e, t, n) {
    e.exports = n.p + "img/28.7ef227b9.png";
  },
  9622: function (e, t, n) {
    "use strict";
    n("05df");
  },
  "996d": function (e, t, n) {
    e.exports = n.p + "img/32.95ad8333.png";
  },
  "9b73": function (e, t, n) {},
  "9caf": function (e, t, n) {
    e.exports = n.p + "img/23.5865e6b1.png";
  },
  "9e01": function (e, t, n) {},
  ac27: function (e, t, n) {
    e.exports = n.p + "img/8.9c0b8604.png";
  },
  ad84: function (e, t, n) {},
  b06e: function (e, t, n) {
    e.exports = n.p + "img/26.f89b2d5c.png";
  },
  b371: function (e, t, n) {
    "use strict";
    n("85e7");
  },
  b434: function (e, t, n) {},
  b851: function (e, t, n) {},
  b931: function (e, t, n) {},
  ba8e: function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  bdde: function (e, t, n) {},
  c13c: function (e, t, n) {},
  d242: function (e, t, n) {
    "use strict";
    var c = n("7a23"),
      a = { class: "blog-card" },
      i = { class: "text" },
      r = { class: "content" };
    function o(e, t, n, o, s, u) {
      return (
        Object(c["r"])(),
        Object(c["e"])("div", a, [
          Object(c["i"])(
            "img",
            {
              src: "http://old.phoenixglobaltradings.com/images/".concat(
                n.post_data.img
              ),
              alt: "",
            },
            null,
            8,
            ["src"]
          ),
          Object(c["i"])("div", i, [
            Object(c["i"])("p", r, Object(c["y"])(n.post_data.title), 1),
          ]),
        ])
      );
    }
    var s = {
      name: "Blog-card",
      props: { post_data: { type: Object, default: function () {} } },
    };
    n("44ae");
    s.render = o;
    t["a"] = s;
  },
  d48b: function (e, t, n) {
    "use strict";
    n("179a");
  },
  d9ca: function (e, t, n) {
    e.exports = n.p + "img/12.e0da2ca4.png";
  },
  dd93: function (e, t, n) {
    e.exports = n.p + "img/17.ef79ff26.png";
  },
  de84: function (e, t, n) {
    e.exports = n.p + "img/25.5f822520.png";
  },
  e104: function (e, t, n) {},
  e4e8: function (e, t, n) {
    e.exports = n.p + "img/38.2bdd8ddd.png";
  },
  ed6d: function (e, t, n) {
    "use strict";
    n("5f9d");
  },
  eecd: function (e, t, n) {
    e.exports = n.p + "img/11.609261be.png";
  },
  f0e3: function (e, t, n) {
    e.exports = n.p + "img/21.b28d7fb6.png";
  },
  f4d8: function (e, t, n) {
    e.exports = n.p + "img/image-1.0b13d25a.jpg";
  },
  f73b: function (e, t, n) {
    e.exports = n.p + "img/39.12162539.png";
  },
  f8c7: function (e, t, n) {
    e.exports = n.p + "img/31.8b0a9bb1.png";
  },
  fe7b: function (e, t, n) {
    e.exports = n.p + "img/14.c400677d.png";
  },
});
//# sourceMappingURL=app.b6290732.js.map
