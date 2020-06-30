import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, u as query_selector_all, w as claim_space, n as append_dev, A as add_render_callback, B as create_in_transition, D as create_out_transition } from './client.26f58256.js';
import { f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut, A as Arrow } from './Arrow.a7233f23.js';

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
			attr_dev(div0, "class", "background-container-left svelte-84zv2q");
			add_location(div0, file$1, 68, 1, 1337);
			attr_dev(div1, "class", "background-container-right svelte-84zv2q");
			add_location(div1, file$1, 74, 1, 1553);
			attr_dev(div2, "class", "background svelte-84zv2q");
			add_location(div2, file$1, 67, 0, 1311);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjc3NzNmMjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgY29sdW1uLXdpZHRoOiA1MCU7XG4gIH1cblxuXHQuY29udGVudHMge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCByZXBlYXQoMTAsIDFmcikgMzJweDtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggcmVwZWF0KDgsIDFmcikgNDhweDtcblx0fVxuICBcbiAgLmJhY2tncm91bmQtY29udGFpbmVyLWxlZnQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMDU1MjI7XG5cdH1cblx0XG5cdC5iYWNrZ3JvdW5kLWNvbnRhaW5lci1yaWdodCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwREZEMTtcbiAgfVxuXG5cdGEge1xuXHRcdGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsIGN1cnNpdmU7XG5cdFx0Z3JpZC1jb2x1bW46IDI7XG5cdFx0Z3JpZC1yb3c6IDI7XG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHRcdHotaW5kZXg6IDI7XG5cdH1cblxuXG4gIC5wNS1jb250YWluZXItdG9wLWxlZnQge1xuXHRcdGdyaWQtY29sdW1uOiAzIC8gNztcblx0XHRncmlkLXJvdzogMiAvIDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIC5wNS1jb250YWluZXItdG9wLXJpZ2h0IHtcblx0XHRncmlkLWNvbHVtbjogOCAvIDEyO1xuXHRcdGdyaWQtcm93OiAyIC8gNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIH1cbiAgLnA1LWNvbnRhaW5lci1ib3R0b20tbGVmdCB7XG5cdFx0Z3JpZC1jb2x1bW46IDMgLyA3O1xuXHRcdGdyaWQtcm93OiA3IC8gZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cbiAgLnA1LWNvbnRhaW5lci1ib3R0b20tcmlnaHQge1xuXHRcdGdyaWQtY29sdW1uOiA4IC8gMTI7XG5cdFx0Z3JpZC1yb3c6IDcgLyBlbmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICB9XG5cdFxuXHRAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q29udGVudHMgUGFnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxuXHQ8ZGl2XHRcblx0XHRjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLWxlZnRcIlxuXHRcdGluOnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkZWxheTogMjAwMCwgZGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbi5CT1RUT019fVwiXG5cdFx0b3V0OnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLkJPVFRPTX19XCJcblx0PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLXJpZ2h0XCI+IFxuXHQ8L2Rpdj5cblxuPC9kaXY+XG48IS0tZGl2IGNsYXNzPVwiY29udGVudHNcIj5cblx0PGEgdHJhbnNpdGlvbjpzY2FsZT1cInt7ZHVyYXRpb246IDUwMCwgZGVsYXk6IDUwLCBvcGFjaXR5OiAwLjIsIHN0YXJ0OiAwLjEsIGVhc2luZzogcXVpbnRPdXR9fVwiIGhyZWY9XCIvXCIgPlxuXHRcdDxkaXYgIGNsYXNzPVwiYXJyb3dcIj5cblx0XHRcdDxBcnJvdyAgc2NhbGU9ezUuMH0gcm90YXRpb249e1wiMTgwZGVnXCJ9IC8+XG5cdFx0PC9kaXY+XG5cdDwvYT5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci10b3AtbGVmdFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci10b3AtcmlnaHRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItYm90dG9tLWxlZnRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItYm90dG9tLXJpZ2h0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuPC9kaXYtLT5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzRXNCLFFBQVEsRUFBRSxJQUFJO0tBQUUsS0FBSyxFQUFFLElBQUk7S0FBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07Ozs7Ozs7Ozs7OztJQUM1RCxRQUFRLEVBQUUsSUFBSTtJQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
