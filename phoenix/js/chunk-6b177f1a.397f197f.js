(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6b177f1a"],
  {
    "247d": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("7a23"),
        c = { class: "catalogs container" },
        r = { class: "catalog-wrapper" },
        i = { class: "name" },
        o = { key: 1, class: "no-connect" },
        s = Object(n["i"])("h1", null, "Loading...", -1);
      function u(t, e, a, u, l, b) {
        var d = Object(n["w"])("TheTitle"),
          g = Object(n["w"])("router-link");
        return (
          Object(n["r"])(),
          Object(n["e"])("section", c, [
            Object(n["i"])(d, { theme: l.theme, title: l.title }, null, 8, [
              "theme",
              "title",
            ]),
            Object(n["i"])("div", r, [
              l.catalogData.length
                ? (Object(n["r"])(!0),
                  Object(n["e"])(
                    n["a"],
                    { key: 0 },
                    Object(n["v"])(l.catalogData, function (t) {
                      return (
                        Object(n["r"])(),
                        Object(n["e"])(
                          "div",
                          { class: "catalog-card", key: t._id },
                          [
                            Object(n["i"])(
                              g,
                              {
                                to: {
                                  name: "Products",
                                  params: { category: t._id },
                                },
                                class: "link",
                              },
                              {
                                default: Object(n["D"])(function () {
                                  return [
                                    Object(n["i"])(
                                      "h2",
                                      i,
                                      Object(n["y"])(t.title),
                                      1
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1032,
                              ["to"]
                            ),
                          ]
                        )
                      );
                    }),
                    128
                  ))
                : (Object(n["r"])(), Object(n["e"])("div", o, [s])),
            ]),
          ])
        );
      }
      var l = a("1da1"),
        b = (a("96cf"), a("592f")),
        d = a("bc3a"),
        g = a.n(d),
        h = {
          name: "Catalog",
          components: { TheTitle: b["a"] },
          data: function () {
            return {
              theme: "Main menu / Catalog",
              title: "Product catalog",
              catalogData: [],
            };
          },
          methods: {
            getCategories: function () {
              var t = this;
              return Object(l["a"])(
                regeneratorRuntime.mark(function e() {
                  var a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            g()(
                              "http://old.phoenixglobaltradings.com/categories"
                            ).then(function (t) {
                              return t.data;
                            })
                          );
                        case 2:
                          (a = e.sent), (t.catalogData = a);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          mounted: function () {
            this.getCategories();
          },
        };
      a("5905");
      h.render = u;
      e["default"] = h;
    },
    5905: function (t, e, a) {
      "use strict";
      a("a24e");
    },
    a24e: function (t, e, a) {},
  },
]);
//# sourceMappingURL=chunk-6b177f1a.397f197f.js.map
