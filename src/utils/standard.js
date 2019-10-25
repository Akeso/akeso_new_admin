/**
 * Created by WJ on 19/06/27.
 */

export function outTimeCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val < 40) {
    return '差'
  } else if (val < 80) {
    return '中'
  } else if (val < 120) {
    return '良'
  }
  return '优'
}

export function outTimeLuxCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val < 120000) {
    return '差'
  } else if (val < 240000) {
    return '中'
  } else if (val < 360000) {
    return '良'
  }
  return '优'
}

export function stepCountCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val < 4000) {
    return '差'
  } else if (val < 8000) {
    return '中'
  } else if (val < 12000) {
    return '良'
  }
  return '优'
}

export function nearworkBurdenDayCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val <= 240) {
    return '优'
  } else if (val <= 480) {
    return '良'
  } else if (val <= 720) {
    return '中'
  }
  return '差'
}

export function nearworkDayCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val <= 80) {
    return '优'
  } else if (val <= 160) {
    return '良'
  } else if (val <= 260) {
    return '中'
  }
  return '差'
}

export function badPostureTimesCondition(val) {
  if (val === 0) {
    return '无'
  }
  if (val <= 15) {
    return '优'
  } else if (val <= 30) {
    return '良'
  } else if (val <= 45) {
    return '中'
  }
  return '差'
}
