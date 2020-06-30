import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, u as query_selector_all, w as claim_space, n as append_dev, A as add_render_callback, B as create_in_transition, D as create_out_transition } from './client.c6da340d.js';
import { f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut, A as Arrow } from './Arrow.e95a60ae.js';

/* src/components/P5Square.svelte generated by Svelte v3.20.1 */

const file = "src/components/P5Square.svelte";

function create_fragment(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "container");
			add_location(div, file, 7, 0, 39);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<P5Square> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("P5Square", $$slots, []);
	return [];
}

class P5Square extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "P5Square",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/contents/index.svelte generated by Svelte v3.20.1 */
const file$1 = "src/routes/contents/index.svelte";

function create_fragment$1(ctx) {
	let t0;
	let div2;
	let div0;
	let div0_intro;
	let div0_outro;
	let t1;
	let div1;
	let current;

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div0 = element("div");
			t1 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g09skn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contents Page";
			attr_dev(div0, "class", "background-container-left svelte-13d3rjy");
			add_location(div0, file$1, 70, 1, 1402);
			attr_dev(div1, "class", "background-container-right svelte-13d3rjy");
			add_location(div1, file$1, 76, 1, 1618);
			attr_dev(div2, "class", "background svelte-13d3rjy");
			add_location(div2, file$1, 69, 0, 1376);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (div0_outro) div0_outro.end(1);

				if (!div0_intro) div0_intro = create_in_transition(div0, slideInBounce, {
					duration: 2000,
					delay: 2000,
					direction: slideDirection.BOTTOM
				});

				div0_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div0_intro) div0_intro.invalidate();

			div0_outro = create_out_transition(div0, slideInBounce, {
				duration: 2000,
				direction: slideDirection.BOTTOM
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			if (detaching && div0_outro) div0_outro.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contents> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Contents", $$slots, []);

	$$self.$capture_state = () => ({
		fade,
		fly,
		scale,
		send,
		receive,
		slideInBounce,
		slideDirection,
		quintOut,
		Arrow,
		P5Square
	});

	return [];
}

class Contents extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contents",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Contents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjViNTJjMDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDE1MHB4O1xuICAgIC1tb3otY29sdW1uLXdpZHRoOiAxNTBweDtcbiAgICBjb2x1bW4td2lkdGg6IDE1MHB4O1xuICB9XG5cblx0LmNvbnRlbnRzIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggcmVwZWF0KDEwLCAxZnIpIDMycHg7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IHJlcGVhdCg4LCAxZnIpIDQ4cHg7XG5cdH1cbiAgXG4gIC5iYWNrZ3JvdW5kLWNvbnRhaW5lci1sZWZ0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1NTIyO1xuXHR9XG5cdFxuXHQuYmFja2dyb3VuZC1jb250YWluZXItcmlnaHQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMERGRDE7XG4gIH1cblxuXHRhIHtcblx0XHRmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xuXHRcdGdyaWQtY29sdW1uOiAyO1xuXHRcdGdyaWQtcm93OiAyO1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0XHR6LWluZGV4OiAyO1xuXHR9XG5cblxuICAucDUtY29udGFpbmVyLXRvcC1sZWZ0IHtcblx0XHRncmlkLWNvbHVtbjogMyAvIDc7XG5cdFx0Z3JpZC1yb3c6IDIgLyA2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICAucDUtY29udGFpbmVyLXRvcC1yaWdodCB7XG5cdFx0Z3JpZC1jb2x1bW46IDggLyAxMjtcblx0XHRncmlkLXJvdzogMiAvIDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLWxlZnQge1xuXHRcdGdyaWQtY29sdW1uOiAzIC8gNztcblx0XHRncmlkLXJvdzogNyAvIGVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcblx0XHRncmlkLWNvbHVtbjogOCAvIDEyO1xuXHRcdGdyaWQtcm93OiA3IC8gZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuXHRcblx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkNvbnRlbnRzIFBhZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cblx0PGRpdlx0XG5cdFx0Y2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lci1sZWZ0XCJcblx0XHRpbjpzbGlkZUluQm91bmNlPVwie3tkdXJhdGlvbjogMjAwMCwgZGVsYXk6IDIwMDAsIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24uQk9UVE9NfX1cIlxuXHRcdG91dDpzbGlkZUluQm91bmNlPVwie3tkdXJhdGlvbjogMjAwMCwgZGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbi5CT1RUT019fVwiXG5cdD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lci1yaWdodFwiPiBcblx0PC9kaXY+XG5cbjwvZGl2PlxuPCEtLWRpdiBjbGFzcz1cImNvbnRlbnRzXCI+XG5cdDxhIHRyYW5zaXRpb246c2NhbGU9XCJ7e2R1cmF0aW9uOiA1MDAsIGRlbGF5OiA1MCwgb3BhY2l0eTogMC4yLCBzdGFydDogMC4xLCBlYXNpbmc6IHF1aW50T3V0fX1cIiBocmVmPVwiL1wiID5cblx0XHQ8ZGl2ICBjbGFzcz1cImFycm93XCI+XG5cdFx0XHQ8QXJyb3cgIHNjYWxlPXs1LjB9IHJvdGF0aW9uPXtcIjE4MGRlZ1wifSAvPlxuXHRcdDwvZGl2PlxuXHQ8L2E+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItdG9wLWxlZnRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItdG9wLXJpZ2h0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLWJvdHRvbS1sZWZ0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLWJvdHRvbS1yaWdodFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbjwvZGl2LS0+XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0VzQixRQUFRLEVBQUUsSUFBSTtLQUFFLEtBQUssRUFBRSxJQUFJO0tBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7SUFDNUQsUUFBUSxFQUFFLElBQUk7SUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
