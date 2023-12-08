import '../shared/styles.css';
import { createRoot } from 'react-dom/client';
import { appInitialized } from './model.ts';
import { RoutesView } from './router.ts';

const root = createRoot(document.querySelector('#root')!);

root.render(<RoutesView />);
appInitialized();
