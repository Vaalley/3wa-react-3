interface GreetingProps {
  name: string;
  age?: number;
  hobbies?: string[];
  isOnline?: boolean;
}

export const Greeting = ({ name, age, hobbies, isOnline }: GreetingProps) => {
  const getAgeMessage = (age: number) => {
    if (age < 0) return "Invalid age: Age cannot be negative";
    if (age > 150) return "Invalid age: Age seems too high";
    return `You are ${age} years old.`;
  };

  return (
    <div style={{ margin: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h2>
        Hello, {name}!
        {isOnline !== undefined && (
          <span style={{ color: isOnline ? 'green' : 'gray', marginLeft: '0.5rem' }}>
            ({isOnline ? 'online' : 'offline'})
          </span>
        )}
      </h2>
      {age !== undefined && <p>{getAgeMessage(age)}</p>}
      {hobbies && hobbies.length > 0 && (
        <div>
          <p>Hobbies:</p>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
