import { S as SvelteComponentDev, c as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, m as insert_dev, o as noop, p as space, r as create_component, u as query_selector_all, w as claim_space, y as claim_component, n as append_dev, z as mount_component, A as add_render_callback, B as create_in_transition, C as transition_in, J as create_bidirectional_transition, D as create_out_transition, E as transition_out, F as destroy_component } from './client.07955032.js';
import { A as Arrow, f as fade, d as fly, h as scale, s as send, r as receive, a as slideInBounce, b as slideDirection, q as quintOut } from './Arrow.1a763aee.js';

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
	let t2;
	let div8;
	let a;
	let div3;
	let a_transition;
	let t3;
	let div4;
	let t4;
	let div5;
	let t5;
	let div6;
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
			div2 = element("div");
			div0 = element("div");
			t1 = space();
			div1 = element("div");
			t2 = space();
			div8 = element("div");
			a = element("a");
			div3 = element("div");
			create_component(arrow.$$.fragment);
			t3 = space();
			div4 = element("div");
			create_component(p5square0.$$.fragment);
			t4 = space();
			div5 = element("div");
			create_component(p5square1.$$.fragment);
			t5 = space();
			div6 = element("div");
			create_component(p5square2.$$.fragment);
			t6 = space();
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
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			a = claim_element(div8_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div3 = claim_element(a_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(arrow.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(p5square0.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t4 = claim_space(div8_nodes);
			div5 = claim_element(div8_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(p5square1.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t5 = claim_space(div8_nodes);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(p5square2.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			t6 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			claim_component(p5square3.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contents Page";
			attr_dev(div0, "class", "background-container-left svelte-1bgifeg");
			add_location(div0, file$1, 90, 1, 1999);
			attr_dev(div1, "class", "background-container-right svelte-1bgifeg");
			add_location(div1, file$1, 96, 1, 2215);
			attr_dev(div2, "class", "background svelte-1bgifeg");
			add_location(div2, file$1, 89, 0, 1973);
			attr_dev(div3, "class", "arrow svelte-1bgifeg");
			add_location(div3, file$1, 102, 2, 2405);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "svelte-1bgifeg");
			add_location(a, file$1, 101, 1, 2297);
			attr_dev(div4, "class", "p5-container-top-left svelte-1bgifeg");
			add_location(div4, file$1, 106, 2, 2489);
			attr_dev(div5, "class", "p5-container-top-right svelte-1bgifeg");
			add_location(div5, file$1, 109, 2, 2553);
			attr_dev(div6, "class", "p5-container-bottom-left svelte-1bgifeg");
			add_location(div6, file$1, 112, 2, 2618);
			attr_dev(div7, "class", "p5-container-bottom-right svelte-1bgifeg");
			add_location(div7, file$1, 115, 2, 2685);
			attr_dev(div8, "class", "contents svelte-1bgifeg");
			add_location(div8, file$1, 100, 0, 2273);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, a);
			append_dev(a, div3);
			mount_component(arrow, div3, null);
			append_dev(div8, t3);
			append_dev(div8, div4);
			mount_component(p5square0, div4, null);
			append_dev(div8, t4);
			append_dev(div8, div5);
			mount_component(p5square1, div5, null);
			append_dev(div8, t5);
			append_dev(div8, div6);
			mount_component(p5square2, div6, null);
			append_dev(div8, t6);
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
			if (detaching) detach_dev(t2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYmFiNDk3ODIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGVudHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUsIGZseSwgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblxuXHRpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgQXJyb3cgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcnJvdy5zdmVsdGUnXG4gIGltcG9ydCBQNVNxdWFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1A1U3F1YXJlLnN2ZWx0ZSdcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgOnJvb3Qge1xuICAgIC0tbWFyZ2luLXNpZGVzOiAyZW07XG4gIH1cblxuICAuYmFja2dyb3VuZCB7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiAxNTBweDtcbiAgICAtbW96LWNvbHVtbi13aWR0aDogMTUwcHg7XG4gICAgY29sdW1uLXdpZHRoOiA1MCU7XG4gICAgY29sdW1uLWdhcDogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBERkQxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuYmFja2dyb3VuZC1jb250YWluZXItbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwNTUyMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cdH1cblx0XG5cdC5iYWNrZ3JvdW5kLWNvbnRhaW5lci1yaWdodCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwREZEMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGVudHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tbWFyZ2luLXNpZGVzKSByZXBlYXQoMTAsIFtjb2wtc3RhcnRdIDFmcikgdmFyKC0tbWFyZ2luLXNpZGVzKTtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDQ4cHggcmVwZWF0KDgsIFtyb3ctc3RhcnRdIDFmcikgNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cdH1cblxuXHRhIHtcblx0XHRmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xuXHRcdGdyaWQtY29sdW1uOiAyO1xuXHRcdGdyaWQtcm93OiAyO1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0XHR6LWluZGV4OiAyO1xuXHR9XG5cbiAgLnA1LWNvbnRhaW5lci10b3AtbGVmdCB7XG4gICAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAyIC8gc3BhbiA0O1xuICAgIGdyaWQtcm93OiByb3ctc3RhcnQgMSAvIHNwYW4gNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tc2lkZXMpO1xuICB9XG4gIC5wNS1jb250YWluZXItdG9wLXJpZ2h0IHtcbiAgICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDcgLyBzcGFuIDQ7XG4gICAgZ3JpZC1yb3c6IHJvdy1zdGFydCAxIC8gc3BhbiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLXNpZGVzKTtcbiAgfVxuICAucDUtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcbiAgICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDIgLyBzcGFuIDQ7XG4gICAgZ3JpZC1yb3c6IHJvdy1zdGFydCA2IC8gc3BhbiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tc2lkZXMpO1xuICB9XG4gIC5wNS1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcbiAgICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDcgLyBzcGFuIDQ7XG4gICAgZ3JpZC1yb3c6IHJvdy1zdGFydCA2IC8gc3BhbiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgfVxuXHRcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRlbnRzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIH1cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q29udGVudHMgUGFnZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxuXHQ8ZGl2XHRcblx0XHRjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLWxlZnRcIlxuXHRcdGluOnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkZWxheTogMjAwMCwgZGlyZWN0aW9uOiBzbGlkZURpcmVjdGlvbi5CT1RUT019fVwiXG5cdFx0b3V0OnNsaWRlSW5Cb3VuY2U9XCJ7e2R1cmF0aW9uOiAyMDAwLCBkaXJlY3Rpb246IHNsaWRlRGlyZWN0aW9uLkJPVFRPTX19XCJcblx0PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLXJpZ2h0XCI+IFxuXHQ8L2Rpdj5cblxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY29udGVudHNcIj5cblx0PGEgdHJhbnNpdGlvbjpzY2FsZT1cInt7ZHVyYXRpb246IDUwMCwgZGVsYXk6IDUwLCBvcGFjaXR5OiAwLjIsIHN0YXJ0OiAwLjEsIGVhc2luZzogcXVpbnRPdXR9fVwiIGhyZWY9XCIvXCIgPlxuXHRcdDxkaXYgIGNsYXNzPVwiYXJyb3dcIj5cblx0XHRcdDxBcnJvdyAgc2NhbGU9ezUuMH0gcm90YXRpb249e1wiMTgwZGVnXCJ9IC8+XG5cdFx0PC9kaXY+XG5cdDwvYT5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci10b3AtbGVmdFwiPlxuICAgIDxQNVNxdWFyZSAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInA1LWNvbnRhaW5lci10b3AtcmlnaHRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItYm90dG9tLWxlZnRcIj5cbiAgICA8UDVTcXVhcmUgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwNS1jb250YWluZXItYm90dG9tLXJpZ2h0XCI+XG4gICAgPFA1U3F1YXJlIC8+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXVHa0IsQ0FBRyxZQUFZLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FYbkIsUUFBUSxFQUFFLElBQUk7S0FBRSxLQUFLLEVBQUUsSUFBSTtLQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7OztNQVMzRCxRQUFRLEVBQUUsR0FBRztNQUFFLEtBQUssRUFBRSxFQUFFO01BQUUsT0FBTyxFQUFFLEdBQUc7TUFBRSxLQUFLLEVBQUUsR0FBRztNQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFSckUsUUFBUSxFQUFFLElBQUk7SUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07Ozs7Ozs7OztLQVEvQyxRQUFRLEVBQUUsR0FBRztLQUFFLEtBQUssRUFBRSxFQUFFO0tBQUUsT0FBTyxFQUFFLEdBQUc7S0FBRSxLQUFLLEVBQUUsR0FBRztLQUFFLE1BQU0sRUFBRSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
