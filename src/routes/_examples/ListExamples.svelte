<script lang="ts">
	import ExampleCard from '../_components/ExampleCard.svelte';
	import ExampleSection from '../_components/ExampleSection.svelte';

	import List from '$lib/lists/List.svelte';
	import { sendNotification } from '../../stores';

	const items = Array(500)
		.fill(1)
		.map((x, i) => `Item ${i + 1}`);

	let disabled = true;
</script>

<div>
	<ExampleSection title="List">
		<ExampleCard name="default">
			<div class="vertical">
				<List
					{items}
					let:item
					on:itemSelected={(event) => {
						sendNotification(
							`List item selected [${event.detail.index}] 'Item ${event.detail.item}'`
						);
					}}
				/>
			</div>
		</ExampleCard>
		<ExampleCard name="disabled">
			<div class="vertical">
				<List {items} let:item {disabled} />
			</div>
			<button on:click={() => (disabled = !disabled)}>toggle</button>
		</ExampleCard>
		<ExampleCard name="tab key for item selection">
			<div class="vertical">
				<List {items} let:item selectionKeys="tab" />
			</div>
		</ExampleCard>
		<ExampleCard name="horizontal">
			<div class="horizontal">
				<List {items} let:item horizontal />
			</div>
		</ExampleCard>
	</ExampleSection>
</div>

<style>
	.vertical {
		height: 410px;
		display: flex;
		flex-direction: column;
		justify-items: stretch;
	}

	.horizontal {
		width: 410px;
		display: flex;
		flex-direction: row;
		justify-items: stretch;
	}
</style>
