import React from 'react';

type AlertType = 'info' | 'warning' | 'success' | 'error' | 'emergency';
type AlertProps = {
    type: AlertType;
    heading: string;
    content: string;
    linkText?: string;
    linkHref?: string;
    isSlim?: boolean;
    noIcon?: boolean;
};

const Alert: React.FC<AlertProps> = ({
    type,
    heading,
    content,
    linkText,
    linkHref = 'javascript:void(0);', // Defaulting to 'javascript:void(0);' for demo purposes
    isSlim = false,
    noIcon = false
}) => {
    let alertClasses = `usa-alert usa-alert--${type}`;
    if (isSlim) {
        alertClasses += ' usa-alert--slim';
    }
    if (noIcon) {
        alertClasses += ' usa-alert--no-icon';
    }

    return (
        <div className={alertClasses} role={type === 'error' || type === 'emergency' ? 'alert' : undefined}>
            <div className="usa-alert__body">
                {heading && <h4 className="usa-alert__heading">{heading}</h4>}
                <p className="usa-alert__text">
                    {content}
                    {linkText && (
                        <a className="usa-link" href={linkHref}>{linkText}</a>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Alert;
