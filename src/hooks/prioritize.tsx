const prioritize = (input: string, priority: string[]) => {
  const index = priority.indexOf(input);
  if (index !== -1) {
    const updatedPriority = [...priority];
    updatedPriority.splice(index, 1);
    updatedPriority.push(input);
    return updatedPriority;
  }
  return priority;
};
export default prioritize;
