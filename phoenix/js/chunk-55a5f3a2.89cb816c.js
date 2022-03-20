(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-55a5f3a2"],
  {
    "25aa": function (t, e, n) {},
    "571f": function (t, e, n) {
      "use strict";
      n("25aa");
    },
    "69f6": function (t, e, n) {
      "use strict";
      n.r(e);
      var c = n("7a23"),
        s = { class: "blog-post-item" },
        i = { class: "container" },
        a = { class: "wrapper" },
        o = { class: "image-block" },
        r = { class: "text-block" },
        l = { class: "title" },
        p = { class: "text-content" };
      function u(t, e, n, u, b, h) {
        var m = Object(c["w"])("TheTitle");
        return (
          Object(c["r"])(),
          Object(c["e"])("section", s, [
            Object(c["i"])("div", i, [
              Object(c["i"])(
                m,
                { theme: b.theme, title: b.post.title || b.title },
                null,
                8,
                ["theme", "title"]
              ),
              Object(c["i"])("div", a, [
                Object(c["i"])("div", o, [
                  Object(c["i"])(
                    "img",
                    {
                      src: "http://old.phoenixglobaltradings.com/images/".concat(
                        this.post.img
                      ),
                      alt: b.post.title,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  ),
                ]),
                Object(c["i"])("div", r, [
                  Object(c["i"])("h3", l, Object(c["y"])(b.post.title), 1),
                  Object(c["i"])("p", p, Object(c["y"])(b.post.text), 1),
                ]),
              ]),
            ]),
          ])
        );
      }
      var b = n("1da1"),
        h = (n("96cf"), n("592f")),
        m = n("bc3a"),
        d = n.n(m),
        g = {
          name: "Blog",
          components: { TheTitle: h["a"] },
          data: function () {
            return {
              theme: "Main menu / Blog",
              title: "Blog-post",
              postId: this.$route.params.postId,
              post: {},
            };
          },
          methods: {
            getBlog: function () {
              var t = this;
              return Object(b["a"])(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            d()(
                              "http://old.phoenixglobaltradings.com/blog/".concat(
                                t.postId
                              )
                            ).then(function (t) {
                              return t.data;
                            })
                          );
                        case 2:
                          (n = e.sent), (t.post = n);
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
            this.getBlog();
          },
        };
      n("571f");
      g.render = u;
      e["default"] = g;
    },
  },
]);
//# sourceMappingURL=chunk-55a5f3a2.89cb816c.js.map
