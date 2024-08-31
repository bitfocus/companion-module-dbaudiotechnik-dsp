const { Regex } = require('@companion-module/base')

module.exports = {
	getConfigFields() {
		let self = this

		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This modules controls D&B Audiotechnik DSP devices. The device will communicate over UDP using the Open Sound Control (OSC) protocol.',
			},
			{
				type: 'static-text',
				id: 'hr1',
				width: 12,
				label: ' ',
				value: '<hr />',
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 6,
				default: '',
				regex: Regex.IP,
			},
			{
				type: 'static-text',
				id: 'hr2',
				width: 12,
				label: ' ',
				value: '<hr />',
			},
			{
				type: 'textinput',
				id: 'remotePort',
				label: 'OSC Port to Send To',
				width: 4,
				default: '50010',
				regex: Regex.PORT,
			},
			{
				type: 'static-text',
				id: 'info2',
				width: 8,
				label: ' ',
				value: 'The default OSC sending port is 50010. This is the port the device listens on for incoming OSC messages.',
			},
			{
				type: 'textinput',
				id: 'localPort',
				label: 'OSC Port to Listen To',
				width: 4,
				default: '50011',
				regex: Regex.PORT,
			},
			{
				type: 'static-text',
				id: 'info2',
				width: 8,
				label: ' ',
				value: 'The default OSC receiving port is 50011. This is the port the device sends outgoing OSC messages to, that Companion will listen to.',
			},
			{
				type: 'static-text',
				id: 'hr3',
				width: 12,
				label: ' ',
				value: '<hr />',
			},
			{
				type: 'checkbox',
				id: 'verbose',
				label: 'Enable Verbose Logging',
				default: false,
				width: 3,
			},
			{
				type: 'static-text',
				id: 'info3',
				width: 9,
				label: ' ',
				value: `Enabling Verbose Logging will push all incoming and outgoing data to the log, which is helpful for debugging.`,
			},
		]
	},
}
