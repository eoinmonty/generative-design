import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, t as text, r as create_component, u as query_selector_all, w as claim_space, x as claim_text, y as claim_component, n as append_dev, z as mount_component, A as add_render_callback, B as create_in_transition, C as transition_in, J as create_bidirectional_transition, D as create_out_transition, E as transition_out, F as destroy_component } from './client.9a6ffd51.js';
import { A as Arrow, f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut } from './Arrow.2ec6bf3b.js';

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
	let t1;
	let div0_intro;
	let div0_outro;
	let t2;
	let div1;
	let t3;
	let div8;
	let a;
	let div3;
	let a_transition;
	let t4;
	let div4;
	let t5;
	let div5;
	let t6;
	let div6;
	let t7;
	let div7;
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
			div2 = element("div");
			div0 = element("div");
			t1 = text("test");
			t2 = space();
			div1 = element("div");
			t3 = space();
			div8 = element("div");
			a = element("a");
			div3 = element("div");
			create_component(arrow.$$.fragment);
			t4 = space();
			div4 = element("div");
			create_component(p5square0.$$.fragment);
			t5 = space();
			div5 = element("div");
			create_component(p5square1.$$.fragment);
			t6 = space();
			div6 = element("div");
			create_component(p5square2.$$.fragment);
			t7 = space();
			div7 = element("div");
			create_component(p5square3.$$.fragment);
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
			t1 = claim_text(div0_nodes, "test");
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			a = claim_element(div8_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div3 = claim_element(a_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(arrow.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t4 = claim_space(div8_nodes);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(p5square0.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div8_nodes);
			div5 = claim_element(div8_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(p5square1.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t6 = claim_space(div8_nodes);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(p5square2.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			t7 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			claim_component(p5square3.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contents Page";
			attr_dev(div0, "class", "background-container-left svelte-147wkf");
			add_location(div0, file$1, 73, 1, 1437);
			attr_dev(div1, "class", "background-container-right svelte-147wkf");
			add_location(div1, file$1, 80, 1, 1660);
			attr_dev(div2, "class", "background svelte-147wkf");
			add_location(div2, file$1, 72, 0, 1411);
			attr_dev(div3, "class", "arrow");
			add_location(div3, file$1, 86, 2, 1850);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "svelte-147wkf");
			add_location(a, file$1, 85, 1, 1742);
			attr_dev(div4, "class", "p5-container-top-left svelte-147wkf");
			add_location(div4, file$1, 90, 2, 1934);
			attr_dev(div5, "class", "p5-container-top-right svelte-147wkf");
			add_location(div5, file$1, 93, 2, 1998);
			attr_dev(div6, "class", "p5-container-bottom-left svelte-147wkf");
			add_location(div6, file$1, 96, 2, 2063);
			attr_dev(div7, "class", "p5-container-bottom-right svelte-147wkf");
			add_location(div7, file$1, 99, 2, 2130);
			attr_dev(div8, "class", "contents svelte-147wkf");
			add_location(div8, file$1, 84, 0, 1718);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t1);
			append_dev(div2, t2);
			append_dev(div2, div1);
			insert_dev(target, t3, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, a);
			append_dev(a, div3);
			mount_component(arrow, div3, null);
			append_dev(div8, t4);
			append_dev(div8, div4);
			mount_component(p5square0, div4, null);
			append_dev(div8, t5);
			append_dev(div8, div5);
			mount_component(p5square1, div5, null);
			append_dev(div8, t6);
			append_dev(div8, div6);
			mount_component(p5square2, div6, null);
			append_dev(div8, t7);
			append_dev(div8, div7);
			mount_component(p5square3, div7, null);
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
			if (detaching) detach_dev(div2);
			if (detaching && div0_outro) div0_outro.end();
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div8);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjNkZTllZGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgLXdlYmtpdC1jb2x1bW4td2lkdGg6IDE1MHB4O1xuICAgIC1tb3otY29sdW1uLXdpZHRoOiAxNTBweDtcbiAgICBjb2x1bW4td2lkdGg6IDUwJTtcbiAgICBjb2x1bW4tZ2FwOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMERGRDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5iYWNrZ3JvdW5kLWNvbnRhaW5lci1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1NTIyO1xuICAgIGhlaWdodDogMTAwJTtcblx0fVxuXHRcblx0LmJhY2tncm91bmQtY29udGFpbmVyLXJpZ2h0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBERkQxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250ZW50cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCAxZnIpO1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNDhweCByZXBlYXQoOCwgMWZyKSA0OHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblx0fVxuICBcblxuXHRhIHtcblx0XHRmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xuXHRcdGdyaWQtY29sdW1uOiAyO1xuXHRcdGdyaWQtcm93OiAyO1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0XHR6LWluZGV4OiAyO1xuXHR9XG5cblxuICAucDUtY29udGFpbmVyLXRvcC1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgLnA1LWNvbnRhaW5lci10b3AtcmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxuICAucDUtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gIH1cblx0XG5cdEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Db250ZW50cyBQYWdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+XG5cdDxkaXZcdFxuXHRcdGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXItbGVmdFwiXG5cdFx0aW46c2xpZGVJbkJvdW5jZT1cInt7ZHVyYXRpb246IDIwMDAsIGRlbGF5OiAyMDAwLCBkaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLkJPVFRPTX19XCJcblx0XHRvdXQ6c2xpZGVJbkJvdW5jZT1cInt7ZHVyYXRpb246IDIwMDAsIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24uQk9UVE9NfX1cIlxuXHQ+XG4gIHRlc3Rcblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lci1yaWdodFwiPiBcblx0PC9kaXY+XG5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNvbnRlbnRzXCI+XG5cdDxhIHRyYW5zaXRpb246c2NhbGU9XCJ7e2R1cmF0aW9uOiA1MDAsIGRlbGF5OiA1MCwgb3BhY2l0eTogMC4yLCBzdGFydDogMC4xLCBlYXNpbmc6IHF1aW50T3V0fX1cIiBocmVmPVwiL1wiID5cblx0XHQ8ZGl2ICBjbGFzcz1cImFycm93XCI+XG5cdFx0XHQ8QXJyb3cgIHNjYWxlPXs1LjB9IHJvdGF0aW9uPXtcIjE4MGRlZ1wifSAvPlxuXHRcdDwvZGl2PlxuXHQ8L2E+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItdG9wLWxlZnRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItdG9wLXJpZ2h0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLWJvdHRvbS1sZWZ0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLWJvdHRvbS1yaWdodFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBdUZrQixDQUFHLFlBQVksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVpuQixRQUFRLEVBQUUsSUFBSTtLQUFFLEtBQUssRUFBRSxJQUFJO0tBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7O01BVTNELFFBQVEsRUFBRSxHQUFHO01BQUUsS0FBSyxFQUFFLEVBQUU7TUFBRSxPQUFPLEVBQUUsR0FBRztNQUFFLEtBQUssRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVRyRSxRQUFRLEVBQUUsSUFBSTtJQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsTUFBTTs7Ozs7Ozs7O0tBUy9DLFFBQVEsRUFBRSxHQUFHO0tBQUUsS0FBSyxFQUFFLEVBQUU7S0FBRSxPQUFPLEVBQUUsR0FBRztLQUFFLEtBQUssRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
