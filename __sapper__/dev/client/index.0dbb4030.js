import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, r as create_component, u as query_selector_all, w as claim_space, y as claim_component, n as append_dev, z as mount_component, A as add_render_callback, B as create_in_transition, C as transition_in, J as create_bidirectional_transition, D as create_out_transition, E as transition_out, F as destroy_component } from './client.e6218ef8.js';
import { A as Arrow, f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut } from './Arrow.9eda3748.js';

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
	let div8;
	let div0;
	let div0_intro;
	let div0_outro;
	let t1;
	let a;
	let div1;
	let a_transition;
	let t2;
	let div6;
	let div2;
	let t3;
	let div3;
	let t4;
	let div4;
	let t5;
	let div5;
	let t6;
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
			div8 = element("div");
			div0 = element("div");
			t1 = space();
			a = element("a");
			div1 = element("div");
			create_component(arrow.$$.fragment);
			t2 = space();
			div6 = element("div");
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
			div7 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g09skn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div0 = claim_element(div8_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div8_nodes);
			a = claim_element(div8_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(arrow.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(div8_nodes);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div2 = claim_element(div6_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(p5square0.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div6_nodes);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(p5square1.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(p5square2.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(p5square3.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t6 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contents Page";
			attr_dev(div0, "class", "background-container-left svelte-1edeeb");
			add_location(div0, file$1, 81, 1, 1674);
			attr_dev(div1, "class", "arrow");
			add_location(div1, file$1, 88, 2, 1998);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "svelte-1edeeb");
			add_location(a, file$1, 87, 1, 1890);
			attr_dev(div2, "class", "p5-container-top-left svelte-1edeeb");
			add_location(div2, file$1, 93, 4, 2115);
			attr_dev(div3, "class", "p5-container-top-right svelte-1edeeb");
			add_location(div3, file$1, 96, 4, 2185);
			attr_dev(div4, "class", "p5-container-bottom-left svelte-1edeeb");
			add_location(div4, file$1, 99, 4, 2256);
			attr_dev(div5, "class", "p5-container-bottom-right svelte-1edeeb");
			add_location(div5, file$1, 102, 4, 2329);
			attr_dev(div6, "class", "p5-containers svelte-1edeeb");
			add_location(div6, file$1, 92, 2, 2083);
			attr_dev(div7, "class", "background-container-right svelte-1edeeb");
			add_location(div7, file$1, 106, 2, 2410);
			attr_dev(div8, "class", "contents svelte-1edeeb");
			add_location(div8, file$1, 80, 0, 1650);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, div0);
			append_dev(div8, t1);
			append_dev(div8, a);
			append_dev(a, div1);
			mount_component(arrow, div1, null);
			append_dev(div8, t2);
			append_dev(div8, div6);
			append_dev(div6, div2);
			mount_component(p5square0, div2, null);
			append_dev(div6, t3);
			append_dev(div6, div3);
			mount_component(p5square1, div3, null);
			append_dev(div6, t4);
			append_dev(div6, div4);
			mount_component(p5square2, div4, null);
			append_dev(div6, t5);
			append_dev(div6, div5);
			mount_component(p5square3, div5, null);
			append_dev(div8, t6);
			append_dev(div8, div7);
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
			if (detaching) detach_dev(div8);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGRiYjQwMzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5jb250ZW50cyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IHJlcGVhdCgxMCwgMWZyKSAzMnB4O1xuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNDhweCByZXBlYXQoOCwgMWZyKSA0OHB4O1xuXHR9XG5cblx0YSB7XG5cdFx0Zm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgY3Vyc2l2ZTtcblx0XHRncmlkLWNvbHVtbjogMjtcblx0XHRncmlkLXJvdzogMjtcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cdFx0ei1pbmRleDogMjtcblx0fVxuXG5cdC5iYWNrZ3JvdW5kLWNvbnRhaW5lci1sZWZ0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1NTIyO1xuXHRcdGdyaWQtY29sdW1uOiAxIC8gNztcblx0XHRncmlkLXJvdzogMSAvIGNvbHVtbi1lbmQ7XG5cdFx0ei1pbmRleDogMTtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZShcIjE4MGRlZ1wiKVxuXHR9XG5cdFxuXHQuYmFja2dyb3VuZC1jb250YWluZXItcmlnaHQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGMERGRDE7XG5cdFx0Z3JpZC1yb3c6IDEgLyBlbmQ7XG5cdFx0Z3JpZC1jb2x1bW46IDEgLyBlbmQ7XG5cdFx0ei1pbmRleDogMDtcbiAgfVxuXG4gIC5wNS1jb250YWluZXJzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAzIC8gMTI7XG4gICAgZ3JpZC1yb3c6IDIgLyBlbmQ7XG4gICAgei1pbmRleDogMjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJhIGJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImMgZFwiO1xuICB9XG5cbiAgLnA1LWNvbnRhaW5lcnMgPiAucDUtY29udGFpbmVyLXRvcC1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZ3JpZC1hcmVhOiBhO1xuICB9XG4gIC5wNS1jb250YWluZXJzID4gLnA1LWNvbnRhaW5lci10b3AtcmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBncmlkLWFyZWE6IGI7XG4gIH1cbiAgLnA1LWNvbnRhaW5lcnMgPiAucDUtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGdyaWQtYXJlYTogYztcbiAgfVxuICAucDUtY29udGFpbmVycyA+IC5wNS1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGdyaWQtYXJlYTogZDtcbiAgfVxuXHRcblx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdFx0YSB7XG5cdFx0XHRmb250LXNpemU6IDNlbTtcblx0XHRcdG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Db250ZW50cyBQYWdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50c1wiPlxuXHQ8ZGl2XHRcblx0XHRjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLWxlZnRcIlxuXHRcdGluOnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkZWxheTogMjAwMCwgZGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbi5CT1RUT019fVwiXG5cdFx0b3V0OnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLkJPVFRPTX19XCJcblx0PlxuXHQ8L2Rpdj5cblx0PGEgdHJhbnNpdGlvbjpzY2FsZT1cInt7ZHVyYXRpb246IDUwMCwgZGVsYXk6IDUwLCBvcGFjaXR5OiAwLjIsIHN0YXJ0OiAwLjEsIGVhc2luZzogcXVpbnRPdXR9fVwiIGhyZWY9XCIvXCIgPlxuXHRcdDxkaXYgIGNsYXNzPVwiYXJyb3dcIj5cblx0XHRcdDxBcnJvdyAgc2NhbGU9ezUuMH0gcm90YXRpb249e1wiMTgwZGVnXCJ9IC8+XG5cdFx0PC9kaXY+XG4gIDwvYT5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lcnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLXRvcC1sZWZ0XCI+XG4gICAgICA8UDVTcXVhcmUgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDUtY29udGFpbmVyLXRvcC1yaWdodFwiPlxuICAgICAgPFA1U3F1YXJlIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci1ib3R0b20tbGVmdFwiPlxuICAgICAgPFA1U3F1YXJlIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci1ib3R0b20tcmlnaHRcIj5cbiAgICAgIDxQNVNxdWFyZSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLXJpZ2h0XCI+IFxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkF5RmtCLENBQUcsWUFBWSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTm5CLFFBQVEsRUFBRSxJQUFJO0tBQUUsS0FBSyxFQUFFLElBQUk7S0FBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7TUFJM0QsUUFBUSxFQUFFLEdBQUc7TUFBRSxLQUFLLEVBQUUsRUFBRTtNQUFFLE9BQU8sRUFBRSxHQUFHO01BQUUsS0FBSyxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSHJFLFFBQVEsRUFBRSxJQUFJO0lBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxNQUFNOzs7Ozs7Ozs7S0FHL0MsUUFBUSxFQUFFLEdBQUc7S0FBRSxLQUFLLEVBQUUsRUFBRTtLQUFFLE9BQU8sRUFBRSxHQUFHO0tBQUUsS0FBSyxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
