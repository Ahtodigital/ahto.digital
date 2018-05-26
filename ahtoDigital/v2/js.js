function(t, e, i) {
    "use strict";
    var n = i(23)
      , a = i.n(n)
      , s = i(9)
      , r = i.n(s)
      , o = i(2)
      , c = i.n(o)
      , l = i(37)
      , u = i.n(l)
      , d = i(106)
      , h = i.n(d)
      , f = i(6)
      , v = i(5);
    e.a = {
        name: "Pointer",
        props: ["isCursorReady"],
        data: function() {
            return {
                buttons: null,
                mouse: {
                    x: 0,
                    y: 0
                },
                interMouse: {
                    x: 0,
                    y: 0
                },
                norm: {
                    x: 0,
                    y: 0
                },
                magnetism: 5,
                attraction: 30,
                isLerp: !0,
                lerp: v.d,
                roundDec: v.g,
                isMobile: v.c,
                oldCtx: null,
                newCtx: null,
                visible: !0
            }
        },
        computed: r()({}, Object(f.b)({
            stateCtx: "getCtxButtons"
        })),
        watch: {
            stateCtx: function(t, e) {
                if (null !== e && !this.isMobile()) {
                    var i = a()(e.querySelectorAll("[data-mouse]"));
                    this.removeButtonsEvents(i)
                }
                if (!this.isMobile()) {
                    var n = a()(t.querySelectorAll("[data-mouse]"));
                    this.addButtonsEvents(n)
                }
            }
        },
        mounted: function() {
            this.isMobile() || (this.eventer = new h.a(!0)),
            this.isMobile() || (this.buttons = a()(document.querySelectorAll("[data-mouse]"))),
            this.isMobile() || this.init()
        },
        methods: {
            init: function() {
                this.bindEvents(),
                this.engine = u()(this.renderer.bind(this)).start()
            },
            mousePosition: function(t) {
                this.mouse = {
                    x: t.clientX,
                    y: t.clientY
                }
            },
            bindEvents: function() {
                var t = this;
                window.addEventListener("mousemove", this.mousePosition.bind(this)),
                this.addButtonsEvents(this.buttons),
                (window.chrome && window.chrome.webstore && !Object(v.c)() || window.opr && window.opr.addons && !Object(v.c)()) && navigator.getBattery().then(function(e) {
                    e.addEventListener("chargingchange", function(e) {
                        var i = !0;
                        e.target.charging || (i = !1),
                        t.animateBattery(t.$el, i)
                    })
                })
            },
            addButtonsEvents: function(t) {
                var e = this;
                t.forEach(function(t) {
                    var i = t.getAttribute("data-mouse-attractionState")
                      , n = t.getAttribute("data-mouse-attractionVal");
                    e.handleMouseMove = e.setButtonPosition.bind(e),
                    "active" !== i && !0 !== i || e.eventer.bindEvent("mousemove", t, function(i) {
                        return e.handleMouseMove(i, t, n)
                    }),
                    e.eventer.bindEvent("mouseenter", t, e.setHoverMouse.bind(e, t)),
                    e.eventer.bindEvent("mouseleave", t, e.resetButton.bind(e, t, i))
                })
            },
            removeButtonsEvents: function(t) {
                var e = this;
                t.forEach(function(t) {
                    return e.eventer.clearAll(t)
                })
            },
            renderer: function() {
                this.setPos()
            },
            setPos: function() {
                var t = Object(v.d)(this.mouse.x, this.interMouse.x, .75)
                  , e = Object(v.d)(this.mouse.y, this.interMouse.y, .75);
                this.interMouse.x = this.isLerp ? t - this.norm.x / this.magnetism : this.mouse.x,
                this.interMouse.y = this.isLerp ? e - this.norm.y / this.magnetism : this.mouse.y,
                c.a.set(this.$el, {
                    x: this.interMouse.x,
                    y: this.interMouse.y
                })
            },
            setHoverMouse: function(t) {
                this.$el.setAttribute("data-hover", t.getAttribute("data-hover-type"))
            },
            setButtonPosition: function(t, e, i) {
                this.dim = {
                    x: e.clientWidth / 2,
                    y: e.clientHeight / 2
                },
                this.norm = {
                    x: Object(v.g)((t.offsetX - this.dim.x) / this.dim.x) * i,
                    y: Object(v.g)((t.offsetY - this.dim.y) / this.dim.y) * i
                },
                this.animateButton(e)
            },
            animateButton: function(t) {
                c.a.to(t, .5, {
                    xPercent: this.norm.x,
                    yPercent: this.norm.y
                })
            },
            animateBattery: function(t, e) {
                var i = 3;
                e || (i = .2),
                c.a.fromTo(t, 3, {
                    scale: 1
                }, {
                    scale: i,
                    ease: c.a.Bounce.easeOut,
                    onComplete: function() {
                        c.a.to(t, 1, {
                            scale: 1,
                            clearPros: "all",
                            ease: c.a.Bounce.easeOut
                        })
                    }
                })
            },
            resetButton: function(t, e) {
                this.$el.setAttribute("data-hover", ""),
                ("active" === e || e) && (this.norm = {
                    x: 0,
                    y: 0
                },
                this.animateButton(t))
            }
        }
    }
}