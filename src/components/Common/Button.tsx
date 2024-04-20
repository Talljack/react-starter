import type { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface Props {
  className?: string;
  onClick?: () => void;
  type?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'default';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
  bordered?: boolean;
  bgColor?: string;
  hairline?: boolean;
  loadingText?: string;
  dataTestId?: string;
}

const LoadingSVG: FC = () => {
  return (
    <svg
      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

const Button: FC<Props> = (props) => {
  const size = props.size || 'medium';
  const type = props.type || 'default';
  const bordered = props.bordered || false;
  const sizeClassName = classNames(
    size === 'small' && 'font-medium text-sm px-4 py-2',
    size === 'medium' && 'font-medium text-base px-6 py-2',
    size === 'large' && 'font-medium text-lg px-8 py-3',
  );
  const typeClassName = classNames(
    type === 'primary' && 'bg-blue-500 text-white',
    type === 'info' && 'bg-blue-500 text-white',
    type === 'success' && 'bg-green-500 text-white',
    type === 'warning' && 'bg-yellow-500 text-white',
    type === 'danger' && 'bg-red-500 text-white',
  );
  const hairLineClassName = classNames(
    'border border-width-1',
    type === 'default'
      ? 'border-gray-300'
      : type === 'primary'
        ? 'border-blue-500'
        : type === 'info'
          ? 'border-blue-500'
          : type === 'success'
            ? 'border-green-500'
            : type === 'warning'
              ? 'border-yellow-500'
              : type === 'danger'
                ? 'border-red-500'
                : 'border-gray-300',
  );
  return (
    <button
      className={classNames(
        'button flex items-center',
        props.className,
        props.disabled && 'cursor-not-allowed',
        typeClassName,
        bordered ? 'rounded-full' : 'rounded-md',
        props.hairline ? hairLineClassName : 'border-0',
        sizeClassName,
      )}
      onClick={props.onClick}
      style={{ ...props.style, backgroundColor: props.bgColor }}
      disabled={props.disabled}
      type="button"
      data-testid={props.dataTestId}
    >
      {props.loading && (
        <div className="inline-flex">
          <LoadingSVG />
          <span>{props.loadingText || 'Loading...'}</span>
        </div>
      )}
      {typeof props.children === 'string' || typeof props.children === 'number' ? (
        <span>{props.children}</span>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
