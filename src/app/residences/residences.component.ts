import { ResidenceService } from './../../core/models/services/residence.service';
import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
  ];
  constructor(private residenceService: ResidenceService) {}

  ngOnInit() {
    this.residenceService.getresidences().subscribe(data => {
      this.listResidences = data;
      this.filteredResidences = [...this.listResidences];
    });
  }

  favoriteResidences: Residence[] = [];
  searchText: string = "";
  filteredResidences: Residence[] = [...this.listResidences];

  showLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === "inconnu") {
      alert(`L'adresse de la résidence "${residence.name}" est inconnue.`);
    } else {
      alert(`L'adresse de la résidence "${residence.name}" est : ${residence.address}`);
    }
  }

  toggleFavorite(residence: Residence): void {
    const index = this.favoriteResidences.findIndex(fav => fav.id === residence.id);
    if (index !== -1) {
      this.favoriteResidences.splice(index, 1);
    } else {
      this.favoriteResidences.push(residence);
    }
  }

  isFavorite(residence: Residence): boolean {
    return this.favoriteResidences.some(fav => fav.id === residence.id);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible':
        return 'status-available';
      case 'Vendu':
        return 'status-sold';
      case 'En Construction':
        return 'status-construction';
      default:
        return '';
    }
  }

  filterResidences(): void {
    const lowerSearch = this.searchText.toLowerCase();
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(lowerSearch)
    );
  }


  deleteResidence(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette résidence ?')) {
      this.residenceService.deleteResidence(id).subscribe(
        () => {
          this.listResidences = this.listResidences.filter(residence => residence.id !== id);
          alert('Résidence supprimée avec succès');
          location.reload();
        },
        (error) => {
          console.error('Erreur lors de la suppression de la résidence', error);
        }
      );
    }
  }
}
