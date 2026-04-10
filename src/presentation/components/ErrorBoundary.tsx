import { Link, Stack } from 'expo-router';
import React, { type ComponentType, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ComponentType<{ error: Error; reset: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} reset={this.resetError} />;
      }

      return (
        <View style={styles.container}>
          <Stack.Screen options={{ title: 'Error' }} />
          <View style={styles.content}>
            <Text style={styles.title}>Something went wrong</Text>
            <Text style={styles.message}>{this.state.error.message}</Text>
            <Link href="/" style={styles.link}>
              <Text style={styles.linkText}>Go to home screen</Text>
            </Link>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
  },
  link: {
    marginTop: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#2e78b7',
  },
});

export default ErrorBoundary;
