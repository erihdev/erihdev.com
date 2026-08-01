import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        Sentry.captureException(error, { extra: errorInfo as any });
        this.setState({ error, errorInfo });
    }

    private handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    private handleGoHome = () => {
        window.location.href = '/';
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-4 bg-beige text-walnut">
                    <div className="max-w-2xl w-full p-8 rounded-2xl border border-walnut/10 bg-white/60 backdrop-blur-md shadow-2xl shadow-walnut/10">
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="p-4 rounded-full bg-red-500/10">
                                    <AlertTriangle className="h-16 w-16 text-red-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-walnut to-brown bg-clip-text text-transparent">
                                    عذراً، حدث خطأ ما!
                                </h1>
                                <p className="text-brown/80">
                                    نعتذر عن الإزعاج. حدث خطأ غير متوقع في التطبيق.
                                </p>
                            </div>

                            {import.meta.env.DEV && this.state.error && (
                                <div className="p-4 rounded-xl border border-walnut/10 bg-walnut/5 text-right mt-4">
                                    <p className="text-sm font-mono text-red-700 mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    {this.state.errorInfo && (
                                        <details className="text-xs text-brown/60">
                                            <summary className="cursor-pointer hover:text-brown">
                                                عرض التفاصيل التقنية
                                            </summary>
                                            <pre className="mt-2 text-right overflow-auto max-h-40 font-mono text-left" dir="ltr">
                                                {this.state.errorInfo.componentStack}
                                            </pre>
                                        </details>
                                    )}
                                </div>
                            )}

                            <div className="flex gap-3 justify-center pt-4">
                                <button
                                    onClick={this.handleReset}
                                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-beige hover:bg-[#1d4a39] transition-colors font-medium"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                    إعادة المحاولة
                                </button>
                                <button
                                    onClick={this.handleGoHome}
                                    className="flex items-center gap-2 px-6 py-2 rounded-lg border border-walnut/15 hover:bg-walnut/5 transition-colors font-medium"
                                >
                                    <Home className="h-4 w-4" />
                                    العودة للرئيسية
                                </button>
                            </div>

                            <p className="text-sm text-brown/70 pt-4">
                                إذا استمرت المشكلة، يرجى التواصل مع الدعم الفني
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
