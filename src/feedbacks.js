const { combineRgb } = require('@companion-module/base')

module.exports = {
	initFeedbacks: function () {
		let self = this
		let feedbacks = {}

		const colorWhite = combineRgb(255, 255, 255) // White
		const colorRed = combineRgb(255, 0, 0) // Red

		feedbacks.matrixInputMute = {
			type: 'boolean',
			name: 'Matrix Input - Mute',
			description: 'Change the button color based on the Matrix Input Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].mute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixInputDelayEnable = {
			type: 'boolean',
			name: 'Matrix Input - Delay Enable',
			description: 'Change the button color based on the Matrix Input Delay Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].delayEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixInputEQEnable = {
			type: 'boolean',
			name: 'Matrix Input - EQ Enable',
			description: 'Change the button color based on the Matrix Input EQ Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].eqEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixInputPolarity = {
			type: 'boolean',
			name: 'Matrix Input - Polarity',
			description: 'Change the button color based on the Matrix Input Polarity State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].polarity === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixInputLevelMeterPreMute = {
			type: 'boolean',
			name: 'Matrix Input - Level Meter Pre Mute',
			description: 'Change the button color based on the Matrix Input Level Meter Pre Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].levelMeterPreMute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixInputLevelMeterPostMute = {
			type: 'boolean',
			name: 'Matrix Input - Level Meter Post Mute',
			description: 'Change the button color based on the Matrix Input Level Meter Post Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Input',
					id: 'matrixinput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.matrixinput

				if (self.matrixInput[input].levelMeterPostMute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixNodeEnable = {
			type: 'boolean',
			name: 'Matrix Node - Enable',
			description: 'Change the button color based on the Matrix Node Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Node',
					id: 'matrixnode',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let node = options.matrixnode

				if (self.matrixNode[node].enable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixNodeDelayEnable = {
			type: 'boolean',
			name: 'Matrix Node - Delay Enable',
			description: 'Change the button color based on the Matrix Node Delay Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Node',
					id: 'matrixnode',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let node = options.matrixnode

				if (self.matrixNode[node].delayEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputMute = {
			type: 'boolean',
			name: 'Matrix Output - Mute',
			description: 'Change the button color based on the Matrix Output Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].mute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputDelayEnable = {
			type: 'boolean',
			name: 'Matrix Output - Delay Enable',
			description: 'Change the button color based on the Matrix Output Delay Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].delayEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputEQEnable = {
			type: 'boolean',
			name: 'Matrix Output - EQ Enable',
			description: 'Change the button color based on the Matrix Output EQ Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].eqEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputPolarity = {
			type: 'boolean',
			name: 'Matrix Output - Polarity',
			description: 'Change the button color based on the Matrix Output Polarity State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].polarity === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputLevelMeterPreMute = {
			type: 'boolean',
			name: 'Matrix Output - Level Meter Pre Mute',
			description: 'Change the button color based on the Matrix Output Level Meter Pre Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].levelMeterPreMute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.matrixOutputLevelMeterPostMute = {
			type: 'boolean',
			name: 'Matrix Output - Level Meter Post Mute',
			description: 'Change the button color based on the Matrix Output Level Meter Post Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Matrix Output',
					id: 'matrixoutput',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let output = options.matrixoutput

				if (self.matrixOutput[output].levelMeterPostMute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.reverbInputProcessingMute = {
			type: 'boolean',
			name: 'Reverb Input Processing - Mute',
			description: 'Change the button color based on the Reverb Input Processing Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Reverb Input Processing',
					id: 'reverbinputprocessing',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.reverbinputprocessing

				if (self.reverbInputProcessing[input].mute === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.reverbInputProcessingEQEnable = {
			type: 'boolean',
			name: 'Reverb Input Processing - EQ Enable',
			description: 'Change the button color based on the Reverb Input Processing EQ Enable State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Reverb Input Processing',
					id: 'reverbinputprocessing',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let input = options.reverbinputprocessing

				if (self.reverbInputProcessing[input].eqEnable === 1) {
					return true
				}

				return false
			},
		}

		feedbacks.soundObjectRoutingMute = {
			type: 'boolean',
			name: 'Sound Object Routing - Mute',
			description: 'Change the button color based on the Sound Object Routing Mute State',
			defaultStyle: {
				color: colorWhite,
				bgcolor: colorRed,
			},
			options: [
				{
					type: 'number',
					label: 'Function Group',
					id: 'functiongroup',
					default: 1,
					min: 1,
					max: 16,
					required: true,
				},
				{
					type: 'number',
					label: 'Sound Object',
					id: 'soundobject',
					default: 1,
					min: 1,
					max: 64,
					required: true,
				},
			],
			callback: function (feedback, bank) {
				let options = feedback.options
				let group = options.functiongroup
				let routing = options.soundobjectrouting

				if (self.soundObjectRouting[group][routing].mute === 1) {
					return true
				}

				return false
			},
		}

		self.setFeedbackDefinitions(feedbacks)
	},
}
