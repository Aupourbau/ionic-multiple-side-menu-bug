import React from 'react';

import {
	IonButton,
	IonContent,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonTitle,
} from '@ionic/react';

export const Page1: React.FC = () => {
	return (
		<IonPage id="page1">
			<IonMenu
				contentId="page1"
				menuId="page1"
				type="overlay"
				side="end"
			>
				<IonMenuToggle autoHide={false} menu="page1">
					<IonButton>Close Menu 1</IonButton>
				</IonMenuToggle>
				<IonTitle>Content of menu 1</IonTitle>
			</IonMenu>
			<IonContent>
				<IonMenuToggle autoHide={false} menu="page1">
					<IonButton>Open Menu 1</IonButton>
				</IonMenuToggle>
				<IonButton routerLink='/page2/'>Go to Page2</IonButton>
			</IonContent>
		</IonPage>
	);
}
