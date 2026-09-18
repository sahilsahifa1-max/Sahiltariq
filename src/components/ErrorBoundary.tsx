import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Something went wrong</h2>
          <p className="text-sm text-[#D7E2EA]/60 max-w-md mb-6">
            An unexpected error occurred while rendering the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
