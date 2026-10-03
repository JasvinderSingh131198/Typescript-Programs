// 1. Type Aliases and Enums
type ID = string | number; // Union type alias

enum Status {
  Active = "ACTIVE",
  Pending = "PENDING",
  Archived = "ARCHIVED",
}

type User = {
  id: ID;
  name: string;
  email: string;
  status: Status;
};

// 2. Union and Intersection Types
type Admin = {
  permissions: string[];
};

// Intersection type combining User and Admin properties
type AdminUser = User & Admin;

// Union type for function inputs
type PrintArg = string | User;

// 3. Implementing Generics
// A generic function that wraps a value in an object
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Generic interface
interface Repository<T> {
  fetchById(id: ID): T;
  save(entity: T): void;
}

// 4. Type Guards (User-defined & Built-in)
function isUser(arg: PrintArg): arg is User {
  return (arg as User).name !== undefined;
}

function printInfo(item: PrintArg): void {
  // typeof type guard for primitives
  if (typeof item === "string") {
    console.log(`String Info: ${item}`);
  } 
  // Custom type guard for User object
  else if (isUser(item)) {
    console.log(`User: ${item.name}, Status: ${item.status}`);
  }
}

// 5. Utility Types (Partial, Pick, Omit)
// Partial: Makes all properties optional
function updateUser(existingUser: User, updates: Partial<User>): User {
  return { ...existingUser, ...updates };
}

// Pick: Selects a subset of properties
type UserContactInfo = Pick<User, "name" | "email">;

// Omit: Excludes specific properties
type UserWithoutStatus = Omit<User, "status">;

// --- Execution Examples ---

const initialUser: User = {
  id: 101,
  name: "Alice Smith",
  email: "alice@example.com", // Note: Dummy domain, not an active link
  status: Status.Active,
};

// Testing Generics
const wrappedUser = wrapInArray(initialUser);
console.log("Wrapped Generic:", wrappedUser);

// Testing Type Guards
printInfo("System Booting...");
printInfo(initialUser);

// Testing Partial Utility Type
const updated = updateUser(initialUser, { status: Status.Pending });
console.log("Updated User:", updated);

// Testing Pick and Omit
const contact: UserContactInfo = {
  name: initialUser.name,
  email: initialUser.email,
};
console.log("Picked Contact:", contact);
