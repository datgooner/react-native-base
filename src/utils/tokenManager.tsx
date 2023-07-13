export const tokenManager = {
  token: '',
  exp: 0,
  logout: [],
  setToken(t: string) {
    this.token = t;
  },
  setExpires(exp: number) {
    this.exp = exp;
  },
  doLogout() {
    this.logout.forEach(i => i());
  },
};
