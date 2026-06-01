export const isOverdue = (
  dueDate,
  balance
) => {
  return (
    new Date() > new Date(dueDate) &&
    balance > 0
  );
};