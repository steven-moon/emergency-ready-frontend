<template>
	<div class="modal-frame">
		<div class="modal-frame__aside">
			<h2 class="modal-frame__aside-title">Wizard Title: text to second line</h2><!-- /.modal-frame__title -->

			<div class="modal-frame__steps">
				<ul>
					<li
						:class="{
							'current': activeStepIndex === i,
							'completed': activeStepIndex > i,
							'disabled': step.disabled
						}"
						v-for="(step, i) in steps"
						:key="`step-${step.id}`">
						<a href="#" @click.prevent="setActiveStepIndex(i, step)">
							<span>{{ i + 1 }}</span>

							<span>{{ step.title }}</span>
						</a>
					</li>
				</ul>
			</div><!-- /.modal-frame__steps -->
		</div><!-- /.modal-frame__aside -->

		<div class="modal-frame__content">
			<h4 class="modal-frame__title">{{ currentStep.title }}</h4><!-- /.modal-frame__title -->

			<div class="modal-frame__entry">
				<p>Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of music in a couple of minutes.</p>
			</div><!-- /.modal-frame__entry -->

			<div class="modal-frame__actions">
				<a href="#" class="btn">Action</a>

				<a href="#" class="btn">Action</a>

				<a href="#" class="btn">Action</a>
			</div><!-- /.modal-frame__actions -->
		</div><!-- /.modal-frame__content -->
	</div><!-- /.modal-frame -->
</template>

<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'ModalWizard',

		/**
		 * Internal state of the component.
		 *
		 * @return {Object}
		 */
		data: () => ({
			activeStepIndex: 0,
			steps: [
				{
					id: 1,
					title: 'First step'
				},
				{
					id: 2,
					title: 'Second step wraps to the next line'
				},
				{
					id: 3,
					title: 'Current step'
				},
				{
					id: 4,
					title: 'Step 4 is not available',
					disabled: true
				}
			]
		}),

		/**
		 * The dynamic properties of the component
		 *
		 * @type {Object}
		 */
		computed: {
			currentStep() {
				return this.steps.find((step, i) => i === this.activeStepIndex);
			}
		},
		
		/**
		 * The public API of the component.
		 * 
		 * @type {Object}
		 */
		methods: {
			setActiveStepIndex(i, step) {
				if ( step.disabled ) {
					return;
				}

				this.activeStepIndex = i;
			}
		}
	}
</script>
