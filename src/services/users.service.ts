
export type User = { id: string; name: string; email: string };

// In-memory demo store
const users: User[] = [
  { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: '2', name: 'Alan Turing', email: 'alan@example.com' },
];

export function listUsers(): User[] {
  return users;
}

export function createUser(data: Pick<User, 'name' | 'email'>): User {
  const id = String(users.length + 1);
  const user = { id, ...data };
  users.push(user);
  return user;
}
