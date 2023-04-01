import { createBaseTable } from 'orchid-orm'

export const BaseTable = createBaseTable({
  columnTypes: (t) => ({
    ...t,
    // set default min and max for all text columns
    text(min = 3, max = 100) {
      return t.text.call(this, min, max)
    },
    timestamp() {
      return t.timestamp().asDate()
    },
  }),
})
