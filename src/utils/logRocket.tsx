import LogRocket from 'logrocket'

export const logRocket = () => {
  if (process.env.NODE_ENV === 'production') {
    LogRocket.init('pnkgse/vault-naija')

    LogRocket.identify('ykuij234f', {
      name: 'James Morrison',
      email: 'jamesmorrison@example.com',

      subscriptionType: 'pro',
    })
  }
}
