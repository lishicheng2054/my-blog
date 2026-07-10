<script lang="ts">
	import Icon from "@iconify/svelte";

	type MenuItem = {
		code: string;
		displayName: string;
		shortLabel: string;
		href: string | null;
		active: boolean;
		available: boolean;
	};

	export let currentLanguage: string;
	export let items: MenuItem[] = [];

	let open = false;

	$: currentItem =
		items.find((item) => item.code === currentLanguage) ?? items[0];

	function toggleMenu() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}
</script>

<div class="relative language-switch-root">
	<button
		aria-label="Language Switch"
		aria-expanded={open}
		class="btn-plain scale-animation rounded-lg h-11 px-3 gap-1.5 active:scale-90 inline-flex items-center language-switch-trigger"
		type="button"
		onclick={toggleMenu}
	>
		<Icon icon="material-symbols:language-rounded" class="text-[1.1rem]" />
		<span class="text-sm font-semibold">{currentItem?.shortLabel ?? "中"}</span>
		<Icon
			icon="material-symbols:keyboard-arrow-down-rounded"
			class={`text-[1.1rem] transition-transform duration-200 ${open ? "rotate-180 text-(--primary)" : ""}`}
		/>
	</button>

	{#if open}
		<div class="dropdown-content absolute right-0 top-13 min-w-[11rem] p-1.5 z-60">
			{#each items as item}
				{#if item.available && item.href}
					<a
						class={`language-switch-item ${item.active ? "language-switch-item-active" : ""}`}
						href={item.href}
						onclick={closeMenu}
					>
						<span class="flex items-center gap-2">
							<span class="language-switch-badge">{item.shortLabel}</span>
							<span>{item.displayName}</span>
						</span>
						{#if item.active}
							<Icon
								icon="material-symbols:check-rounded"
								class="text-[1rem] text-(--primary)"
							/>
						{/if}
					</a>
				{:else}
					<div class="language-switch-item language-switch-item-disabled">
						<span class="flex items-center gap-2">
							<span class="language-switch-badge">{item.shortLabel}</span>
							<span>{item.displayName}</span>
						</span>
						<span class="text-[0.7rem] text-black/25 dark:text-white/25">Soon</span>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<svelte:document
	onclick={(event) => {
		if (!(event.target instanceof Node)) {
			return;
		}

		const root = document.querySelector(".language-switch-root");
		if (root && !root.contains(event.target)) {
			closeMenu();
		}
	}}
/>
