import { i as is_function, S as SvelteComponentDev, c as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, p as space, q as element, t as text, r as create_component, u as query_selector_all, h as detach_dev, w as claim_space, f as claim_element, g as children, x as claim_text, y as claim_component, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, z as mount_component, o as noop, A as add_render_callback, B as create_in_transition, C as transition_in, D as create_out_transition, E as transition_out, F as destroy_component } from './client.857e2f92.js';
import { c as cubicOut, A as Arrow, s as send, r as receive, a as slideInBounce, b as slideDirection, f as fade, d as fly, e as elasticOut, g as backOut } from './Arrow.10017e79.js';

function flip(node, animation, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const scaleX = animation.from.width / node.clientWidth;
    const scaleY = animation.from.height / node.clientHeight;
    const dx = (animation.from.left - animation.to.left) / scaleX;
    const dy = (animation.from.top - animation.to.top) / scaleY;
    const d = Math.sqrt(dx * dx + dy * dy);
    const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
    return {
        delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing,
        css: (_t, u) => `transform: ${transform} translate(${u * dx}px, ${u * dy}px);`
    };
}

/* src/routes/index.svelte generated by Svelte v3.20.1 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div4;
	let div0;
	let div0_intro;
	let div0_outro;
	let t1;
	let a;
	let div1;
	let t2;
	let t3;
	let div2;
	let t4;
	let div3;
	let current;
	const arrow = new Arrow({ props: { scale: 5 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div4 = element("div");
			div0 = element("div");
			t1 = space();
			a = element("a");
			div1 = element("div");
			t2 = text("Generative Design Playground");
			t3 = space();
			div2 = element("div");
			create_component(arrow.$$.fragment);
			t4 = space();
			div3 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1sc4dlt\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			a = claim_element(div4_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			div1 = claim_element(a_nodes, "DIV", {});
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, "Generative Design Playground");
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			div2 = claim_element(a_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(arrow.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Intro Page";
			attr_dev(div0, "class", "background-container-top svelte-14bpym3");
			add_location(div0, file, 72, 1, 1378);
			add_location(div1, file, 78, 2, 1612);
			attr_dev(div2, "class", "arrow svelte-14bpym3");
			add_location(div2, file, 79, 2, 1654);
			attr_dev(a, "href", "contents");
			attr_dev(a, "class", "svelte-14bpym3");
			add_location(a, file, 77, 1, 1588);
			attr_dev(div3, "class", "background-container-bottom svelte-14bpym3");
			add_location(div3, file, 83, 1, 1715);
			attr_dev(div4, "class", "intro svelte-14bpym3");
			add_location(div4, file, 71, 0, 1357);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			append_dev(div4, t1);
			append_dev(div4, a);
			append_dev(a, div1);
			append_dev(div1, t2);
			append_dev(a, t3);
			append_dev(a, div2);
			mount_component(arrow, div2, null);
			append_dev(div4, t4);
			append_dev(div4, div3);
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
					direction: slideDirection.LEFT
				});

				div0_intro.start();
			});

			transition_in(arrow.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (div0_intro) div0_intro.invalidate();

			div0_outro = create_out_transition(div0, slideInBounce, {
				duration: 2000,
				direction: slideDirection.LEFT
			});

			transition_out(arrow.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div4);
			if (detaching && div0_outro) div0_outro.end();
			destroy_component(arrow);
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

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		send,
		receive,
		slideInBounce,
		slideDirection,
		fade,
		fly,
		flip,
		elasticOut,
		Arrow,
		backOut
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmI2YzQ2MTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvYW5pbWF0ZS9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdWJpY091dCB9IGZyb20gJy4uL2Vhc2luZyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsJztcblxuZnVuY3Rpb24gZmxpcChub2RlLCBhbmltYXRpb24sIHBhcmFtcykge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNjYWxlWCA9IGFuaW1hdGlvbi5mcm9tLndpZHRoIC8gbm9kZS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBhbmltYXRpb24uZnJvbS5oZWlnaHQgLyBub2RlLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBkeCA9IChhbmltYXRpb24uZnJvbS5sZWZ0IC0gYW5pbWF0aW9uLnRvLmxlZnQpIC8gc2NhbGVYO1xuICAgIGNvbnN0IGR5ID0gKGFuaW1hdGlvbi5mcm9tLnRvcCAtIGFuaW1hdGlvbi50by50b3ApIC8gc2NhbGVZO1xuICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IChkKSA9PiBNYXRoLnNxcnQoZCkgKiAxMjAsIGVhc2luZyA9IGN1YmljT3V0IH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uOiBpc19mdW5jdGlvbihkdXJhdGlvbikgPyBkdXJhdGlvbihkKSA6IGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCAke3UgKiBkeX1weCk7YFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGZsaXAgfTtcbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7c2VuZCwgcmVjZWl2ZSwgc2xpZGVJbkJvdW5jZSwgc2xpZGVEaXJlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL3RyYW5zaXRpb25zLmpzJztcblx0aW1wb3J0IHsgZmFkZSwgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuXHRpbXBvcnQgeyBmbGlwIH0gZnJvbSAnc3ZlbHRlL2FuaW1hdGUnO1xuXHRpbXBvcnQgeyBlbGFzdGljT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cblx0aW1wb3J0IEFycm93IGZyb20gJy4uL2NvbXBvbmVudHMvQXJyb3cuc3ZlbHRlJztcblx0aW1wb3J0IHsgYmFja091dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuaW50cm8ge1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHRcdFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IHJlcGVhdCgxMCwgMWZyKSAzMnB4O1xuXHRcdGNvbHVtbi1nYXA6IDMycHg7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA0OHB4IHJlcGVhdCg4LCAxZnIpIDQ4cHg7XG5cblx0fVxuXG5cdGEge1xuXHRcdGZvbnQtc2l6ZTogNnJlbTtcblx0XHRmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xuXHRcdGdyaWQtY29sdW1uOiAzIC8gMTE7XG5cdFx0Z3JpZC1yb3c6IDQgLyA4O1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRtYXJnaW4tYm90dG9tOiAtNC4ycmVtO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0dGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXG5cdC5hcnJvdyB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdG1hcmdpbi1sZWZ0OiA0cmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDNyZW07XG5cdFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdH1cblxuXHQuYmFja2dyb3VuZC1jb250YWluZXItdG9wIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjA1NTIyO1xuXHRcdGdyaWQtcm93OiAxIC8gNjtcblx0XHRncmlkLWNvbHVtbjogMSAvIGNvbHVtbi1lbmQ7XG5cdFx0ei1pbmRleDogMTtcblx0fVxuXHRcblx0LmJhY2tncm91bmQtY29udGFpbmVyLWJvdHRvbSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwREZEMTtcblx0XHRncmlkLXJvdzogMSAvIGVuZDtcblx0XHRncmlkLWNvbHVtbjogMSAvIGVuZDtcblx0XHR6LWluZGV4OiAwO1xuXHR9XG5cdFxuXHRAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRhIHtcblx0XHRcdGZvbnQtc2l6ZTogM2VtO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkludHJvIFBhZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuXG48ZGl2IGNsYXNzPVwiaW50cm9cIj5cblx0PGRpdiBcblx0XHRpbjpzbGlkZUluQm91bmNlPVwie3tkdXJhdGlvbjogMjAwMCwgZGVsYXk6IDIwMDAsIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24uTEVGVH19XCJcblx0XHRvdXQ6c2xpZGVJbkJvdW5jZT1cInt7ZHVyYXRpb246IDIwMDAsIGRpcmVjdGlvbjogc2xpZGVEaXJlY3Rpb24uTEVGVH19XCJcblx0XHRjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyLXRvcFwiPiBcblx0PC9kaXY+XG5cdDxhICBocmVmPVwiY29udGVudHNcIiA+XG5cdFx0PGRpdj5HZW5lcmF0aXZlIERlc2lnbiBQbGF5Z3JvdW5kPC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImFycm93XCI+XG5cdFx0XHQ8QXJyb3cgc2NhbGU9ezUuMH0gLz5cblx0XHQ8L2Rpdj5cblx0PC9hPlxuXHQ8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXItYm90dG9tXCI+IFxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0FBQ3ZDLElBQUksTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsSUFBSSxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUN4RSxJQUFJLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDM0QsSUFBSSxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQzdELElBQUksTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7QUFDbEUsSUFBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUNoRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0MsSUFBSSxNQUFNLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUMxRixJQUFJLE9BQU87QUFDWCxRQUFRLEtBQUs7QUFDYixRQUFRLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVE7QUFDaEUsUUFBUSxNQUFNO0FBQ2QsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDdEYsS0FBSyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQzhEaUIsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVBFLFFBQVEsRUFBRSxJQUFJO0tBQUUsS0FBSyxFQUFFLElBQUk7S0FBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7SUFDMUQsUUFBUSxFQUFFLElBQUk7SUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
