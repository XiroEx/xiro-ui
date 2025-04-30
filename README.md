# Xiro UI Module

A React-based UI component library designed to streamline the development of modern web applications. It provides reusable components, hooks, and layouts to enhance productivity and maintain consistency across projects.

## Installation

To install the module, use the following command:

```bash
npm install xiro-ui-0.0.1.tgz
```

## Components

The module includes the following components:

### Layout Components

- **`Main`**: A flexible container for the main content of your application.
- **`Nav`**: A navigation bar component.
- **`Sidebar`**: A sidebar for additional navigation or content.
- **`Backdrop`**: A backdrop for modals or overlays.
- **`Modal`**: A modal dialog component.

### UI Components

- **`Button`**: A customizable button component.
- **`Input`**: A styled input field for forms.
- **`LoadingWheel`**: A loading spinner with customizable styles.
- **`Toast`**: A toast notification component for displaying messages.

### Hooks

- **`useIsPWA`**: A hook to detect if the app is running as a Progressive Web App (PWA).

## Usage

### Importing Components

You can import components and hooks from the module as follows:

```tsx
import { Main, Button, Toast, useIsPWA } from 'xiro-ui';

function App() {
  const isPWA = useIsPWA();

  return (
    <Main>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Toast message="Hello, World!" anchor="top" />
      {isPWA && <p>This app is running as a PWA!</p>}
    </Main>
  );
}
```

### Styling

Most components accept a `styles` prop to allow inline customization using `React.CSSProperties`. For example:

```tsx
<LoadingWheel styles={{ width: '100px', height: '100px' }} />
```

## License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](./LICENSE) file for details.

## Development

To contribute to this module, clone the repository and make changes in the `module/src` directory. Ensure all changes are tested before submitting a pull request.