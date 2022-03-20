(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-25ea366c"],
  {
    "293e": function (t, e, r) {},
    "4de4": function (t, e, r) {
      "use strict";
      var c = r("23e7"),
        n = r("b727").filter,
        a = r("1dde"),
        o = a("filter");
      c(
        { target: "Array", proto: !0, forced: !o },
        {
          filter: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    9867: function (t, e, r) {
      "use strict";
      r("293e");
    },
    e6dc: function (t, e, r) {
      "use strict";
      r.r(e);
      var c = r("7a23"),
        n = { class: "products container" },
        a = { key: 0, class: "products-wrapper" },
        o = { key: 1, class: "no-connect" },
        u = Object(c["i"])("h1", null, "Loading...", -1);
      function i(t, e, r, i, d, s) {
        var l = Object(c["w"])("TheTitle"),
          p = Object(c["w"])("ProductCard");
        return (
          Object(c["r"])(),
          Object(c["e"])("section", n, [
            Object(c["i"])(
              l,
              { theme: d.theme, title: d.categoryName || d.title },
              null,
              8,
              ["theme", "title"]
            ),
            d.product_data.length
              ? (Object(c["r"])(),
                Object(c["e"])("div", a, [
                  (Object(c["r"])(!0),
                  Object(c["e"])(
                    c["a"],
                    null,
                    Object(c["v"])(d.product_data, function (t) {
                      return (
                        Object(c["r"])(),
                        Object(c["e"])("div", { class: "cards", key: t._id }, [
                          Object(c["i"])(p, { product_data: t }, null, 8, [
                            "product_data",
                          ]),
                        ])
                      );
                    }),
                    128
                  )),
                ]))
              : (Object(c["r"])(), Object(c["e"])("div", o, [u])),
          ])
        );
      }
      var d = r("1da1"),
        s = (r("96cf"), r("4de4"), r("592f")),
        l = r("7f15"),
        p = r("bc3a"),
        f = r.n(p),
        h = {
          name: "Products",
          components: { TheTitle: s["a"], ProductCard: l["a"] },
          data: function () {
            return {
              theme: "Main menu / Products",
              title: "Products",
              category: this.$route.params.category,
              product_data: [],
              categoryName: null,
            };
          },
          methods: {
            getProducts: function () {
              var t = this;
              return Object(d["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, c;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            f()(
                              "http://old.phoenixglobaltradings.com/products"
                            ).then(function (t) {
                              return t.data;
                            })
                          );
                        case 2:
                          return (
                            (r = e.sent),
                            (e.next = 5),
                            f()(
                              "http://old.phoenixglobaltradings.com/category/".concat(
                                t.category
                              )
                            ).then(function (t) {
                              return t.data;
                            })
                          );
                        case 5:
                          return (c = e.sent), (e.next = 8), c.title;
                        case 8:
                          (t.categoryName = e.sent),
                            (t.product_data = r.filter(function (e) {
                              return e.categoryId == t.category;
                            }));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          mounted: function () {
            this.getProducts();
          },
        };
      r("9867");
      h.render = i;
      e["default"] = h;
    },
  },
]);
//# sourceMappingURL=chunk-25ea366c.e48c67b3.js.map
