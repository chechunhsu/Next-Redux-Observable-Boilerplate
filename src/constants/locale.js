const DICTIONARY = {
  drawer: {
    card: '今日のカード',
    channel: 'メッセージ',
    forum: '談話室',
    friend: '友達',
    notification: 'お知らせ',
    user: 'プロフィール'
  },
  title: {
    default: 'Dpick - 大学生の交流の場'
  }
}

// //////////////////////////////////////////////////////////////////////////////////
// Example:
//
// DICTIONARY = {
//   'validation': {
//     'minLength': 少なくとも{length}文字必要です
//   }
// }
//
// locale('validation.minLength', { length: 20 })
//
// //////////////////////////////////////////////////////////////////////////////////

export default (id, variables) => {
  let result = DICTIONARY

  id.split('.').forEach(key => {
    if (typeof result === 'object') {
      result = result[key]
    }
  })

  if (typeof variables === 'object') {
    Object.keys(variables).forEach(key => {
      result = result.replace(new RegExp(`{${key}}`, 'g'), variables[key])
    })
  }

  return result
}
