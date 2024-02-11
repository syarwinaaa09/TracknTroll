import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
import utilities from './tailwind.json';

const client = new ApolloClient({
  uri: 'http://192.168.18.11:5001/api/misty-ferret',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}