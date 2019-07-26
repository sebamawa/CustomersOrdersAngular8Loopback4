export class DateFormating {
    static readonly optionsDate = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long'
    };

    static getDateFormated(dateString: string, localLanguage: string): string {
      return new Date(dateString).toLocaleDateString(localLanguage, DateFormating.optionsDate);
  }
}
