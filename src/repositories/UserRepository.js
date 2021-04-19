let users = ['Diego','Gabriel', 'Olavo', 'Carlos']

export function getUsers(){
  return users;
}

export function addUser(user){
  users.push(user);
}