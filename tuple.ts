const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'haru',
  age: 98,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin');

// person.role = [0, 'admin', 'user'];

for (const r of person.role) {
  console.log(r);
}