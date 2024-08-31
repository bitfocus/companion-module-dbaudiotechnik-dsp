// D&B Audiotechnik DSP
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

		this.PREFIX = '/dbaudio1'
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

		this.initConnection()

		this.initActions()
		this.initFeedbacks()
		this.initVariables()
		this.initPresets()
	}
}

runEntrypoint(dbaudiotechnikDspInstance, upgrades)
