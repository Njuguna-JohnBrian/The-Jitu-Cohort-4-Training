let carName: string;

let phoneNumber: number;

let isUser: boolean;

function determineOwner(): boolean {
  carName = "KIA";
  phoneNumber = 12323123;
  if (carName && phoneNumber) return (isUser = true);
  return (isUser = false);
}
