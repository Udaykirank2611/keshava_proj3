const formatNumber = (value) => {
  const num = Number(value)
  if (!Number.isFinite(num)) return "—"
  return new Intl.NumberFormat(undefined).format(num)
}

const formatCurrency = (value) => {
  const num = Number(value)
  if (!Number.isFinite(num)) return "—"
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(num)
}

const setText = (selector, value) => {
  const el = document.querySelector(selector)
  if (!el) return
  el.textContent = value
}

const createRow = (cells) => {
  const tr = document.createElement("tr")
  for (const cell of cells) {
    const td = document.createElement("td")
    td.append(cell)
    tr.append(td)
  }
  return tr
}

const renderUsersTable = (users) => {
  const tbody = document.querySelector("#users-table-body")
  if (!tbody) return

  tbody.replaceChildren()

  if (!Array.isArray(users) || users.length === 0) {
    const empty = document.createElement("div")
    empty.className = "text-muted py-3"
    empty.textContent = "No users found."
    const td = document.createElement("td")
    td.colSpan = 2
    td.append(empty)
    const tr = document.createElement("tr")
    tr.append(td)
    tbody.append(tr)
    return
  }

  for (const user of users) {
    const name = document.createElement("div")
    name.className = "fw-semibold"
    name.textContent = user?.name ?? "—"

    const email = document.createElement("a")
    email.href = `mailto:${user?.email ?? ""}`
    email.className = "text-decoration-none"
    email.textContent = user?.email ?? "—"

    tbody.append(createRow([name, email]))
  }
}

const renderOrdersTable = (orders) => {
  const tbody = document.querySelector("#orders-table-body")
  if (!tbody) return

  tbody.replaceChildren()

  if (!Array.isArray(orders) || orders.length === 0) {
    const empty = document.createElement("div")
    empty.className = "text-muted py-3"
    empty.textContent = "No orders found."
    const td = document.createElement("td")
    td.colSpan = 2
    td.append(empty)
    const tr = document.createElement("tr")
    tr.append(td)
    tbody.append(tr)
    return
  }

  for (const order of orders) {
    const tr = document.createElement("tr")

    const idTd = document.createElement("td")
    const id = document.createElement("span")
    id.className = "fw-semibold"
    id.textContent = order?.id ?? "—"
    idTd.append(id)

    const amountTd = document.createElement("td")
    amountTd.className = "text-end"
    amountTd.textContent = formatCurrency(order?.amount)

    tr.append(idTd, amountTd)
    tbody.append(tr)
  }
}

const applyAnalytics = (data) => {
  const analytics = data?.analytics ?? {}

  setText("#metric-total-users", formatNumber(analytics.totalUsers ?? data?.users?.length))
  setText("#metric-total-orders", formatNumber(analytics.totalOrders ?? data?.orders?.length))
  setText("#metric-revenue", formatCurrency(analytics.revenue))

  const primaryUser = Array.isArray(data?.users) ? data.users[0] : null
  if (primaryUser) {
    setText("#profile-name", primaryUser.name ?? "—")
    setText("#profile-handle", primaryUser.email ?? "—")
  }
}

const loadAdminData = async () => {
  try {
    const res = await fetch("/data.json", { cache: "no-store" })
    if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`)
    const data = await res.json()

    applyAnalytics(data)
    renderUsersTable(data.users)
    renderOrdersTable(data.orders)
  } catch (err) {
    console.error(err)
    const alertEl = document.querySelector("#data-load-error")
    if (alertEl) {
      alertEl.classList.remove("d-none")
      alertEl.textContent = "Could not load dashboard data. Please check data.json."
    }
  }
}

if (document.readyState !== "loading") loadAdminData()
else window.addEventListener("DOMContentLoaded", loadAdminData)

