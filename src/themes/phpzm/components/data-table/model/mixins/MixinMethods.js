export default {
  methods: {

    /**
     * @param {Function} done
     */
    refresh (done) {
      this.$emit('grid.refresh', done)
    },
    /**
     * @param {Object} row
     */
    rowclick (row) {
      this.$emit('grid.rowclick', row)
    },
    /**
     * @param {Object} action
     * @param {Object} row
     */
    handler (action, row) {
      if (typeof action.handler === 'function') {
        action.handler(row, this.columns, this)
      }
    }
  }
}