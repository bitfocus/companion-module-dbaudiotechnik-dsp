// d&b audiotechnik DSP
const { InstanceBase, InstanceStatus, runEntrypoint } = require('@companion-module/base')
const upgrades = require('./src/upgrades')

const config = require('./src/config')

const actions = require('./src/actions')
const feedbacks = require('./src/feedbacks')
const variables = require('./src/variables')
const presets = require('./src/presets')

const api = require('./src/api')

const constants = require('./src/constants')

class dbaudiotechnikDspInstance extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Assign the methods from the listed files to this class
		Object.assign(this, {
			...config,

			...actions,
			...feedbacks,
			...variables,
			...presets,

			...api,

			...constants,
		})

		//this.instanceOptions.disableVariableValidation = true //reduce the number of visible variables
	}

	async init(config) {
		this.configUpdated(config)
	}

	async destroy() {
		try {
			clearInterval(this.INTERVAL)
			clearInterval(this.RECONNECT_INTERVAL)
		} catch (error) {
			this.log('error', 'destroy error:' + error)
		}
	}

	async configUpdated(config) {
		this.config = config

		// Set matrix counts from configured scalable I/O option. Will be overridden dynamically
		// by /status/matrixinputcount and /status/matrixoutputcount once the device responds.
		const matrixSize = config.matrixSize || 'L'
		if (matrixSize === 'S') {
			this.matrixInputCount = 64
			this.matrixOutputCount = 24
		} else if (matrixSize === 'XL') {
			this.matrixInputCount = 128
			this.matrixOutputCount = 64
		} else {
			// L (Large) – default
			this.matrixInputCount = 64
			this.matrixOutputCount = 64
		}

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()

		this.initConnection()
	}

	rebuildFromDeviceCounts() {
		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()
	}
}

runEntrypoint(dbaudiotechnikDspInstance, upgrades)
