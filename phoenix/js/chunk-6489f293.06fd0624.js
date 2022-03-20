(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6489f293"],
  {
    "07d7": function (t, e, c) {
      "use strict";
      c("293e6");
    },
    "293e6": function (t, e, c) {},
    d2f1: function (t, e, c) {
      "use strict";
      c.r(e);
      c("b0c0");
      var a = c("7a23"),
        n = { class: "product" },
        i = { class: "container wrapper" },
        r = { class: "product-image-gallery" },
        o = { class: "main-image" },
        s = { class: "other-images" },
        u = { class: "product-info" },
        d = { class: "product-name" },
        m = { class: "subtitle" },
        l = { class: "description" },
        g = { class: "table" };
      function p(t, e, c, p, b, h) {
        var j = Object(a["w"])("TheTitle");
        return (
          Object(a["r"])(),
          Object(a["e"])("section", n, [
            Object(a["i"])(j, { theme: b.theme, title: b.title }, null, 8, [
              "theme",
              "title",
            ]),
            Object(a["i"])("div", i, [
              Object(a["i"])("div", r, [
                Object(a["i"])("div", o, [
                  Object(a["i"])(
                    "img",
                    { src: b.mainImage, alt: "Product image" },
                    null,
                    8,
                    ["src"]
                  ),
                ]),
                Object(a["i"])("div", s, [
                  (Object(a["r"])(!0),
                  Object(a["e"])(
                    a["a"],
                    null,
                    Object(a["v"])(b.product_data.imgs, function (t) {
                      return Object(a["E"])(
                        (Object(a["r"])(),
                        Object(a["e"])(
                          "img",
                          {
                            key: t,
                            src: "http://old.phoenixglobaltradings.com/images/".concat(
                              t.img
                            ),
                            onClick: function (e) {
                              return h.changeMainImage(t.img);
                            },
                            alt: "other-images",
                          },
                          null,
                          8,
                          ["src", "onClick"]
                        )),
                        [[a["B"], h.imageArrayLength]]
                      );
                    }),
                    128
                  )),
                ]),
              ]),
              Object(a["i"])("div", u, [
                Object(a["i"])("h2", d, Object(a["y"])(b.product_data.name), 1),
                Object(a["i"])(
                  "p",
                  m,
                  Object(a["y"])(b.product_data.subtitle),
                  1
                ),
                Object(a["i"])("p", l, Object(a["y"])(b.product_data.info), 1),
                Object(a["i"])("div", g, [
                  Object(a["i"])(
                    "div",
                    { innerHTML: b.product_data.table },
                    null,
                    8,
                    ["innerHTML"]
                  ),
                ]),
              ]),
            ]),
          ])
        );
      }
      var b = c("1da1"),
        h = (c("96cf"), c("592f")),
        j = c("bc3a"),
        O = c.n(j),
        f = {
          name: "Product",
          components: { TheTitle: h["a"] },
          data: function () {
            return {
              theme: "Main menu / Product ",
              title: "Product Info",
              mainImage: "",
              productId: this.$route.params.productId,
              product_data: {},
            };
          },
          computed: {
            imageArrayLength: function () {
              return this.product_data.imgs.length > 1;
            },
          },
          methods: {
            changeMainImage: function (t) {
              this.mainImage =
                "http://old.phoenixglobaltradings.com/images/".concat(t);
            },
            getProduct: function () {
              var t = this;
              return Object(b["a"])(
                regeneratorRuntime.mark(function e() {
                  var c;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            O()(
                              " http://old.phoenixglobaltradings.com/product/".concat(
                                t.productId
                              )
                            ).then(function (t) {
                              return t.data;
                            })
                          );
                        case 2:
                          (c = e.sent),
                            (t.product_data = c),
                            (t.mainImage =
                              "http://old.phoenixglobaltradings.com/images/".concat(
                                t.product_data.imgs[0].img
                              ));
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          mounted: function () {
            this.getProduct();
          },
        };
      c("07d7");
      f.render = p;
      e["default"] = f;
    },
  },
]);
//# sourceMappingURL=chunk-6489f293.06fd0624.js.map
