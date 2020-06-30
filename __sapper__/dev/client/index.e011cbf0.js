import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, r as create_component, u as query_selector_all, w as claim_space, y as claim_component, n as append_dev, z as mount_component, A as add_render_callback, B as create_in_transition, C as transition_in, J as create_bidirectional_transition, D as create_out_transition, E as transition_out, F as destroy_component } from './client.b43bcc3f.js';
import { A as Arrow, f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut } from './Arrow.0172d9b0.js';

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
	let div7;
	let div0;
	let div0_intro;
	let div0_outro;
	let t1;
	let a;
	let div1;
	let a_transition;
	let t2;
	let div2;
	let t3;
	let div3;
	let t4;
	let div4;
	let t5;
	let div5;
	let t6;
	let div6;
	let current;

	const arrow = new Arrow({
			props: { scale: 5, rotation: "180deg" },
			$$inline: true
		});

	const p5square0 = new P5Square({ $$inline: true });
	const p5square1 = new P5Square({ $$inline: true });
	const p5square2 = new P5Square({ $$inline: true });
	const p5square3 = new P5Square({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div7 = element("div");
			div0 = element("div");
			t1 = space();
			a = element("a");
			div1 = element("div");
			create_component(arrow.$$.fragment);
			t2 = space();
			div2 = element("div");
			create_component(p5square0.$$.fragment);
			t3 = space();
			div3 = element("div");
			create_component(p5square1.$$.fragment);
			t4 = space();
			div4 = element("div");
			create_component(p5square2.$$.fragment);
			t5 = space();
			div5 = element("div");
			create_component(p5square3.$$.fragment);
			t6 = space();
			div6 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g09skn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div7 = claim_element(nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div0 = claim_element(div7_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div7_nodes);
			a = claim_element(div7_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(arrow.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(div7_nodes);
			div2 = claim_element(div7_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(p5square0.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div7_nodes);
			div3 = claim_element(div7_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(p5square1.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div7_nodes);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(p5square2.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div7_nodes);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(p5square3.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t6 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contents Page";
			attr_dev(div0, "class", "background-container-left svelte-1f8jy6y");
			add_location(div0, file$1, 71, 1, 1444);
			attr_dev(div1, "class", "arrow");
			add_location(div1, file$1, 78, 2, 1768);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "svelte-1f8jy6y");
			add_location(a, file$1, 77, 1, 1660);
			attr_dev(div2, "class", "p5-container-top-left svelte-1f8jy6y");
			add_location(div2, file$1, 82, 2, 1852);
			attr_dev(div3, "class", "p5-container-top-right svelte-1f8jy6y");
			add_location(div3, file$1, 85, 2, 1916);
			attr_dev(div4, "class", "p5-container-bottom-left svelte-1f8jy6y");
			add_location(div4, file$1, 88, 2, 1981);
			attr_dev(div5, "class", "p5-container-bottom-right svelte-1f8jy6y");
			add_location(div5, file$1, 91, 2, 2048);
			attr_dev(div6, "class", "background-container-right svelte-1f8jy6y");
			add_location(div6, file$1, 94, 1, 2115);
			attr_dev(div7, "class", "contents svelte-1f8jy6y");
			add_location(div7, file$1, 70, 0, 1420);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div7, anchor);
			append_dev(div7, div0);
			append_dev(div7, t1);
			append_dev(div7, a);
			append_dev(a, div1);
			mount_component(arrow, div1, null);
			append_dev(div7, t2);
			append_dev(div7, div2);
			mount_component(p5square0, div2, null);
			append_dev(div7, t3);
			append_dev(div7, div3);
			mount_component(p5square1, div3, null);
			append_dev(div7, t4);
			append_dev(div7, div4);
			mount_component(p5square2, div4, null);
			append_dev(div7, t5);
			append_dev(div7, div5);
			mount_component(p5square3, div5, null);
			append_dev(div7, t6);
			append_dev(div7, div6);
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

			transition_in(arrow.$$.fragment, local);

			add_render_callback(() => {
				if (!a_transition) a_transition = create_bidirectional_transition(
					a,
					scale,
					{
						duration: 500,
						delay: 50,
						opacity: 0.2,
						start: 0.1,
						easing: quintOut
					},
					true
				);

				a_transition.run(1);
			});

			transition_in(p5square0.$$.fragment, local);
			transition_in(p5square1.$$.fragment, local);
			transition_in(p5square2.$$.fragment, local);
			transition_in(p5square3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (div0_intro) div0_intro.invalidate();

			div0_outro = create_out_transition(div0, slideInBounce, {
				duration: 2000,
				direction: slideDirection.BOTTOM
			});

			transition_out(arrow.$$.fragment, local);

			if (!a_transition) a_transition = create_bidirectional_transition(
				a,
				scale,
				{
					duration: 500,
					delay: 50,
					opacity: 0.2,
					start: 0.1,
					easing: quintOut
				},
				false
			);

			a_transition.run(0);
			transition_out(p5square0.$$.fragment, local);
			transition_out(p5square1.$$.fragment, local);
			transition_out(p5square2.$$.fragment, local);
			transition_out(p5square3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div7);
			if (detaching && div0_outro) div0_outro.end();
			destroy_component(arrow);
			if (detaching && a_transition) a_transition.end();
			destroy_component(p5square0);
			destroy_component(p5square1);
			destroy_component(p5square2);
			destroy_component(p5square3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTAxMWNiZjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5jb250ZW50cyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IDFmciAxZnIgMzJweDtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggcmVwZWF0KDgsIDFmcikgNDhweDtcblx0fVxuXG5cdGEge1xuXHRcdGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsIGN1cnNpdmU7XG5cdFx0Z3JpZC1jb2x1bW46IDI7XG5cdFx0Z3JpZC1yb3c6IDI7XG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHRcdHotaW5kZXg6IDI7XG5cdH1cblxuXHQuYmFja2dyb3VuZC1jb250YWluZXItbGVmdCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwNTUyMjtcblx0XHRncmlkLWNvbHVtbjogMSAvIDc7XG5cdFx0Z3JpZC1yb3c6IDEgLyBjb2x1bW4tZW5kO1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoXCIxODBkZWdcIilcblx0fVxuXHRcblx0LmJhY2tncm91bmQtY29udGFpbmVyLXJpZ2h0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBERkQxO1xuXHRcdGdyaWQtcm93OiAxIC8gZW5kO1xuXHRcdGdyaWQtY29sdW1uOiAxIC8gZW5kO1xuXHRcdHotaW5kZXg6IDA7XG4gIH1cblxuICAucDUtY29udGFpbmVyLXRvcC1sZWZ0IHtcblx0XHRncmlkLWNvbHVtbjogMyAvIDc7XG5cdFx0Z3JpZC1yb3c6IDIgLyA2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICAucDUtY29udGFpbmVyLXRvcC1yaWdodCB7XG5cdFx0Z3JpZC1jb2x1bW46IDggLyAxMjtcblx0XHRncmlkLXJvdzogMiAvIDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLWxlZnQge1xuXHRcdGdyaWQtY29sdW1uOiAzIC8gNztcblx0XHRncmlkLXJvdzogNyAvIGVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcblx0XHRncmlkLWNvbHVtbjogOCAvIDEyO1xuXHRcdGdyaWQtcm93OiA3IC8gZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuXHRcblx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkNvbnRlbnRzIFBhZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImNvbnRlbnRzXCI+XG5cdDxkaXZcdFxuXHRcdGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXItbGVmdFwiXG5cdFx0aW46c2xpZGVJbkJvdW5jZT1cInt7ZHVyYXRpb246IDIwMDAsIGRlbGF5OiAyMDAwLCBkaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLkJPVFRPTX19XCJcblx0XHRvdXQ6c2xpZGVJbkJvdW5jZT1cInt7ZHVyYXRpb246IDIwMDAsIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24uQk9UVE9NfX1cIlxuXHQ+XG5cdDwvZGl2PlxuXHQ8YSB0cmFuc2l0aW9uOnNjYWxlPVwie3tkdXJhdGlvbjogNTAwLCBkZWxheTogNTAsIG9wYWNpdHk6IDAuMiwgc3RhcnQ6IDAuMSwgZWFzaW5nOiBxdWludE91dH19XCIgaHJlZj1cIi9cIiA+XG5cdFx0PGRpdiAgY2xhc3M9XCJhcnJvd1wiPlxuXHRcdFx0PEFycm93ICBzY2FsZT17NS4wfSByb3RhdGlvbj17XCIxODBkZWdcIn0gLz5cblx0XHQ8L2Rpdj5cblx0PC9hPlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLXRvcC1sZWZ0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLXRvcC1yaWdodFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci1ib3R0b20tbGVmdFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci1ib3R0b20tcmlnaHRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lci1yaWdodFwiPiBcblx0PC9kaXY+XG48L2Rpdj5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkErRWtCLENBQUcsWUFBWSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FObkIsUUFBUSxFQUFFLElBQUk7S0FBRSxLQUFLLEVBQUUsSUFBSTtLQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7OztNQUkzRCxRQUFRLEVBQUUsR0FBRztNQUFFLEtBQUssRUFBRSxFQUFFO01BQUUsT0FBTyxFQUFFLEdBQUc7TUFBRSxLQUFLLEVBQUUsR0FBRztNQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFIckUsUUFBUSxFQUFFLElBQUk7SUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07Ozs7Ozs7OztLQUcvQyxRQUFRLEVBQUUsR0FBRztLQUFFLEtBQUssRUFBRSxFQUFFO0tBQUUsT0FBTyxFQUFFLEdBQUc7S0FBRSxLQUFLLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
