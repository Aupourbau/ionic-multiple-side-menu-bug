import React, { useState } from 'react';

import {
	IonButton,
	IonContent,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonTitle,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';

export const Page1: React.FC = () => {

	const [disabled, setDisabled] = useState<boolean>(false);

	useIonViewWillEnter(() => {
		console.log('Page1 ionViewWillEnter event fired');
		setDisabled(false);
	});

	useIonViewWillLeave(() => {
		console.log('Page1 ionViewWillLeave event fired');
		setDisabled(true);
	});

	return (
		<React.Fragment>
			<IonMenu
				contentId="page1"
				disabled={disabled}
				menuId="page1"
				type="overlay"
				side="end"
			>
				<IonMenuToggle autoHide={false} menu="page1">
					<IonButton>Close Menu 1</IonButton>
				</IonMenuToggle>
				<IonTitle>Content of menu 1</IonTitle>
			</IonMenu>
			<IonPage id="page1">

				<IonContent>
					<IonMenuToggle autoHide={false} menu="page1">
						<IonButton>Open Menu 1</IonButton>
					</IonMenuToggle>
					<IonButton routerLink='/page2/'>Go to Page2</IonButton>
				</IonContent>
			</IonPage>
		</React.Fragment>
	);
}
