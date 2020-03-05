import React from 'react';

import {
	IonButton,
	IonContent,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonTitle,
} from '@ionic/react';

export const Page2: React.FC = () => {
	return (
		<IonPage id="page2">
			<IonMenu
				contentId="page2"
				menuId="page2"
				type="overlay"
				side="end"
			>
				<IonMenuToggle autoHide={false} menu="page2">
					<IonButton>Close Menu 2</IonButton>
				</IonMenuToggle>
				<IonTitle>Content of menu 2</IonTitle>
			</IonMenu>
			<IonContent>
				<IonMenuToggle autoHide={false} menu="page2">
					<IonButton>Open Menu 2</IonButton>
				</IonMenuToggle>
				<IonButton routerLink='/'>Go to Page1</IonButton>
			</IonContent>
		</IonPage>
	);
}
